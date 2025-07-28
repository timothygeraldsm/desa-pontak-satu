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

            <div className="lg:col-span-2">
  <div className="aspect-w-16 aspect-h-9 w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.847958200064!2d124.48423899999999!3d0.9988985499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x327e00757b4f718b%3A0xf9e4842a4f507b03!2sPontak%20Satu%2C%20Ranoyapo%2C%20South%20Minahasa%20Regency%2C%20North%20Sulawesi!5e0!3m2!1sen!2sid!4v1753733500140!5m2!1sen!2sid"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full border-0"
    ></iframe>
  </div>
</div>

          </div>
        </div>
      </section>
    </div>
  )
}
