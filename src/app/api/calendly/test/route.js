/**
 * Test endpoint for Calendly integration
 * Helps verify API connection and token validity
 */

export async function GET() {
  try {
    const token = process.env.CALENDLY_TOKEN;
    
    if (!token) {
      return Response.json({
        success: false,
        error: 'CALENDLY_TOKEN not configured in environment variables'
      });
    }

    // Test user authentication
    const userResponse = await fetch('https://api.calendly.com/v2/users/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!userResponse.ok) {
      const errorText = await userResponse.text();
      return Response.json({
        success: false,
        error: `User API failed: ${userResponse.status}`,
        details: errorText
      });
    }

    const userData = await userResponse.json();
    const userUri = userData.data.uri;

    // Test event types fetch
    const eventTypesResponse = await fetch(`https://api.calendly.com/v2/event_types?user=${userUri}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!eventTypesResponse.ok) {
      const errorText = await eventTypesResponse.text();
      return Response.json({
        success: false,
        error: `Event types API failed: ${eventTypesResponse.status}`,
        details: errorText
      });
    }

    const eventTypesData = await eventTypesResponse.json();
    const eventTypes = eventTypesData.data || [];

    return Response.json({
      success: true,
      user: {
        name: userData.data.attributes.name,
        email: userData.data.attributes.email,
        uri: userUri
      },
      eventTypes: eventTypes.map(et => ({
        name: et.attributes.name,
        description: et.attributes.description,
        uri: et.uri,
        bookingUrl: `https://calendly.com/app/scheduling/${et.uri.split('/').pop()}`
      })),
      totalEvents: eventTypes.length
    });

  } catch (error) {
    console.error('Calendly test error:', error);
    
    return Response.json({
      success: false,
      error: 'Test failed',
      details: error.message
    });
  }
} 