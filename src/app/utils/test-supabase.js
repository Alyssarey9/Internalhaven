import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ugkebieesbsfizsstjct.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON;

/**
 * Test Supabase connection and table access
 */
export async function testSupabaseConnection() {
  console.log('🧪 Testing Supabase connection...');
  console.log('🔗 URL:', supabaseUrl);
  console.log('🔑 Key exists:', !!supabaseKey);
  console.log('🔑 Key length:', supabaseKey ? supabaseKey.length : 0);

  if (!supabaseKey) {
    console.error('❌ No Supabase key found!');
    return { success: false, error: 'No Supabase key' };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // Test 1: Simple query to check if table exists
    console.log('🔍 Testing table access...');
    const { data, error } = await supabase
      .from('freebies_subscribers')
      .select('count')
      .limit(1);

    if (error) {
      console.error('❌ Table access error:', error);
      return { success: false, error: error.message };
    }

    console.log('✅ Table access successful');
    console.log('📊 Data:', data);

    // Test 2: Try to insert a test record
    console.log('🔍 Testing insert capability...');
    const testData = {
      full_name: 'Test User',
      email: `test-${Date.now()}@example.com`,
      source: 'connection_test'
    };

    const { data: insertData, error: insertError } = await supabase
      .from('freebies_subscribers')
      .insert([testData])
      .select();

    if (insertError) {
      console.error('❌ Insert test failed:', insertError);
      return { success: false, error: insertError.message };
    }

    console.log('✅ Insert test successful:', insertData);

    // Clean up test data
    await supabase
      .from('freebies_subscribers')
      .delete()
      .eq('source', 'connection_test');

    console.log('🧹 Test data cleaned up');

    return { success: true, message: 'All tests passed!' };

  } catch (err) {
    console.error('❌ Test failed:', err);
    return { success: false, error: err.message };
  }
} 