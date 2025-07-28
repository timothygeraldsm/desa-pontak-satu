import Link from "next/link"
import { ArrowRight, Users, Building, TrendingUp, Leaf, Calendar, Phone } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Selamat Datang di Website Resmi
              <span className="block text-secondary">Desa Pontak Satu</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Informasi, Layanan, dan Inovasi untuk Warga</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/profil"
                className="inline-flex items-center px-8 py-3 bg-secondary hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Lihat Profil Desa
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Hubungi Kami
                <Phone className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message from Village Head */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Kepala Desa Pontak Satu"
                  width={300}
                  height={300}
                  className="rounded-lg mx-auto"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Sambutan Hukum Tua</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Puji syukur ke hadirat Tuhan Yang Maha Kuasa karena atas rahmat dan kasih-Nya, Website Resmi Desa
                  Pontak Satu ini dapat hadir sebagai sarana informasi dan komunikasi antara pemerintah desa dan seluruh
                  masyarakat. Sebagai Hukum Tua Desa Pontak Satu, saya menyambut baik kehadiran website ini sebagai
                  bagian dari upaya kami dalam mewujudkan tata kelola pemerintahan desa yang terbuka, partisipatif, dan
                  berbasis teknologi informasi. Kehadiran website ini diharapkan dapat menjadi jendela informasi bagi
                  masyarakat mengenai berbagai program, kegiatan, dan potensi yang dimiliki Desa Pontak Satu. Desa
                  Pontak Satu yang resmi dimekarkan pada tanggal 27 Juli 2004, terus berbenah dan berkembang dari waktu
                  ke waktu. Dalam perjalanannya, kami berkomitmen untuk selalu membangun desa secara menyeluruh, baik
                  dari aspek pelayanan publik, pembangunan infrastruktur, penguatan ekonomi masyarakat, termasuk
                  pengembangan sektor pertanian sebagai salah satu potensi utama desa. Kami juga membuka ruang
                  interaksi, aspirasi, serta partisipasi warga melalui media ini. Karena kami percaya, kemajuan Desa
                  Pontak Satu tidak akan tercapai tanpa keterlibatan aktif seluruh elemen masyarakat. Akhir kata, saya
                  mengucapkan terima kasih kepada semua pihak yang telah berkontribusi dalam pembangunan desa, serta
                  berharap website ini dapat menjadi media yang bermanfaat dan informatif bagi kita semua.
                </p>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-gray-800">Noldy S. Lumenta, S.E.</p>
                  <p className="text-gray-600">Hukum Tua Desa Pontak Satu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Akses Cepat</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan informasi dan layanan yang Anda butuhkan dengan mudah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Profil Desa",
                description: "Sejarah, visi misi, dan informasi umum desa",
                icon: Users,
                href: "/profil",
                color: "bg-blue-500",
              },
              {
                title: "Pemerintahan",
                description: "Struktur organisasi dan perangkat desa",
                icon: Building,
                href: "/pemerintahan",
                color: "bg-green-500",
              },
              {
                title: "Data & Statistik",
                description: "Informasi kependudukan dan wilayah",
                icon: TrendingUp,
                href: "/data-statistik",
                color: "bg-purple-500",
              },
              {
                title: "Potensi Desa",
                description: "Kekayaan alam dan ekonomi desa",
                icon: Leaf,
                href: "/potensi",
                color: "bg-green-600",
              },
              {
                title: "Berita & Kegiatan",
                description: "Update terbaru dan agenda desa",
                icon: Calendar,
                href: "/berita",
                color: "bg-orange-500",
              },
              {
                title: "Kontak Kami",
                description: "Hubungi perangkat desa",
                icon: Phone,
                href: "/kontak",
                color: "bg-red-500",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 group"
                >
                  <div
                    className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center text-primary font-semibold">
                    Selengkapnya
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Berita Terkini</h2>
            <p className="text-gray-600">Update terbaru dari Desa Pontak Satu</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pembangunan Jalan Desa Tahap II Dimulai",
                date: "15 Januari 2024",
                excerpt: "Proyek pembangunan jalan desa tahap kedua telah dimulai dengan anggaran dari APBDes 2024...",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Program Bantuan Bibit Tanaman untuk Petani",
                date: "12 Januari 2024",
                excerpt:
                  "Desa Pontak Satu meluncurkan program bantuan bibit tanaman untuk meningkatkan hasil pertanian...",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Pelatihan Digital Marketing untuk UMKM",
                date: "10 Januari 2024",
                excerpt:
                  "Pelatihan digital marketing diselenggarakan untuk membantu UMKM desa memasarkan produk secara online...",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Link href="/berita" className="text-primary font-semibold hover:underline">
                    Baca selengkapnya →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/berita"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Lihat Semua Berita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
