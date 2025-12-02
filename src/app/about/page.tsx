'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ArrowLeft, Users, Award, Target, Clock, CheckCircle, Building } from 'lucide-react'

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const values = [
    {
      icon: Award,
      title: 'Kualitas Terbaik',
      description: 'Kami berkomitmen untuk memberikan hasil kerja dengan standar kualitas tertinggi dan menggunakan material terbaik.'
    },
    {
      icon: Users,
      title: 'Profesionalisme',
      description: 'Tim kami terdiri dari para ahli berpengalaman yang profesional dalam bidang konstruksi dan instalasi.'
    },
    {
      icon: Clock,
      title: 'Tepat Waktu',
      description: 'Kami menghargai waktu Anda dan selalu berusaha menyelesaikan proyek sesuai jadwal yang ditetapkan.'
    },
    {
      icon: Target,
      title: 'Kepuasan Klien',
      description: 'Kepuasan klien adalah prioritas utama kami, kami selalu berusaha melampaui ekspektasi.'
    }
  ]

  const milestones = [
    { year: '2014', title: 'Berdiri', description: 'PT DUTA MANDIRI WIJAYA didirikan di Batam' },
    { year: '2016', title: 'Ekspansi Layanan', description: 'Menambah layanan instalasi listrik dan elektronika' },
    { year: '2018', title: 'Sertifikasi', description: 'Mendapatkan berbagai sertifikasi standar industri' },
    { year: '2020', title: 'Digitalisasi', description: 'Mengadopsi teknologi modern dalam manajemen proyek' },
    { year: '2024', title: 'Prestasi', description: 'Menyelesaikan 500+ proyek dengan kepuasan 100%' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building className="h-8 w-8 text-orange-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">PT DUTA MANDIRI WIJAYA</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Beranda</Link>
              <Link href="/about" className="text-orange-600 font-medium">Tentang</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">Kontak</Link>
              <Link 
                href="tel:+6289696707080" 
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Beranda</Link>
              <Link href="/about" className="block px-3 py-2 text-orange-600 font-medium">Tentang</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Kontak</Link>
              <Link 
                href="tel:+6289696707080" 
                className="block mx-3 mt-2 bg-orange-600 text-white px-4 py-2 rounded-lg text-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb */}
      <section className="pt-24 pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <span className="mx-2">/</span>
            <span className="text-orange-600 font-medium">Tentang Kami</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tentang PT DUTA MANDIRI WIJAYA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perusahaan konstruksi dan instalasi terpercaya di Batam yang telah berpengalaman 
              selama lebih dari 10 tahun dalam melayani berbagai proyek dengan kualitas terbaik.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visi & Misi Kami</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">Visi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi perusahaan konstruksi dan instalasi terdepan di Indonesia yang 
                  terkenal dengan kualitas, keandalan, dan inovasi dalam setiap proyek yang kami kerjakan.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3">Misi</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Menyediakan layanan konstruksi dan instalasi dengan kualitas tertinggi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Mengutamakan keselamatan kerja dan kepuasan pelanggan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Mengembangkan tim profesional yang berkompeten dan berintegritas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Menerapkan teknologi modern dan praktik terbaik dalam industri konstruksi</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-orange-600 mb-4">10+</div>
                <div className="text-xl text-gray-700 font-medium mb-8">Tahun Pengalaman</div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-600">500+</div>
                    <div className="text-gray-600">Proyek Selesai</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">100%</div>
                    <div className="text-gray-600">Kepuasan Klien</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">50+</div>
                    <div className="text-gray-600">Tim Profesional</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">6</div>
                    <div className="text-gray-600">Layanan Utama</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Perusahaan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Nama Perseroan</h3>
                    <p className="text-lg text-gray-900">PT DUTA MANDIRI WIJAYA</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Alamat Lengkap</h3>
                    <p className="text-lg text-gray-900">
                      Pancur Swadaya Blok J No. 15, Kota Batam, Kepulauan Riau
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Kontak</h3>
                    <div className="space-y-2">
                      <p className="text-lg text-gray-900">+62 896-9670-7080</p>
                      <p className="text-lg text-gray-900">info@dutamandirwijaya.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Kegiatan Usaha</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-gray-700">Konstruksi Gedung Hunian</span>
                    <span className="text-sm font-medium text-orange-600">41011</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-gray-700">Instalasi Listrik</span>
                    <span className="text-sm font-medium text-orange-600">43211</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-gray-700">Instalasi Elektronika</span>
                    <span className="text-sm font-medium text-orange-600">43213</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-gray-700">Instalasi Saluran Air (Plambing)</span>
                    <span className="text-sm font-medium text-orange-600">43221</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-gray-700">Instalasi Mekanikal</span>
                    <span className="text-sm font-medium text-orange-600">43291</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-gray-700">Perdagangan Material Bangunan</span>
                    <span className="text-sm font-medium text-orange-600">46638</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Perusahaan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berpegang teguh pada nilai-nilai yang membentuk fondasi perusahaan kami 
              dan memandu setiap keputusan yang kami ambil.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 rounded-lg p-3 inline-block mb-4">
                  <value.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sejak didirikan, kami terus berkembang dan mencapai berbagai milestone penting 
              dalam perjalanan kami menjadi perusahaan konstruksi terpercaya.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="text-2xl font-bold text-orange-600 mb-2">{milestone.year}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</div>
                    <div className="text-gray-600">{milestone.description}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mari Bekerja Sama
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Kami siap menjadi mitra terpercaya untuk proyek konstruksi dan instalasi Anda. 
            Hubungi kami untuk diskusi lebih lanjut tentang kebutuhan proyek Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="tel:+6289696707080"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Kami
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