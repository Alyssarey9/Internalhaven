# CalendlyButton Component

A modularized React component for integrating Calendly scheduling into your application.

## Features

- 🔗 **Direct Calendly Integration**: Uses Calendly API to fetch and open event types
- 🎨 **Consistent Styling**: Matches your existing design system with customizable sizes
- ⚡ **Loading States**: Shows loading spinner while fetching event types
- 🛡️ **Error Handling**: Graceful fallback if API calls fail
- 🔧 **Flexible Configuration**: Customizable text, size, and event types

## Setup

1. **Direct Calendly URL**: The component uses your direct Calendly booking link by default:
   ```
   https://calendly.com/alyssarey9/30min
   ```

2. **Custom URL**: You can override this by passing the `eventType` prop:
   ```jsx
   <CalendlyButton eventType="https://calendly.com/your-username/your-event" />
   ```

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

1. **Direct Calendly URL**: Uses your direct Calendly booking link
2. **Current Date**: Automatically adds current month/year to ensure up-to-date calendar
3. **Smart URL Construction**: Builds URL with proper date parameters
4. **Fallback**: Opens your direct Calendly URL if any issues occur
5. **Error Handling**: Shows error message and falls back to direct URL

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

- No API tokens required - uses direct Calendly URLs
- No sensitive data stored or transmitted
- Simple and secure direct link approach
- No server-side API calls needed 