import { Users } from "lucide-react"
import Image from "next/image"

export default function PemerintahanPage() {
  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="text-sm text-gray-500">
          <span>Beranda</span> / <span className="text-primary">Pemerintahan</span>
        </nav>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Pemerintahan Desa</h1>
        <p className="text-xl text-gray-600">Struktur organisasi dan perangkat Desa Pontak Satu</p>
      </div>

      {/* Kepala Desa & Perangkat */}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Hukum Tua & Perangkat</h2>

    {/* Hukum Tua */}
    <div className="bg-accent rounded-lg p-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Hapus Image */}
        <div className="text-center md:col-span-3">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Noldy S. Lumenta, S.E.</h3>
          <p className="text-primary font-semibold mb-4">Hukum Tua Desa Pontak Satu</p>
          <p className="text-gray-600">
            Memimpin Desa Pontak Satu dengan visi mewujudkan desa yang mandiri dan sejahtera melalui inovasi
            teknologi dan pemberdayaan masyarakat.
          </p>
        </div>
      </div>
    </div>

    {/* Perangkat Desa */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: "Melisa M. Soputan, S.Ag", position: "Sekretaris Desa" },
        { name: "Efliyati Umboh", position: "Kepala Urusan Keuangan" },
        { name: "Astri Lendo", position: "Kepala Seksi Kesejahtraan" },
        { name: "Paskal Sumangkut, S.E.", position: "Kepala Urusan Perencanaan" },
        { name: "Mediawati Umboh", position: "Kepala Seksi Pemerintahan" },
        { name: "Eske Kolopita", position: "Kepala Seksi Pelayanan" },
        { name: "Inry Pepah", position: "Kepala Urusan Umum & Tata Usaha" },
        { name: "Alfonce Loloon", position: "Kepala Jaga I" },
        { name: "Rafika Sutrisna Tulandi", position: "Kepala Jaga II" },
        { name: "Livana Rawis", position: "Kepala Jaga III" },
        { name: "Imelda Umboh", position: "Kepala Jaga IV" },
      ].map((person, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
          {/* Tanpa Gambar */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{person.name}</h3>
          <p className="text-primary font-medium">{person.position}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Lembaga Desa */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Lembaga Desa</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "BPD (Badan Permusyawaratan Desa)",
                description: "Lembaga yang menampung dan menyalurkan aspirasi masyarakat",
                ketua: "Hendrik J. Pangkey",
                anggota: ["Deki Soputan", "Jultje Karepowan (Sekretaris)", "Roby Manusama", "Stani Nayoan"],
                icon: Users,
              },
              {
                name: "LPM (Lembaga Pemberdayaan Masyarakat Desa)",
                description: "Lembaga yang bertugas menyusun rencana pembangunan desa",
                ketua: "Bpk. Jontje Kaleb",
                icon: Users,
              },
              {
                name: "PKK (Pemberdayaan Kesejahteraan Keluarga)",
                description: "Organisasi kemasyarakatan yang memberdayakan perempuan",
                ketua: "Ibu. Yuliaty I. Sumangkut S.Pd",
                icon: Users,
              },
            ].map((lembaga, index) => {
              const Icon = lembaga.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{lembaga.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lembaga.description}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">Ketua:</p>
                    <p className="font-semibold text-primary mb-2">{lembaga.ketua}</p>
                    {lembaga.anggota && (
                      <>
                        <p className="text-sm text-gray-500">Anggota:</p>
                        <ul className="list-disc list-inside text-gray-600 text-sm">
                          {lembaga.anggota.map((anggota, idx) => (
                            <li key={idx}>{anggota}</li>
                          ))}
                        </ul>
                      </>
                    )}
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
