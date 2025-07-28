import { MapPin, Phone, Facebook, Send } from "lucide-react"

export default function KontakPage() {
  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="text-sm text-gray-500">
          <span>Beranda</span> / <span className="text-primary">Kontak Kami</span>
        </nav>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Kontak Kami</h1>
        <p className="text-xl text-gray-600">Hubungi perangkat desa untuk informasi dan layanan</p>
      </div>

      {/* Contact Information */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Alamat</h3>
                </div>
                <p className="text-gray-600">
                  Jl. Amurang – Kotamubagu, Kec. Ranoyapo
                  <br />
                  Kab. Minahasa Selatan
                  <br />
                  Prov. Sulawesi Utara
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Telepon</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">Sekretaris Desa: +62819-1823-6798</p>
                </div>
              </div>

              {/* Empty Contact Darurat section */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Kontak Darurat</h3>
                </div>
                <p className="text-gray-600">Informasi kontak darurat tidak tersedia.</p>
              </div>

              {/* Empty Social Media Desa section */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Sosial Media Desa</h3>
                </div>
                <p className="text-gray-600">Informasi sosial media tidak tersedia.</p>
              </div>
            </div>

            {/* Placeholder for Contact Form - Removed as no data provided */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center h-full">
                <div className="text-center text-gray-500">
                  <Send className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Formulir kontak tidak tersedia.</p>
                  <p className="text-sm mt-2">Silakan gunakan informasi kontak di samping.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
