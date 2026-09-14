export const metadata = {
  title: "Project Gallery | Lux Customs Melbourne",
  description: "Explore our portfolio of high-end vehicle modifications, custom vinyl wraps, paint protection film (PPF), and professional window tinting completed at our Melbourne studio.",
};

export default function GalleryLayout({ children }) {
  return (
    <section className="min-h-screen bg-zinc-950">
      {children}
    </section>
  );
}