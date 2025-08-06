import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredGrid } from "@/components/staggered-grid"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Scholar Sam Collection",
      collection: "Back to School Collection",
      price: "$24.99 - 8 cards",
      availability: "Available Fall 2024",
      image: "/ScholarSam.png",
      gradient: "from-blue-100 to-blue-200"
    },
    {
      id: 2,
      name: "Gratitude Series",
      collection: "Thanksgiving Collection",
      price: "$24.99 - 8 cards",
      availability: "Available November 2024",
      image: "/GratitudeSeries.png",
      gradient: "from-orange-100 to-orange-200",
      badge: "New"
    },
    {
      id: 3,
      name: "Festive Joy Collection",
      collection: "Holiday Collection",
      price: "$29.99 - 10 cards",
      availability: "Available December 2024",
      image: "/FestiveJoy.png",
      gradient: "from-red-100 to-red-200"
    },
    {
      id: 4,
      name: "Fresh Start Series",
      collection: "New Year Collection",
      price: "$19.99 - 6 cards",
      availability: "Available January 2025",
      image: "/FreshStartSeries.png",
      gradient: "from-purple-100 to-purple-200"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fadeIn" duration={1}>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight leading-none mb-6">
              Our Collections
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.2}>
            <p className="text-2xl text-gray-600 mb-16 font-light">
              Thoughtfully designed greeting cards for every occasion.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggeredGrid 
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
            staggerDelay={0.15}
          >
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
                  {product.badge && (
                    <div className="absolute top-6 right-6 bg-[#007AFF] text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                      {product.badge}
                    </div>
                  )}
                  
                  {/* Product Image */}
                  <div className="aspect-[3/4] mb-8 relative overflow-hidden rounded-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} p-8`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                        {product.collection}
                      </p>
                      <h3 className="text-2xl font-semibold text-gray-900 mt-1">
                        {product.name}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {product.price}
                      </p>
                      <p className="text-sm text-gray-600">
                        {product.availability}
                      </p>
                    </div>

                    <Button 
                      className="w-full bg-[#007AFF] hover:bg-[#0056CC] text-white rounded-full py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection animation="slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
              What Makes Our Cards Special
            </h2>
            <p className="text-xl text-gray-600 mb-16 font-light max-w-3xl mx-auto">
              Each collection is carefully crafted with premium materials and positive psychology principles to create meaningful connections.
            </p>
          </AnimatedSection>

          <StaggeredGrid 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            staggerDelay={0.2}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-[#007AFF] rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Beautiful Design
              </h3>
              <p className="text-gray-600 font-light">
                Each card features stunning artwork and thoughtful typography.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#007AFF] rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Meaningful Messages
              </h3>
              <p className="text-gray-600 font-light">
                Messages designed to spread positivity and strengthen relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#007AFF] rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Premium Quality
              </h3>
              <p className="text-gray-600 font-light">
                Printed on sustainable, high-quality paper that feels amazing.
              </p>
            </div>
          </StaggeredGrid>
        </div>
      </section>
    </div>
  )
}
