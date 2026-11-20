import Link from 'next/link';

// [DRAFT COPY]
export const metadata = {
  title: 'Privacy Policy',
  description: 'Draft privacy policy for the Internal Haven app and coaching website.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-cotton text-midnight-ink px-5 py-10 sm:px-8 sm:py-16 font-coming-soon">
      <article className="mx-auto max-w-3xl space-y-10 leading-relaxed">
        <header className="space-y-5 border-b border-deep-plum/20 pb-8">
          <p className="rounded-lg border border-deep-plum/30 bg-lavender/30 px-4 py-3 text-deep-plum font-semibold">Draft — pending owner review</p>
          <Link href="/" className="inline-block text-deep-plum underline underline-offset-4">← Internal Haven home</Link>
          <h1 className="font-urbanist text-4xl sm:text-5xl font-bold text-deep-plum">Privacy Policy</h1>
          <p>Effective date: [DATE — owner to confirm]</p>
          <p>This policy explains privacy for the Internal Haven app on iOS, iPadOS and macOS, and for our coaching website. The app and website handle information differently.</p>
        </header>

        <section aria-labelledby="app-privacy" className="space-y-4">
          <h2 id="app-privacy" className="font-urbanist text-2xl font-bold text-deep-plum">1. Internal Haven app</h2>
          <p>Apart from the booking details described below, we do not collect your personal app data. The app does not require an Internal Haven account and does not include analytics, advertising or tracking SDKs. It does not access HealthKit.</p>
          <p>Your journal entries, mood check-ins, habits, saved affirmations, custom moods and journey progress are stored on your device. When iCloud sync is available, these records sync through your own private iCloud account using Apple CloudKit. Apple manages this storage; we cannot access your private iCloud records. Your first name and reminder preferences are stored locally on your device.</p>
          <p>Optional reminders use local notifications scheduled on your device, with your permission. They are not messages sent by our servers.</p>
          <h3 className="font-urbanist text-xl font-bold text-deep-plum">Network features and third parties</h3>
          <p>The app is not entirely offline. Choosing an ambient sound streams audio from Google-hosted gstatic.com URLs. The audio provider receives standard connection information, such as your IP address, when you stream. See <a className="underline underline-offset-4" href="https://policies.google.com/privacy">Google’s privacy policy</a>.</p>
          <p><strong>Coaching bookings:</strong> If you book a coaching session from the app, the booking opens Calendly in an in-app web view or your browser, and we collect the name and email address you enter there. We use them only to schedule your session and contact you about it. We do not use them for tracking or advertising, sell them, or link them to your journal or other app records. Calendly processes booking details for us under <a className="underline underline-offset-4" href="https://calendly.com/legal/privacy-notice">Calendly’s privacy policy</a>.</p>
          <p>External support and resource links open third-party services with their own privacy practices. These services are separate from your private journal and other app records.</p>
          <h3 className="font-urbanist text-xl font-bold text-deep-plum">Deleting app data</h3>
          <p>Use Settings → Delete all my data in the app to delete stored records, local preferences and reminders. Record deletions sync to your other devices when iCloud sync is available. You can also manage or delete the app’s iCloud data through Apple’s iCloud storage settings. Deleting the app removes its local app data, but does not necessarily delete data already stored in iCloud; delete that separately if you want it removed. Apple manages iCloud storage and any associated retention under <a className="underline underline-offset-4" href="https://www.apple.com/legal/privacy/">Apple’s privacy policy</a>.</p>
        </section>

        <section aria-labelledby="website-privacy" className="space-y-4">
          <h2 id="website-privacy" className="font-urbanist text-2xl font-bold text-deep-plum">2. Coaching website</h2>
          <p><strong>Free guides:</strong> When you submit the Freebies form, your name and email address are sent to our Supabase database, along with a form source label. The database also stores subscription status and timestamps. We collect this information to provide the free guides you request. The website records your request; email delivery is handled separately, not by the form itself.</p>
          <p><strong>Bookings:</strong> Scheduling buttons open calendly.com in a new tab. When you book, we collect the name and email address you enter so we can schedule your session and contact you about it. We do not use them for tracking or advertising. Calendly processes booking details for us under its own privacy policy.</p>
          <p><strong>Contact:</strong> If you contact us by email at <a className="underline underline-offset-4 break-words" href="mailto:alyssa@internalhaven.com">alyssa@internalhaven.com</a>, we receive your email address and the information you choose to send so we can respond. The separate contact-page form has no connected submission service; please use email rather than entering private information there.</p>
          <p><strong>Technical information:</strong> We do not use website analytics or advertising trackers. Our hosting provider may keep standard server logs, such as IP addresses, requested URLs, browser information and request times, to operate and secure the site. Fonts are served by the website rather than requested from Google by your browser.</p>
        </section>

        <section aria-labelledby="deletion" className="space-y-4">
          <h2 id="deletion" className="font-urbanist text-2xl font-bold text-deep-plum">3. Requesting deletion of website data</h2>
          <p>To request deletion of your Freebies subscription information, email <a className="underline underline-offset-4 break-words" href="mailto:alyssa@internalhaven.com">alyssa@internalhaven.com</a> from the address you submitted. We may ask for information needed to verify your request. App data is managed on your devices and through your own iCloud account, as described above.</p>
        </section>

        <section aria-labelledby="children" className="space-y-4">
          <h2 id="children" className="font-urbanist text-2xl font-bold text-deep-plum">4. Children’s privacy</h2>
          <p>The app and coaching website are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has submitted information through the website, please contact us so we can arrange its deletion.</p>
        </section>

        <section aria-labelledby="changes" className="space-y-4">
          <h2 id="changes" className="font-urbanist text-2xl font-bold text-deep-plum">5. Changes to this policy</h2>
          <p>We may update this policy as our services or privacy practices change. We will post the updated policy here and revise the effective date. This draft is pending owner review.</p>
        </section>

        <section aria-labelledby="contact" className="space-y-4 border-t border-deep-plum/20 pt-8">
          <h2 id="contact" className="font-urbanist text-2xl font-bold text-deep-plum">6. Contact</h2>
          <p>For privacy questions or requests, contact Internal Haven at <a className="underline underline-offset-4 break-words" href="mailto:alyssa@internalhaven.com">alyssa@internalhaven.com</a>.</p>
          <Link href="/" className="inline-block text-deep-plum underline underline-offset-4">Back to Internal Haven</Link>
        </section>
      </article>
    </main>
  );
}
