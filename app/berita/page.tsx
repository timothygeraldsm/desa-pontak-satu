import { Calendar, User, Tag } from "lucide-react" // Removed ArrowRight as it's no longer needed
import Image from "next/image"
// Removed Link as it's no longer needed for individual news articles

export default function BeritaPage() {
  const beritaTerkini = [
    {
      id: 1,
      title:
        "Serah Terima Jabatan Pejabat Hukum Tua lama Desa Pontak Satu kepada Pejabat Hukum Tua Baru Bpk. Noldy S. Lumenta, S.E.",
      content:
        "Pemerintah Desa Pontak Satu telah melaksanakan prosesi Serah Terima Jabatan dan Administrasi Pemerintahan Desa dari Pejabat Hukum Tua, Bapak Jhonly E. Soputan, kepada Hukum Tua definitif terpilih, Bapak Noldy S. Lumenta, S.E., pada Rabu, 9 Juli 2025. Acara ini digelar di Balai Desa Pontak Satu dan dihadiri oleh perangkat desa, BPD, tokoh masyarakat, serta para tamu undangan lainnya. Momentum tersebut menjadi semakin istimewa karena bertepatan dengan hari pertama kedatangan Mahasiswa KKT Universitas Sam Ratulangi Posko 143, yang juga turut menyaksikan langsung transisi kepemimpinan desa.",
      date: "9 Juli 2025",
      author: "Pemerintah Desa",
      category: "Pemerintahan",
      image: "/foto/BERITA 1.png",
      featured: true,
    },
    {
      id: 2,
      title: "Dosen Pembimbing Lapangan Dr. Jessy J. Pondaag, S.E., M.Si Kunjungi Mahasiswa KKT 143 Posko Pontak Satu",
      content:
        "Mahasiswa Kuliah Kerja Terpadu (KKT) Universitas Sam Ratulangi Posko 143 Desa Pontak Satu mendapat kunjungan dari Dosen Pembimbing Lapangan, Dr. Jessy J. Pondaag, S.E., M.Si, sebanyak dua kali yakni pada tanggal 14 Juli 2025 dan 22 Juli 2025. Kunjungan pertama yang dilakukan pada Senin, 14 Juli 2025, berfokus pada proses awal adaptasi mahasiswa KKT dengan masyarakat, termasuk pemaparan program kerja, identifikasi potensi desa, serta observasi awal terhadap kebutuhan lapangan. Dr. Jessy disambut langsung oleh mahasiswa Posko 143 beserta aparat Desa Pontak Satu, dan berdialog ringan mengenai kondisi sosial desa dan harapan dari program KKT. Kunjungan kedua yang dilaksanakan pada Selasa, 22 Juli 2025, merupakan bagian dari monitoring lanjutan. Dalam kesempatan tersebut, Dr. Jessy mengapresiasi perkembangan dan pelaksanaan program kerja yang telah dijalankan oleh mahasiswa, mulai dari kegiatan edukatif untuk anak-anak, pendataan data Penduduk, hingga program Digitalisasi Desa. Kegiatan kunjungan diakhiri dengan sesi diskusi, dokumentasi, dan kunjungan lapangan singkat ke beberapa titik lokasi kegiatan mahasiswa. Kehadiran dosen pembimbing secara langsung ini menjadi energi positif dan motivasi besar bagi seluruh tim mahasiswa KKT 143 untuk terus memberikan kontribusi terbaik bagi masyarakat Desa Pontak Satu hingga akhir masa penugasan.",
      date: "22 Juli 2025",
      author: "Tim KKT",
      category: "Pendidikan",
      image: "/foto/BERITA 2.png",
    },
    {
      id: 3,
      title: "Ir. Yaulie Rindengan, S.T., M.Sc, MM Lakukan Kunjungan Lapangan ke Posko KKT 143 Desa Pontak Satu",
      content:
        "Dosen Pengawas Lapangan dari Universitas Sam Ratulangi, Ir. Yaulie Rindengan, S.T., M.Sc, MM, melakukan dua kali kunjungan ke Posko KKT 143 Desa Pontak Satu, yakni pada Rabu, 16 Juli 2025 dan Jumat, 25 Juli 2025. Kunjungan ini dilakukan dalam rangka pengawasan dan evaluasi atas pelaksanaan kegiatan KKT mahasiswa selama masa pengabdian mereka di desa. Pada kunjungan pertama, 16 Juli 2025, Ir. Yaulie meninjau langsung proses awal implementasi program kerja yang telah dirancang oleh mahasiswa. Ia juga berdiskusi dengan perangkat desa dan masyarakat untuk memastikan bahwa kegiatan mahasiswa sesuai dengan kebutuhan serta potensi lokal Desa Pontak Satu. Kunjungan kedua yang berlangsung pada 25 Juli 2025 difokuskan pada evaluasi progres pelaksanaan program. Dalam pertemuan bersama mahasiswa, Ir. Yaulie menyampaikan apresiasi atas semangat, kerapihan administrasi, serta pendekatan sosial yang dilakukan mahasiswa dalam menjalin hubungan dengan warga. Program kerja mahasiswa yang dipresentasikan pada kunjungan tersebut antara lain: pendampingan baca-tulis untuk anak, pemetaan potensi desa berbasis digital, Pemutakhiran Data Penduduk, serta pembuatan media promosi desa melalui profil video dan website.",
      date: "25 Juli 2025",
      author: "Tim KKT",
      category: "Pendidikan",
      image: "/foto/BERITA 3.png",
    },
    {
      id: 4,
      title: "Mahasiswa KKT 143 Serahkan Cenderamata Berupa Papan Nama Kantor Hukum Tua Desa Pontak Satu",
      content:
        "Mahasiswa Kuliah Kerja Terpadu (KKT) Universitas Sam Ratulangi Posko 143 Desa Pontak Satu secara resmi menyerahkan cenderamata berupa papan nama Kantor Hukum Tua kepada Pemerintah Desa Pontak Satu pada Jumat, 25 Juli 2025. Penyerahan ini merupakan bentuk kontribusi nyata mahasiswa selama menjalankan program KKT di desa, sekaligus sebagai simbol kenangan dan komitmen untuk mendukung identitas kelembagaan pemerintahan desa. Papan nama ini dipasang langsung di bagian depan Kantor Hukum Tua Desa Pontak Satu, menambah kesan resmi dan mempertegas posisi kantor sebagai pusat pelayanan masyarakat. Acara pemasangan dilakukan oleh mahasiswa bersama Hukum Tua Desa Pontak Satu, Bapak Noldy S. Lumenta, S.E., disaksikan oleh perangkat desa dan beberapa warga sekitar.",
      date: "25 Juli 2025",
      author: "Mahasiswa KKT",
      category: "Pembangunan",
      image: "/foto/BERITA 4.png",
    },
  ]

  const agenda = [
    {
      date: "27 Jul 2025",
      title: "HUT PONTAK SATU",
      time: "Sepanjang Hari",
      location: "Desa Pontak Satu",
    },
  ]

  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="text-sm text-gray-500">
          <span>Beranda</span> / <span className="text-primary">Berita & Kegiatan</span>
        </nav>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Berita & Kegiatan</h1>
        <p className="text-xl text-gray-600">Update terbaru dan agenda kegiatan Desa Pontak Satu</p>
      </div>

      {/* Featured News */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src={beritaTerkini[0].image || "/placeholder.svg"}
                  alt={beritaTerkini[0].title}
                  width={600}
                  height={600}
                  className="w-full h-64 lg:h-full object-scale-down"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {beritaTerkini[0].date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {beritaTerkini[0].author}
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    {beritaTerkini[0].category}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{beritaTerkini[0].title}</h2>
                <p className="text-gray-600 mb-6">{beritaTerkini[0].content}</p>
                {/* Removed "Baca selengkapnya" link */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Berita Terkini Lainnya</h2>

          <div className="flex flex-col gap-8">
            {beritaTerkini.slice(1).map((berita) => (
              <div
                key={berita.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <Image
  src={berita.image || "/placeholder.svg"}
  alt={berita.title}
  width={400}
  height={500}
  className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
/>

                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {berita.date}
                    </div>
                    <span className="bg-accent px-2 py-1 rounded text-xs font-medium">{berita.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{berita.title}</h3>
                  <p className="text-gray-600 mb-4">{berita.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {berita.author}
                    </div>
                    {/* Removed "Baca →" link */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Desa */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Agenda Desa</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agenda.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white rounded-lg p-3 text-center min-w-[80px]">
                    <div className="text-sm font-semibold">{item.date.split(" ")[0]}</div>
                    <div className="text-xs">
                      {item.date.split(" ")[1]} {item.date.split(" ")[2]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.time}
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 mr-2">📍</span>
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri Foto & Video - Kept structure with placeholders, removed "Lihat Semua Galeri" link */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Galeri Foto & Video</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "/placeholder.svg?height=200&width=300",
              "/placeholder.svg?height=200&width=300",
              "/placeholder.svg?height=200&width=300",
              "/placeholder.svg?height=200&width=300",
              "/placeholder.svg?height=200&width=300",
              "/placeholder.svg?height=200&width=300",
              "/placeholder.svg?height=200&width=300",
              "/placeholder.svg?height=200&width=300",
            ].map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Galeri ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Lihat Detail
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
