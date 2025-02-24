import Nav from "@/components/nav"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import BookingForm from "@/components/booking-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Gallery />
      <BookingForm />
      <Footer />
    </div>
  )
}

