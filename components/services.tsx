import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = {
  gelServices: [
    { name: "Rubberbase Overlay", price: "R150" },
    { name: "Polygel Overlay", price: "R170" },
    { name: "Rubberbase on tips (S)", price: "R180" },
    { name: "Polygel on tips (S/M)", price: "R190/210" },
    { name: "Rubberbase Pedicure", price: "R120" },
    { name: "Polygel Pedicure", price: "R130" },
  ],
  combos: [
    { name: "Rubberbase Mani&Pedi", price: "R250" },
    { name: "Polygel Mani&Pedi (S)", price: "R290" },
    { name: "Polygel on tips mani &pedi (M)", price: "R320" },
  ],
  extraServices: [
    { name: "Nail art/hand design", price: "R10" },
    { name: "Charms/Stones/3D", price: "R10" },
    { name: "French Design per nail", price: "R5" },
    { name: "Buff and Shine", price: "R100" },
    { name: "Soak Off", price: "R70" },
    { name: "Refill", price: "R120" },
  ],
}

export default function Services() {
  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B4513] mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard title="Gel Services" services={services.gelServices} />
          <ServiceCard title="Combo Packages" services={services.combos} />
          <ServiceCard title="Extra Services" services={services.extraServices} />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, services }: { title: string; services: { name: string; price: string }[] }) {
  return (
    <Card className="bg-pink-50 border-pink-200">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-[#8B4513]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="text-gray-800">{service.name}</span>
              <span className="font-semibold text-[#C71585]">{service.price}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

