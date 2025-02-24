"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Nav() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#8B4513]">
            Brushed by Milly
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-[#8B4513] hover:text-[#C71585] transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="text-[#8B4513] hover:text-[#C71585] transition-colors">
              Gallery
            </Link>
            <Link href="#booking" className="text-[#8B4513] hover:text-[#C71585] transition-colors">
              Book Now
            </Link>
            <Button
              className="bg-[#C71585] hover:bg-[#C71585]/90 text-white"
              onClick={() => window.open("https://wa.me/+27676883050", "_blank")}
            >
              WhatsApp Booking
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="#services" className="text-lg">
                  Services
                </Link>
                <Link href="#gallery" className="text-lg">
                  Gallery
                </Link>
                <Link href="#booking" className="text-lg">
                  Book Now
                </Link>
                <Button
                  className="bg-[#C71585] hover:bg-[#C71585]/90 text-white w-full"
                  onClick={() => window.open("https://wa.me/+27676883050", "_blank")}
                >
                  WhatsApp Booking
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

