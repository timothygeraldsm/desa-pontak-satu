"use client"

import { Users, MapPin, TrendingUp, Home } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const populationData = [
  { name: "Laki-laki", value: 368, color: "#0D47A1" },
  { name: "Perempuan", value: 334, color: "#4CAF50" },
]

export default function DataStatistikPage() {
  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="text-sm text-gray-500">
          <span>Beranda</span> / <span className="text-primary">Data & Statistik</span>
        </nav>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Data & Statistik</h1>
        <p className="text-xl text-gray-600">Informasi kependudukan dan wilayah Desa Pontak Satu</p>
      </div>

      {/* Summary Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Penduduk", value: "702", subtitle: "jiwa", icon: Users, color: "bg-blue-500" },
              { label: "Jumlah KK", value: "250", subtitle: "kepala keluarga", icon: Home, color: "bg-green-500" },
              { label: "Luas Wilayah", value: "Tidak Tersedia", subtitle: "km²", icon: MapPin, color: "bg-purple-500" },
              {
                label: "Kepadatan",
                value: "Tidak Tersedia",
                subtitle: "jiwa/km²",
                icon: TrendingUp,
                color: "bg-orange-500",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">{item.label}</h3>
                  <p className="text-3xl font-bold text-gray-800">{item.value}</p>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Data Kependudukan */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Data Kependudukan</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Gender Distribution */}
            <div className="bg-accent rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Distribusi Berdasarkan Jenis Kelamin
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={populationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {populationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-6 mt-4">
                {populationData.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-4 h-4 rounded mr-2`} style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-600">
                      {item.name}: {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Jaga Distribution */}
            <div className="bg-accent rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Distribusi Berdasarkan Wilayah Jaga
              </h3>
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

      {/* Peta Wilayah */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Peta Wilayah</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Batas Wilayah</h3>
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

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Pembagian Wilayah</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jaga I</span>
                  <span className="font-semibold text-gray-800">65 KK</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jaga II</span>
                  <span className="font-semibold text-gray-800">66 KK</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jaga III</span>
                  <span className="font-semibold text-gray-800">55 KK</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jaga IV</span>
                  <span className="font-semibold text-gray-800">64 KK</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">Total KK</span>
                    <span className="font-bold text-xl text-primary">250 KK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
