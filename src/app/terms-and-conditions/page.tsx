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
    <div className="container-xl py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-gray-900 mb-4">Terms and Conditions</h1>
      <p className="text-gray-500 text-sm mb-12 border-b border-gray-100 pb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

      <div className="space-y-10">
        <Section title="1. Agreement to Terms">
          <p>By accessing, browsing, or using JusBill (located at <strong>billing.jusbill.online</strong>), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue use of the Website immediately.</p>
        </Section>

        <Section title="2. Description of Service">
          <p>JusBill provides free, web-based tools designed to help Indian businesses generate billing documents, including but not limited to GST Invoices, Proforma Invoices, Receipts, and Salary Slips (collectively, the &quot;Services&quot;). The Services are provided for convenience and organizational purposes only.</p>
        </Section>

        <Section title="3. User Responsibilities">
          <p>When using our Services, you agree and warrant that:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
            <li>You are responsible for the accuracy, legality, and validity of the data you enter into the generated documents.</li>
            <li>You will not use the Services to generate fraudulent, deceptive, or illegal documents.</li>
            <li>You understand that JusBill does not verify the GSTIN, PAN, or financial numbers entered by you.</li>
            <li>You will use the generated documents in compliance with the Central Goods and Services Tax Act, 2017 (and related state laws) as applicable to your business.</li>
          </ul>
        </Section>

        <Section title="4. Disclaimer of Warranties and Tax Advice">
          <p><strong>The Services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.</strong></p>
          <p className="mt-3">JusBill explicitly disclaims all warranties, express or implied. We do not guarantee that the GST calculations, tax rates, or document formats will be 100% error-free or perfectly aligned with every specific business scenario.</p>
          <p className="mt-3"><strong>No Tax Advice:</strong> JusBill is a software tool, not a Chartered Accountant or tax consultant. The use of our tool does not constitute legal, financial, accounting, or tax advice. You are strictly advised to review all generated documents and consult a qualified tax professional before filing returns or submitting documents to the government.</p>
        </Section>

        <Section title="5. Limitation of Liability">
          <p>To the maximum extent permitted by applicable Indian law, in no event shall JusBill, its developers, or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
            <li>Loss of profits, revenue, or business opportunities.</li>
            <li>Penalties, fines, or interest levied by the Income Tax Department or GST Authorities due to incorrect document generation.</li>
            <li>Loss of data, as all processing is done locally on your device and we provide no cloud storage or backup services.</li>
          </ul>
        </Section>

        <Section title="6. Intellectual Property Rights">
          <p>The Website, including its original content, UI/UX design, graphics, and source code, are owned by JusBill and are protected by international copyright and intellectual property laws. You may not copy, reproduce, or distribute the Website&apos;s code or design without explicit written permission.</p>
          <p className="mt-3">However, you hold all rights and ownership to the specific text, data, and PDF documents you generate using our tools.</p>
        </Section>

        <Section title="7. Advertising and Third-Party Links">
          <p>JusBill is a free service supported by advertising (such as Google AdSense). We may display ads on the Website. We are not responsible for the products, services, or claims made in these third-party advertisements. Clicking on an ad is at your own risk and subject to the third party&apos;s terms of service.</p>
        </Section>

        <Section title="8. Modifications to the Service and Terms">
          <p>We reserve the right to modify, suspend, or discontinue any part of the Services at any time without notice. We also reserve the right to update these Terms and Conditions at our discretion. Your continued use of the Website after any changes indicates your acceptance of the new Terms.</p>
        </Section>

        <Section title="9. Contact Information">
          <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
          <p className="mt-3 font-semibold">Email: <a href="mailto:jusbill.contact@gmail.com" className="text-brand-600 hover:underline">jusbill.contact@gmail.com</a></p>
        </Section>
      </div>
    </div>
  );
}
