import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import RsvpForm from "@/components/RsvpForm";

export default function RsvpPage() {
  return (
    <>
      <Nav rsvpPage />
      <main className="pt-20 pb-16">
        {/* Mini watercolour header */}
        <div
          className="watercolor-clip w-full h-20 bg-watercolor-header"
          aria-hidden="true"
        />
        <RsvpForm />
      </main>
      <Footer />
    </>
  );
}
