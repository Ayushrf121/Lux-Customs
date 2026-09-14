export const metadata = {
  title: "Terms of Service | Lux Customs Melbourne",
  description: "Review the Terms and Conditions for Lux Customs detailing our services, user agreements, and business policies in Melbourne.",
};

export default function TermsLayout({ children }) {
  return (
    <section className="min-h-screen bg-zinc-950">
      {children}
    </section>
  );
}