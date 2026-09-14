export const metadata = {
  title: "Privacy Policy | Lux Customs Melbourne",
  description: "Read the Privacy Policy for Lux Customs to understand how we collect, use, and safeguard your personal data.",
};

export default function PrivacyLayout({ children }) {
  return (
    <section className="min-h-screen bg-zinc-950">
      {children}
    </section>
  );
}