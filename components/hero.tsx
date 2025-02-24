import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-100/50 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-pink-50/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4 pt-20">
        <div className="inline-block mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-200 to-pink-100 blur-xl opacity-50" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-lg px-6 py-2 border border-pink-100">
              <span className="text-[#C71585]">✨ Professional Nail Care & Beauty Services</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#8B4513] leading-tight">
          Beauty & Style <span className="text-[#C71585]">Redefined</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Experience luxury nail care and beauty treatments tailored to your unique style
        </p>

        <div className="neon-text text-4xl md:text-5xl font-bold text-pink-500 my-8">NOW OPEN</div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#C71585] hover:bg-[#C71585]/90 text-white rounded-full px-8 text-lg"
            onClick={() => window.open("https://wa.me/+27676883050", "_blank")}
          >
            Book via WhatsApp
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-lg border-[#C71585] text-[#C71585] hover:bg-[#C71585]/10"
          >
            View Services
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {[
            {
              title: "Premium Products",
              description: "Using only the highest quality beauty products",
            },
            {
              title: "Custom Designs",
              description: "Personalized nail art to match your style",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-pink-100">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

