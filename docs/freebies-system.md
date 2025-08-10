# Freebies Email Capture System

## Overview
The freebies system captures user emails for life coaching tools and stores them in a Supabase database.

## Database Schema

### Table: `freebies_subscribers`
- `id` (UUID): Primary key
- `email` (VARCHAR): User's email address (unique)
- `created_at` (TIMESTAMP): When the subscription was created
- `updated_at` (TIMESTAMP): Last update timestamp
- `status` (VARCHAR): Subscription status (default: 'active')
- `source` (VARCHAR): Where the subscription came from (default: 'website')

## Files

### Database
- `supabase/schema.sql` - Database schema with table creation and policies

### Frontend
- `src/app/utils/freebies.js` - Utility function for email submission
- `src/app/components/modals/FreebiesModal.jsx` - Modal with email capture form

## Features

### Email Capture Form
- Real-time email validation
- Loading states during submission
- Success/error feedback
- Duplicate email handling

### Database Features
- Row Level Security (RLS) enabled
- Automatic timestamp updates
- Unique email constraint
- Indexed for performance

## Usage

1. **Run the SQL schema** in your Supabase dashboard
2. **Set environment variables**:
   ```
   NEXT_PUBLIC_SUPABASE_ANON=your_supabase_anon_key
   ```
3. **Access the modal** via the "FREEBIES" button on the homepage

## Email Flow
1. User enters email in FreebiesModal
2. Email is validated client-side
3. Email is submitted to `freebies_subscribers` table
4. User receives success/error feedback
5. Email is stored for future marketing/automation

## Security
- RLS policies allow anonymous inserts
- Email addresses are normalized (lowercase, trimmed)
- No sensitive data stored beyond email
- Input validation on both client and server 