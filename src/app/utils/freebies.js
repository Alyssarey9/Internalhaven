export async function submitFreebiesEmail(fullName, email) {
  try {
    const response = await fetch('/api/freebies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, email }),
    });
    return await response.json();
  } catch {
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}
