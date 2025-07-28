"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, User, Building, BarChart3, Leaf, Newspaper, Phone, ChevronDown } from "lucide-react"

const navigationItems = [
  { name: "Beranda", href: "/", icon: Home },
  { name: "Profil Desa", href: "/profil", icon: User },
  { name: "Pemerintahan", href: "/pemerintahan", icon: Building },
  { name: "Data & Statistik", href: "/data-statistik", icon: BarChart3 },
  { name: "Potensi Desa", href: "/potensi", icon: Leaf },
  { name: "Berita & Kegiatan", href: "/berita", icon: Newspaper },
  { name: "Kontak Kami", href: "/kontak", icon: Phone },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setIsDesktopMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close desktop menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isDesktopMenuOpen && !target.closest(".desktop-menu-container")) {
        setIsDesktopMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isDesktopMenuOpen])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-white shadow-md"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo - Always visible */}
            <div className="flex items-center flex-shrink-0">
              <Link
                href="/"
                className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-2 transition-all duration-300 hover:scale-105"
                aria-label="Desa Pontak Satu - Beranda"
              >
                <div className="relative">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3">
                    <span className="text-white font-bold text-lg lg:text-xl">P1</span>
                  </div>
                  {/* Animated ring on hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-primary opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-125 transition-all duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <span className="font-bold text-xl lg:text-2xl text-gray-800 group-hover:text-primary transition-colors duration-300">
                    Desa Pontak Satu
                  </span>
                  <p className="text-xs lg:text-sm text-gray-500 -mt-1 group-hover:text-gray-600 transition-colors duration-300">
                    Website Resmi
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Menu Button */}
            <div className="hidden lg:block desktop-menu-container relative">
              <button
                onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 group"
                aria-expanded={isDesktopMenuOpen}
                aria-label="Menu navigasi"
              >
                <Menu className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Menu</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isDesktopMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Desktop Dropdown Menu */}
              <div
                className={`absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 origin-top-right ${
                  isDesktopMenuOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-2">
                  <div className="grid grid-cols-1 gap-1">
                    {navigationItems.map((item) => {
                      const Icon = item.icon
                      const active = isActive(item.href)
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                            active
                              ? "text-primary bg-blue-50 shadow-sm"
                              : "text-gray-600 hover:text-primary hover:bg-gray-50"
                          }`}
                          onClick={() => setIsDesktopMenuOpen(false)}
                          aria-current={active ? "page" : undefined}
                        >
                          <div
                            className={`p-2 rounded-lg transition-all duration-200 ${
                              active ? "bg-primary/10" : "bg-gray-100 group-hover:bg-primary/10"
                            }`}
                          >
                            <Icon
                              className={`w-4 h-4 transition-colors duration-200 ${
                                active ? "text-primary" : "text-gray-400 group-hover:text-primary"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <span className="block">{item.name}</span>
                            {active && <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>}
                          </div>
                          <div
                            className={`w-1 h-8 rounded-full transition-all duration-200 ${
                              active ? "bg-primary" : "bg-transparent group-hover:bg-primary/20"
                            }`}
                          ></div>
                        </Link>
                      )
                    })}
                  </div>

                  {/* Quick Contact in Desktop Menu */}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <div className="px-4 py-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                      <p className="text-xs font-medium text-gray-800 mb-1">Kontak Cepat</p>
                      <p className="text-xs text-gray-600">(021) 123-4567</p>
                      <p className="text-xs text-gray-600">info@pontaksatu.desa.id</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              >
                <div className="w-6 h-6 relative">
                  <Menu
                    className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${
                      isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${
                      isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      active
                        ? "text-primary bg-blue-50 border-l-4 border-primary"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                  >
                    <Icon className={`w-5 h-5 ${active ? "text-primary" : "text-gray-400"}`} />
                    <span>{item.name}</span>
                    {active && <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>}
                  </Link>
                )
              })}
            </div>

            {/* Mobile Contact Info */}
            <div className="border-t border-gray-100 px-4 py-4 bg-gray-50">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-800">Hubungi Kami</p>
                <p className="text-sm text-gray-600">(021) 123-4567</p>
                <p className="text-sm text-gray-600">info@pontaksatu.desa.id</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Desktop menu overlay */}
      {isDesktopMenuOpen && (
        <div
          className="fixed inset-0 z-40 hidden lg:block"
          onClick={() => setIsDesktopMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16 lg:h-20" aria-hidden="true" />
    </>
  )
}
