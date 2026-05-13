import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — JusBill",
  description: "Read JusBill's terms and conditions for using our free GST billing and invoicing tools.",
  alternates: { canonical: "https://billing.jusbill.online/terms-and-conditions" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="container-xl py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-heading font-extrabold text-gray-900 mb-3">Terms and Conditions</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: January 15, 2024</p>

      <Section title="Acceptance of Terms">
        <p>By accessing and using JusBill (jusbill.online), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
      </Section>

      <Section title="Use of Services">
        <p>JusBill provides free online tools for GST invoice generation, receipt creation, GST calculation, and related billing activities. You agree to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Use the services only for lawful purposes</li>
          <li>Not misuse or attempt to disrupt our services</li>
          <li>Ensure the accuracy of information you enter in our tools</li>
          <li>Not use our tools to create fraudulent documents</li>
        </ul>
      </Section>

      <Section title="No Warranty">
        <p>JusBill provides tools &quot;as is&quot; without any warranty of any kind. While we strive for accuracy in GST calculations, we do not guarantee that:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Calculations are error-free for all scenarios</li>
          <li>Generated invoices are accepted by all tax authorities in all situations</li>
          <li>The service will be available 100% of the time</li>
        </ul>
        <p>Always consult a qualified Chartered Accountant or tax professional for complex GST matters.</p>
      </Section>

      <Section title="Limitation of Liability">
        <p>JusBill shall not be liable for any direct, indirect, incidental, or consequential damages resulting from:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Errors in GST calculations due to incorrect data entry</li>
          <li>Tax penalties arising from use of our tools</li>
          <li>Loss of business data (we do not store your data)</li>
          <li>Interruption of service</li>
        </ul>
      </Section>

      <Section title="Intellectual Property">
        <p>All content on JusBill — including the website design, code, blog articles, and tools — is the intellectual property of JusBill. You may not copy, reproduce, or redistribute our content without permission.</p>
        <p>The invoices and documents you generate using our tools are your own property.</p>
      </Section>

      <Section title="Advertising">
        <p>JusBill displays advertisements through Google AdSense and may display other third-party ads. We are not responsible for the content of these advertisements.</p>
      </Section>

      <Section title="Changes to Terms">
        <p>We reserve the right to modify these terms at any time. Continued use of JusBill after changes constitutes acceptance of the new terms.</p>
      </Section>

      <Section title="Governing Law">
        <p>These terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in India.</p>
      </Section>

      <Section title="Contact">
        <p>For questions about these terms, contact us at <a href="mailto:support@jusbill.online" className="text-brand-600 hover:underline">support@jusbill.online</a>.</p>
      </Section>
    </div>
  );
}
