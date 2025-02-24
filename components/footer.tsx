import { Facebook, Instagram, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Link href="https://wa.me/+27676883050" target="_blank">
                  +27 67 688 3050
                </Link>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location available upon booking
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-pink-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-pink-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 9am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Brushed by Milly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

