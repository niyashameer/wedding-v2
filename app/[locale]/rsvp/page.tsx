import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import RsvpForm from "@/components/RsvpForm";

export default function RsvpPage() {
  return (
    <>
      <Nav rsvpPage />
      <main className="pt-10 pb-16">
        
        <RsvpForm />
      </main>
      <Footer />
    </>
  );
}
