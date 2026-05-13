import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — JusBill",
  description: "Read JusBill's privacy policy. Learn how we handle your data and protect your privacy when using our free GST billing tools.",
  alternates: { canonical: "https://jusbill.online/privacy-policy" },
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
    <div className="container-xl py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-heading font-extrabold text-gray-900 mb-3">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: January 15, 2024</p>

      <Section title="Overview">
        <p>JusBill (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates jusbill.online. This Privacy Policy explains how we collect, use, and protect your information when you use our free billing tools.</p>
        <p><strong>The short version:</strong> We don&apos;t store any invoice or business data you enter on JusBill. All data processing happens in your browser.</p>
      </Section>

      <Section title="Data We Collect">
        <p>We collect minimal data to improve our services:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Anonymous usage analytics (pages visited, tool usage)</li>
          <li>Browser type, device type, and general location (country/state level)</li>
          <li>Cookies for session management and Google Analytics</li>
        </ul>
        <p>We do <strong>NOT</strong> collect or store any invoice data, business names, GSTINs, client names, or financial information you enter in our tools.</p>
      </Section>

      <Section title="Invoice and Business Data">
        <p>All data you enter in JusBill&apos;s tools (invoice details, seller/buyer information, item lists, salary data) is processed entirely within your browser. This data:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Is never sent to our servers</li>
          <li>Is never stored in any database</li>
          <li>Is deleted when you close or refresh the page</li>
          <li>Is only used to generate your PDF/preview in the browser</li>
        </ul>
      </Section>

      <Section title="Cookies">
        <p>We use the following cookies:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Analytics cookies:</strong> Google Analytics to understand how users use our site</li>
          <li><strong>Advertising cookies:</strong> Google AdSense may serve personalized ads based on your browsing</li>
          <li><strong>Session cookies:</strong> Temporary cookies cleared when you close your browser</li>
        </ul>
        <p>You can disable cookies in your browser settings. Some features may not work correctly if cookies are disabled.</p>
      </Section>

      <Section title="Google AdSense">
        <p>JusBill uses Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our site or other sites on the internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-brand-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</p>
      </Section>

      <Section title="Third-Party Links">
        <p>Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
      </Section>

      <Section title="Children&apos;s Privacy">
        <p>JusBill is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
      </Section>

      <Section title="Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by updating the &quot;Last updated&quot; date at the top of this page.</p>
      </Section>

      <Section title="Contact Us">
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@jusbill.online" className="text-brand-600 hover:underline">support@jusbill.online</a>.</p>
      </Section>
    </div>
  );
}
