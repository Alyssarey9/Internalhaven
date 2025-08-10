/**
 * Calendly API route for server-side event type fetching
 * Handles Calendly API calls securely without exposing tokens to client
 */

/**
 * GET handler for fetching Calendly event types
 * @param {Request} request - The incoming request
 * @returns {Response} JSON response with event types or error
 */
export async function GET(request) {
  try {
    // Get Calendly token from server environment
    const token = process.env.CALENDLY_TOKEN;
    
    if (!token) {
      return Response.json(
        { error: 'Calendly token not configured' },
        { status: 500 }
      );
    }

    // First, get the user's URI to fetch their event types
    const userResponse = await fetch('https://api.calendly.com/v2/users/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!userResponse.ok) {
      const errorText = await userResponse.text();
      console.error('Calendly user API error:', errorText);
      throw new Error(`Calendly user API error: ${userResponse.status} - ${errorText}`);
    }

    const userData = await userResponse.json();
    const userUri = userData.data.uri;

    // Fetch event types for the user
    const eventTypesResponse = await fetch(`https://api.calendly.com/v2/event_types?user=${userUri}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!eventTypesResponse.ok) {
      const errorText = await eventTypesResponse.text();
      console.error('Calendly event types API error:', errorText);
      throw new Error(`Calendly event types API error: ${eventTypesResponse.status} - ${errorText}`);
    }

    const eventTypesData = await eventTypesResponse.json();
    
    // Handle v2 API response structure
    const eventTypes = eventTypesData.data || [];
    
    console.log('Found event types:', eventTypes.map(et => et.attributes.name));
    
    // Find discovery call event type
    const discoveryEvent = eventTypes.find(event => 
      event.attributes.name.toLowerCase().includes('discovery') ||
      event.attributes.name.toLowerCase().includes('consultation') ||
      event.attributes.name.toLowerCase().includes('call') ||
      (event.attributes.description && event.attributes.description.toLowerCase().includes('discovery'))
    );

    // Return event types with discovery call highlighted
    return Response.json({
      success: true,
      discoveryEvent: discoveryEvent || eventTypes[0],
      allEvents: eventTypes,
      userUri: userUri
    });

  } catch (error) {
    console.error('Calendly API error:', error);
    
    return Response.json(
      { 
        error: 'Failed to fetch Calendly event types',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 