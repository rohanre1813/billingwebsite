"use client";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thank you for your message! We'll reply within 24-48 hours."); }}>
      <div>
        <label className="form-label">Your Name *</label>
        <input type="text" placeholder="Rajesh Kumar" className="form-input" required />
      </div>
      <div>
        <label className="form-label">Email Address *</label>
        <input type="email" placeholder="rajesh@example.com" className="form-input" required />
      </div>
      <div>
        <label className="form-label">Subject</label>
        <input type="text" placeholder="Invoice question / Bug report / Feedback" className="form-input" />
      </div>
      <div>
        <label className="form-label">Message *</label>
        <textarea rows={5} placeholder="Your message..." className="form-textarea w-full" required />
      </div>
      <button type="submit" className="btn-primary w-full">Send Message</button>
    </form>
  );
}
