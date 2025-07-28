import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P1</span>
              </div>
              <span className="font-bold text-xl">Desa Pontak Satu</span>
            </div>
            <p className="text-gray-300 mb-4">
              Website resmi Desa Pontak Satu - Melayani dengan transparansi dan inovasi untuk kemajuan desa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/profil" className="text-gray-300 hover:text-white transition-colors">
                  Profil Desa
                </Link>
              </li>
              <li>
                <Link href="/pemerintahan" className="text-gray-300 hover:text-white transition-colors">
                  Pemerintahan
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-gray-300 hover:text-white transition-colors">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-300 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 text-sm">Jl. Desa Pontak Satu, Kec. Pontak</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 text-sm">(021) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 text-sm">info@pontaksatu.desa.id</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Desa Pontak Satu. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  )
}
