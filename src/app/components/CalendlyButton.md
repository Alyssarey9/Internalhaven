# CalendlyButton Component

A modularized React component for integrating Calendly scheduling into your application.

## Features

- 🔗 **Direct Calendly Integration**: Uses Calendly API to fetch and open event types
- 🎨 **Consistent Styling**: Matches your existing design system with customizable sizes
- ⚡ **Loading States**: Shows loading spinner while fetching event types
- 🛡️ **Error Handling**: Graceful fallback if API calls fail
- 🔧 **Flexible Configuration**: Customizable text, size, and event types

## Setup

1. **Environment Variable**: Add your Calendly personal access token to `.env.local`:
   ```
   CALENDLY_TOKEN=your_calendly_personal_access_token_here
   ```

2. **Get Calendly Token**: 
   - Go to [Calendly Integrations](https://calendly.com/integrations)
   - Create a new API key
   - Copy the personal access token

## Usage

### Basic Usage
```jsx
import CalendlyButton from './components/CalendlyButton';

<CalendlyButton />
```

### Custom Text
```jsx
<CalendlyButton text="Book Your Free Consultation" />
```

### Different Sizes
```jsx
<CalendlyButton size="small" />
<CalendlyButton size="medium" />
<CalendlyButton size="large" />
```

### Full Width
```jsx
<CalendlyButton fullWidth={true} />
```

### Direct Event Type URL
```jsx
<CalendlyButton eventType="https://calendly.com/your-username/discovery-call" />
```

### Custom Click Handler
```jsx
<CalendlyButton onClick={() => console.log('Custom action')} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | "Schedule Your FREE Discovery Call" | Button text |
| `className` | string | "" | Additional CSS classes |
| `size` | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| `fullWidth` | boolean | false | Whether button takes full width |
| `onClick` | function | undefined | Custom click handler (overrides Calendly) |
| `eventType` | string | undefined | Direct Calendly event type URL |

## How It Works

1. **Server-Side API**: Makes secure API calls through `/api/calendly` route
2. **Token Security**: Calendly token stored server-side only
3. **User Authentication**: Fetches user profile using Calendly API v2
4. **Event Type Detection**: Retrieves all user's event types
5. **Smart Matching**: Looks for discovery/consultation events by name/description
6. **Booking URL Construction**: Creates proper Calendly booking URLs
7. **Fallback**: Opens first available event type if no discovery call found
8. **Error Handling**: Shows error message and falls back to Calendly homepage

## Styling

The component uses your existing `btn-primary` class and includes:
- Loading spinner animation
- Error message styling
- Responsive design
- Hover effects

## Error Handling

- **Missing Token**: Shows error and falls back to Calendly homepage
- **API Failure**: Displays error message with retry option
- **No Events**: Falls back to first available event type
- **Network Issues**: Graceful degradation with user feedback

## Security

- Token is stored server-side only (not exposed to client)
- All API calls go through secure server-side route
- No sensitive data is logged or exposed to browser
- Environment variables are properly protected 