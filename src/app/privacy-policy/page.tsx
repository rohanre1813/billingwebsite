import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — JusBill",
  description: "Read JusBill's privacy policy. Learn how we handle your data and protect your privacy when using our free GST billing tools.",
  alternates: { canonical: "https://billing.jusbill.online/privacy-policy" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container-xl py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-12 border-b border-gray-100 pb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

      <div className="space-y-10">
        <Section title="1. Introduction and Overview">
          <p>Welcome to JusBill (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), accessible from <strong>billing.jusbill.online</strong>. We are committed to protecting your personal information and your right to privacy.</p>
          <p>This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it when you use our free billing and invoicing tools.</p>
          <div className="bg-brand-50 border border-brand-100 p-5 rounded-xl mt-4">
            <p className="font-semibold text-brand-900 mb-1">The Most Important Thing You Should Know:</p>
            <p className="text-brand-800 text-sm">We <strong>DO NOT</strong> store, collect, or transmit any of the invoice data, business details, or financial numbers you enter into our tools. All document generation happens strictly locally in your web browser.</p>
          </div>
        </Section>

        <Section title="2. Information We Collect">
          <p>We automatically collect certain information when you visit, use, or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
            <li><strong>Log and Usage Data:</strong> Service-related, diagnostic, usage, and performance information our servers automatically collect.</li>
            <li><strong>Device Data:</strong> Information about your computer, phone, or tablet used to access the Website (e.g., browser type, OS version).</li>
            <li><strong>Location Data:</strong> Non-precise location data based on your IP address.</li>
          </ul>
        </Section>

        <Section title="3. Processing of Invoice and Business Data">
          <p>Our tools (GST Invoice Generator, Receipt Generator, Calculator, etc.) are built using client-side technologies. This means:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
            <li>The text, numbers, and business details you type into the forms are never sent to our servers.</li>
            <li>The PDF documents are rendered directly by your device&apos;s processor.</li>
            <li>If you close or refresh the page, your entered data is permanently lost.</li>
            <li>We have absolutely zero visibility into who you are billing or how much you are billing them.</li>
          </ul>
        </Section>

        <Section title="4. Google Analytics Usage">
          <p>We use <strong>Google Analytics 4 (GA4)</strong> to understand how users interact with our website. Google Analytics collects information such as how often users visit this site, what pages they visit when they do so, and what other sites they used prior to coming to this site.</p>
          <p className="mt-2">Google Analytics utilizes cookies and similar tracking technologies to collect this data. We use the information we get from Google Analytics only to improve our Website and services. We do not combine the information collected through the use of Google Analytics with personally identifiable information.</p>
          <p className="mt-2 text-sm text-gray-500">You can learn more about how Google uses your data by visiting <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Google&apos;s Partner Sites Policy</a>.</p>
        </Section>

        <Section title="5. Google AdSense and Advertising">
          <p>To keep JusBill free for all users, we monetize our website using <strong>Google AdSense</strong>. Third party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to our website or other websites.</p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
            <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet.</li>
            <li>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Ads Settings</a>.</li>
            <li>Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">www.aboutads.info</a>.</li>
          </ul>
        </Section>

        <Section title="6. Cookie Policy">
          <p>Cookies are small data files stored on your hard drive or in device memory. We use cookies to:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
            <li>See which areas and features of our Website are popular and count visits.</li>
            <li>Enable Google Analytics tracking.</li>
            <li>Allow advertising networks (like AdSense) to deliver targeted ads.</li>
          </ul>
          <p className="mt-2">Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our advertising and analytics tracking, but it will <strong>not</strong> break the core billing tools.</p>
        </Section>

        <Section title="7. Third-Party Links">
          <p>Our website may contain links to external sites that are not operated by us. If you click on a third-party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
        </Section>

        <Section title="8. Contact Us">
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us at:</p>
          <p className="mt-3 font-semibold">Email: <a href="mailto:jusbill.contact@gmail.com" className="text-brand-600 hover:underline">jusbill.contact@gmail.com</a></p>
        </Section>
      </div>
    </div>
  );
}
