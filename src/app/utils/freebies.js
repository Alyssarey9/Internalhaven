import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ugkebieesbsfizsstjct.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON;
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Submit email for freebies subscription
 * @param {string} fullName - User's full name
 * @param {string} email - User's email address
 * @returns {Promise<{success: boolean, error?: string}>} - Result of submission
 */
export async function submitFreebiesEmail(fullName, email) {
  try {
    console.log('🚀 Starting freebies email submission...');
    console.log('🔑 Supabase Key exists:', !!supabaseKey);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Email validation failed');
      return { success: false, error: 'Please enter a valid email address' };
    }

    // Basic name validation
    if (!fullName || fullName.trim().length < 2) {
      console.log('❌ Name validation failed');
      return { success: false, error: 'Please enter your full name' };
    }

    // Check if environment variable is set
    if (!supabaseKey) {
      console.error('❌ NEXT_PUBLIC_SUPABASE_ANON environment variable is not set');
      return { success: false, error: 'Configuration error. Please contact support.' };
    }

    // Prepare data for insertion
    const insertData = {
      full_name: fullName.trim(),
      email: email.toLowerCase().trim(),
      source: 'website_freebies_modal'
    };


    // Insert data into freebies_subscribers table
    console.log('🔄 Attempting Supabase insert...');
    const { data, error } = await supabase
      .from('freebies_subscribers')
      .insert([insertData])
      .select();

    if (error) {
      console.error('❌ Error code:', error.code);
      
      // Handle unique constraint violation (email already exists)
      if (error.code === '23505') {
        return { success: false, error: 'This email is already subscribed to our freebies!' };
      }
      
      // Handle RLS policy violation
      if (error.code === '42501') {
        return { 
          success: false, 
          error: 'Database configuration issue. Please try again or contact support.' 
        };
      }
      
      return { success: false, error: 'Unable to subscribe. Please try again.' };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
} 