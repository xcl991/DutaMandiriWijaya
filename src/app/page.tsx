'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Building, Wrench, Zap, Droplet, Settings, Truck } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: Building,
      title: 'Konstruksi Gedung Hunian',
      description: 'Pembangunan rumah tinggal, apartemen, dan bangunan hunian lainnya dengan kualitas terbaik.',
      code: '41011'
    },
    {
      icon: Zap,
      title: 'Instalasi Listrik',
      description: 'Pemasangan dan perawatan sistem instalasi listrik yang aman dan sesuai standar.',
      code: '43211'
    },
    {
      icon: Wrench,
      title: 'Instalasi Elektronika',
      description: 'Instalasi berbagai perangkat elektronik dan sistem kontrol modern.',
      code: '43213'
    },
    {
      icon: Droplet,
      title: 'Instalasi Saluran Air',
      description: 'Sistem plambing dan instalasi air bersih yang efisien dan tahan lama.',
      code: '43221'
    },
    {
      icon: Settings,
      title: 'Instalasi Mekanikal',
      description: 'Instalasi sistem mekanikal untuk bangunan komersial dan industri.',
      code: '43291'
    },
    {
      icon: Truck,
      title: 'Perdagangan Material Bangunan',
      description: 'Supplier berbagai macam material bangunan berkualitas dengan harga kompetitif.',
      code: '46638'
    }
  ]

  const stats = [
    { label: 'Tahun Pengalaman', value: '10+' },
    { label: 'Proyek Selesai', value: '500+' },
    { label: 'Klien Puas', value: '1000+' },
    { label: 'Layanan', value: '6' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Building className="h-8 w-8 text-orange-400 mr-2" />
              <span className="text-xl font-bold text-white">PT DUTA MANDIRI WIJAYA</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-white/80 hover:text-orange-400 transition-colors">Beranda</Link>
              <Link href="#services" className="text-white/80 hover:text-orange-400 transition-colors">Layanan</Link>
              <Link href="/about" className="text-white/80 hover:text-orange-400 transition-colors">Tentang</Link>
              <Link href="/contact" className="text-white/80 hover:text-orange-400 transition-colors">Kontak</Link>
              <Link 
                href="tel:+6289696707080" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
              >
                Hubungi Kami
              </Link>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#home" className="block px-3 py-2 text-white/80 hover:text-orange-400">Beranda</Link>
              <Link href="#services" className="block px-3 py-2 text-white/80 hover:text-orange-400">Layanan</Link>
              <Link href="/about" className="block px-3 py-2 text-white/80 hover:text-orange-400">Tentang</Link>
              <Link href="/contact" className="block px-3 py-2 text-white/80 hover:text-orange-400">Kontak</Link>
              <Link 
                href="tel:+6289696707080" 
                className="block mx-3 mt-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
          style={{
            backgroundImage: `url('https://i.ibb.co/1GkV64MP/viktor-jakovlev-H0vuplqo-X0c-unsplash.jpg')`
          }}
        >
          {/* Darker Gradient Overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-orange-900/70"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-4 py-2 mb-6">
                <span className="text-orange-300 text-sm font-medium">✨ Solusi Konstruksi Terpadu</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                Konstruksi & Instalasi
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 block">
                  Terpercaya di Batam
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Solusi lengkap untuk kebutuhan konstruksi gedung hunian, instalasi listrik, 
                elektronika, plambing, mekanikal, dan supplier material bangunan berkualitas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
                >
                  Konsultasi Gratis
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="#services"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center"
                >
                  Lihat Layanan
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 text-gray-200">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-orange-400" />
                  <span className="text-sm">Kota Batam, Kepulauan Riau</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-orange-400" />
                  <span className="text-sm">+62 896-9670-7080</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Glass Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 mb-6">
                  <img 
                    src="https://i.ibb.co/236MCgS2/1612785950-shutterstock-623894276.jpg" 
                    alt="Construction Project" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Building the Future</h3>
                  <p className="text-gray-200">Konstruksi berkualitas, hasil memuaskan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🏗️ Layanan Kami</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Solusi Konstruksi
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 block">
                Terpadu & Terpercaya
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan konstruksi dan instalasi untuk memenuhi 
              kebutuhan proyek Anda dengan standar kualitas tertinggi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-4 inline-block mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Kode: {service.code}</span>
                  <Link 
                    href="/contact"
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center"
                  >
                    Konsultasi
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik untuk proyek konstruksi dan instalasi Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="tel:+6289696707080"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              +62 896-9670-7080
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Kirim Pesan
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-orange-500 mr-2" />
                <span className="text-xl font-bold">PT DUTA MANDIRI WIJAYA</span>
              </div>
              <p className="text-gray-400 mb-4">
                Perusahaan konstruksi dan instalasi terpercaya di Batam yang menyediakan 
                layanan lengkap untuk kebutuhan bangunan dan instalasi Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Konstruksi Gedung</li>
                <li>Instalasi Listrik</li>
                <li>Instalasi Elektronika</li>
                <li>Instalasi Air & Mekanikal</li>
                <li>Material Bangunan</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                  <span className="text-sm">Pancur Swadaya Blok J No. 15, Kota Batam</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-orange-500" />
                  <span className="text-sm">+62 896-9670-7080</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-orange-500" />
                  <span className="text-sm">info@dutamandirwijaya.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PT DUTA MANDIRI WIJAYA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-orange-500 text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-500 text-sm">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}