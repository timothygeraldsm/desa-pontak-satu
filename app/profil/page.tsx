import { Users, Target, MapPin, BarChart } from "lucide-react"
import Image from "next/image"

export default function ProfilPage() {
  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="text-sm text-gray-500">
          <span>Beranda</span> / <span className="text-primary">Profil Desa</span>
        </nav>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Profil Desa Pontak Satu</h1>
        <p className="text-xl text-gray-600">Mengenal lebih dekat Desa Pontak Satu</p>
      </div>

            {/* Sejarah Desa */}
            <section className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  {/* Gambar di kiri */}
                  <div className="w-full lg:w-1/2">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Sejarah Desa Pontak Satu"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                  </div>
      
                  {/* Paragraf di kanan */}
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Sejarah Desa</h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p className="mb-4">
                        Desa Pontak Satu merupakan salah satu desa di wilayah Kecamatan Ranoyapo, Kabupaten Minahasa Selatan,
                        Provinsi Sulawesi Utara. Nama “Pontak” yang digunakan sebagai identitas desa ini diyakini berasal dari
                        bahasa lokal Minahasa yang berarti “tempat tinggi” atau “wilayah yang ditinggikan”. Makna tersebut
                        berkaitan erat dengan kondisi geografis daerah yang terletak di dataran yang sedikit lebih tinggi
                        dibandingkan sekitarnya. Ada pula riwayat lisan yang menyebut bahwa Pontak merupakan nama dari seorang
                        tokoh adat di masa lampau yang dikenal karena kepemimpinan dan keberaniannya dalam menjaga masyarakat
                        serta wilayahnya. Nama ini kemudian diwariskan secara turun-temurun hingga menjadi identitas tetap
                        bagi masyarakat dan wilayah yang kini dikenal sebagai Desa Pontak dan wilayah pemekarannya.
                      </p>
                      <p className="mb-4">
                        Desa Pontak Satu lahir dari semangat kolektif masyarakat yang menginginkan pembentukan wilayah
                        administratif baru demi pemerataan pembangunan dan peningkatan kualitas pelayanan publik. Pada saat
                        itu, wilayah Desa Pontak induk memiliki cakupan yang luas dengan jumlah penduduk yang terus bertambah,
                        sehingga pelayanan pemerintahan dirasa tidak lagi efektif dan menyeluruh. Oleh karena itu, muncul
                        aspirasi dari warga untuk melakukan pemekaran desa sebagai solusi atas kebutuhan lokal yang semakin
                        berkembang. Gagasan ini disambut baik oleh tokoh masyarakat dan perangkat pemerintah desa saat itu. Di
                        bawah kepemimpinan Pamatuang Alm. Bapak Luki Saroinsong yang menjabat sejak tahun 1998 hingga 2007,
                        proses pemekaran mulai direncanakan secara bertahap dan matang.
                      </p>
                      <p className="mb-4">
                        Untuk merealisasikan gagasan pemekaran tersebut, masyarakat bersama pemerintah desa membentuk panitia
                        resmi yang bertugas mempersiapkan segala hal terkait pemekaran. Panitia ini dipimpin oleh Alm. Bapak
                        Arnold Rembet sebagai Ketua, Alm. Bapak Lole Sumangkut sebagai Sekretaris, dan Alm. Bapak Orlo Rantung
                        sebagai Bendahara. Ketiga tokoh inilah yang menjadi penggerak utama lahirnya Desa Pontak Satu. Panitia
                        bekerja dengan penuh komitmen, menyusun dokumen administratif, mengadakan musyawarah bersama warga,
                        serta melakukan koordinasi dengan pihak pemerintah kecamatan dan kabupaten.
                      </p>
                      <p className="mb-4">
                        Setelah melalui proses panjang, Desa Pontak Satu resmi dimekarkan dan ditetapkan sebagai desa
                        definitif pada tanggal 27 Juli 2004 oleh Bupati Minahasa Selatan saat itu, Bapak Ramoy Markus
                        Luntungan. Pada saat awal pembentukannya, Desa Pontak Satu terdiri dari 175 Kepala Keluarga dengan
                        total penduduk sebanyak 637 jiwa, yang tersebar di empat wilayah jaga atau lingkungan. Pemerintah
                        Kabupaten Minahasa Selatan kemudian menunjuk Alm. Bapak Altin Agus Rawis sebagai Penjabat Hukum Tua
                        pertama yang memimpin desa pada masa awal transisi pemerintahan. Di bawah kepemimpinan beliau, sistem
                        pemerintahan desa mulai dibangun dari dasar, struktur organisasi desa dibentuk, serta pelayanan publik
                        mulai diselenggarakan secara mandiri.
                      </p>
                      <p className="mb-4">
                        Secara geografis, Desa Pontak Satu memiliki batas-batas wilayah sebagai berikut: sebelah utara
                        berbatasan dengan Sungai Tumicakal, sebelah selatan dengan wilayah Poopo dan Poopo Utara, sebelah
                        timur dengan Sungai Ranoyapo, dan sebelah barat dengan Desa Raanan serta Desa Lalumpe. Letak wilayah
                        yang strategis ini mendukung kegiatan pertanian, peternakan, dan pemukiman warga yang menjadi
                        penggerak utama perekonomian desa.
                      </p>
                      <p className="mb-4">
                        Kepemimpinan di Desa Pontak Satu terus berlangsung secara demokratis dan berjalan sesuai ketentuan
                        peraturan perundang-undangan. Seiring waktu, desa ini mengalami beberapa kali pergantian Hukum Tua
                        yang masing-masing membawa kontribusi dalam pembangunan desa. Setelah masa jabatan Pejabat sementara
                        Alm. Bapak Altin Agus Rawis (2004-2007) berakhir, kepemimpinan dilanjutkan oleh Alm. Bapak Alexander
                        Mamoto (2007-2013) sebagai Hukum Tua definitif , kemudian Alm. Bapak D.R.H. Soputan (2013-2019) selaku
                        Hukum Tua Definitif, selanjutnya dijabat oleh Pejabat Hukum Tua Ibu Mien Wowor Kolopita (2019-2020),
                        dilanjutkan oleh Bapak Johny E. R. Soputan (2020-2025), dan saat ini dipimpin oleh Bapak Noldy S.
                        Lumenta, S.E.
                      </p>
                      <p className="mb-4">
                        Sejak berdiri hingga saat ini, Desa Pontak Satu telah mengalami berbagai perkembangan baik dari segi
                        infrastruktur, pelayanan publik, pemberdayaan masyarakat, maupun pembangunan sosial dan ekonomi. Desa
                        ini telah menjadi contoh keberhasilan pemekaran wilayah yang didasarkan pada partisipasi masyarakat
                        dan perencanaan yang matang. Gotong royong, musyawarah, serta rasa kebersamaan tetap menjadi kekuatan
                        utama dalam perjalanan kehidupan masyarakat desa ini. Pontak Satu bukan hanya hasil dari pemekaran
                        administratif, tetapi telah tumbuh menjadi entitas sosial yang memiliki karakter kuat, identitas yang
                        jelas, serta komitmen untuk terus membangun masa depan yang lebih baik.
                      </p>
                      <p>
                        Hingga saat ini, Desa Pontak Satu terus bergerak maju dengan berbagai program pembangunan, pembinaan
                        kemasyarakatan, serta kegiatan-kegiatan berbasis budaya dan kearifan lokal. Peringatan hari ulang
                        tahun desa yang dilaksanakan setiap tanggal 27 Juli bukan sekadar seremoni, tetapi menjadi momentum
                        refleksi atas sejarah perjuangan masyarakat dalam membentuk dan membangun desa ini. Naskah sejarah ini
                        disusun sebagai bentuk dokumentasi permanen agar generasi-generasi selanjutnya dapat mengenal dan
                        menghargai asal-usul serta perjalanan panjang Desa Pontak Satu dalam mewujudkan desa yang mandiri,
                        maju, dan bermartabat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
      {/* Visi & Misi */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi & Misi</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                "Mewujudkan Desa Pontak Satu yang mandiri, berdaya saing, dan berkeadilan berbasis potensi lokal, budaya
                gotong royong, serta pertanian berkelanjutan sebagai fondasi utama pembangunan masyarakat yang
                sejahtera."
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Meneguhkan nilai-nilai sejarah dan kebersamaan sebagai landasan pembangunan desa yang berpihak pada
                  masyarakat, dengan menghidupkan kembali semangat kolektif seperti saat pemekaran.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Meningkatkan kualitas pelayanan publik dan tata kelola pemerintahan desa yang transparan, responsif,
                  serta berorientasi pada kebutuhan warga.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mengembangkan potensi pertanian desa secara terpadu dan berkelanjutan, melalui program pemberdayaan
                  petani, pemanfaatan teknologi pertanian sederhana, serta penguatan kelembagaan tani.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mendorong inovasi dan kemandirian ekonomi masyarakat desa, khususnya melalui penguatan UMKM lokal dan
                  diversifikasi produk berbasis sumber daya desa.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Meningkatkan infrastruktur dasar dan aksesibilitas antar jaga, sebagai prasyarat penting bagi
                  konektivitas sosial dan pertumbuhan ekonomi desa.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Melestarikan lingkungan hidup dan memperkuat ketahanan pangan desa, dengan pendekatan ramah lingkungan
                  dan pemanfaatan sumber daya alam yang bijak.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Menumbuhkan kesadaran generasi muda terhadap pentingnya pembangunan desa, melalui kegiatan edukatif,
                  pelibatan aktif dalam forum desa, dan pemberdayaan pemuda tani.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wilayah Administratif */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wilayah Administratif</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Luas Wilayah", value: "Tidak Tersedia", icon: MapPin },
              { label: "Jumlah KK", value: "250 KK", icon: Users },
              { label: "Jumlah Jiwa", value: "702 Jiwa", icon: Users },
              { label: "Ketinggian", value: "Tidak Tersedia", icon: BarChart },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-accent rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.label}</h3>
                  <p className="text-2xl font-bold text-primary">{item.value}</p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-accent rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Batas Wilayah</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Utara</span>
                  <span className="font-semibold text-gray-800">Sungai Tumicakal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Selatan</span>
                  <span className="font-semibold text-gray-800">Poopo Utara dan Poopo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Timur</span>
                  <span className="font-semibold text-gray-800">Sungai Ranoyapo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Barat</span>
                  <span className="font-semibold text-gray-800">Desa Raanan dan Desa Lalumpe</span>
                </div>
              </div>
            </div>

            <div className="bg-accent rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Pembagian Wilayah</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jaga I</span>
                  <span className="font-semibold text-gray-800">65 KK / 177 Jiwa</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jaga II</span>
                  <span className="font-semibold text-gray-800">66 KK / 184 Jiwa</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jaga III</span>
                  <span className="font-semibold text-gray-800">55 KK / 156 Jiwa</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jaga IV</span>
                  <span className="font-semibold text-gray-800">64 KK / 185 Jiwa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demografi */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Data Demografi</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Jumlah Penduduk</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Laki-laki</span>
                  <span className="font-semibold text-primary">368 jiwa</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Perempuan</span>
                  <span className="font-semibold text-primary">334 jiwa</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">Total</span>
                    <span className="font-bold text-xl text-primary">702 jiwa</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Distribusi Berdasarkan Wilayah Jaga</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jaga I</span>
                  <span className="font-semibold text-primary">177 jiwa (65 KK)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jaga II</span>
                  <span className="font-semibold text-primary">184 jiwa (66 KK)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jaga III</span>
                  <span className="font-semibold text-primary">156 jiwa (55 KK)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jaga IV</span>
                  <span className="font-semibold text-primary">185 jiwa (64 KK)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
