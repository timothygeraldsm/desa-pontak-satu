import { Wheat } from "lucide-react"
import Image from "next/image"

export default function PotensiPage() {
  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="text-sm text-gray-500">
          <span>Beranda</span> / <span className="text-primary">Potensi Desa</span>
        </nav>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Potensi Desa Pontak Satu</h1>
        <p className="text-xl text-gray-600">Kekayaan alam dan ekonomi yang dimiliki desa</p>
      </div>

      {/* Potensi Pertanian */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Potensi Pertanian</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Desa Pontak Satu memiliki lahan pertanian yang subur dengan berbagai komoditas unggulan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Nilam",
                description: "Komoditas pertanian unggulan untuk minyak atsiri.",
                image: "/placeholder.svg?height=200&width=300",
                icon: Wheat,
              },
              {
                title: "Kelapa Kopra",
                description: "Produksi kelapa kopra sebagai sumber pendapatan utama.",
                image: "/placeholder.svg?height=200&width=300",
                icon: Wheat,
              },
              {
                title: "Jagung",
                description: "Budidaya jagung sebagai komoditas pangan dan pakan.",
                image: "/placeholder.svg?height=200&width=300",
                icon: Wheat,
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-accent rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Icon className="w-6 h-6 text-secondary mr-2" />
                      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
