'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ArrowLeft, Building, Shield, Eye, Database, UserCheck, Lock } from 'lucide-react'

export default function PrivacyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    {
      icon: Shield,
      title: "Informasi yang Kami Kumpulkan",
      content: [
        "Informasi identitas pribadi (nama, alamat email, nomor telepon)",
        "Informasi kontak (alamat, perusahaan, jabatan)",
        "Informasi proyek (jenis layanan, lokasi, anggaran)",
        "Data teknis (alamat IP, browser, perangkat yang digunakan)",
        "Informasi komunikasi (pesan, email, percakapan telepon)"
      ]
    },
    {
      icon: Eye,
      title: "Cara Kami Menggunakan Informasi",
      content: [
        "Merupakan respons terhadap permintaan dan pertanyaan Anda",
        "Menyediakan layanan konstruksi dan instalasi yang diminta",
        "Mengkomunikasikan penawaran harga dan proposal proyek",
        "Mengelola hubungan pelanggan dan memberikan layanan pelanggan",
        "Mengirim informasi tentang layanan dan promosi kami",
        "Mematuhi kewajiban hukum dan peraturan yang berlaku"
      ]
    },
    {
      icon: Database,
      title: "Penyimpanan dan Keamanan Data",
      content: [
        "Data pribadi disimpan dalam sistem aman dengan enkripsi",
        "Akses data dibatasi untuk personel yang berwenang",
        "Kami menerapkan langkah-langkah keamanan teknis dan organisasional",
        "Data disimpan selama diperlukan untuk tujuan bisnis yang sah",
        "Prosedur backup dan recovery untuk mencegah kehilangan data"
      ]
    },
    {
      icon: UserCheck,
      title: "Hak Anda sebagai Pengguna",
      content: [
        "Hak untuk mengakses data pribadi yang kami simpan",
        "Hak untuk memperbaiki data yang tidak akurat",
        "Hak untuk menghapus data pribadi dalam kondisi tertentu",
        "Hak untuk membatasi pemrosesan data Anda",
        "Hak untuk menarik persetujuan pemrosesan data",
        "Hak untuk memindahkan data Anda ke layanan lain"
      ]
    },
    {
      icon: Lock,
      title: "Perlindungan Informasi",
      content: [
        "Kami tidak menjual atau menyewakan data pribadi kepada pihak ketiga",
        "Data hanya dibagikan dengan mitra bisnis yang tepercaya untuk tujuan layanan",
        "Kami menggunakan SSL untuk mengamankan transmisi data",
        "Audit keamanan rutin untuk memastikan perlindungan data",
        "Pelatihan staf tentang praktik privasi dan keamanan data"
      ]
    }
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
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">Tentang</Link>
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
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Tentang</Link>
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
            <span className="text-orange-600 font-medium">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-orange-100 rounded-full p-4 inline-block mb-6">
              <Shield className="h-12 w-12 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
              Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-sm text-gray-500 mb-4">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            
            <div className="prose prose-orange max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                PT DUTA MANDIRI WIJAYA ("kami") menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. 
                Kebijakan Privasi ini berlaku untuk semua layanan yang kami sediakan melalui website dan komunikasi langsung.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Informasi yang Kami Kumpulkan</h2>
              <p className="text-gray-700 mb-6">
                Kami dapat mengumpulkan berbagai jenis informasi dari Anda, termasuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Nama lengkap, alamat email, nomor telepon</li>
                <li>Alamat lengkap dan informasi perusahaan</li>
                <li>Informasi proyek dan kebutuhan layanan</li>
                <li>Data teknis seperti alamat IP dan informasi browser</li>
                <li>Konten komunikasi seperti email dan pesan</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Penggunaan Informasi</h2>
              <p className="text-gray-700 mb-6">
                Informasi yang kami kumpulkan digunakan untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Merupakan respons terhadap permintaan dan pertanyaan Anda</li>
                <li>Menyediakan layanan konstruksi dan instalasi yang diminta</li>
                <li>Mengkomunikasikan penawaran harga dan proposal proyek</li>
                <li>Mengelola hubungan pelanggan dan layanan pelanggan</li>
                <li>Mengirim informasi tentang layanan dan promosi</li>
                <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Keamanan Data</h2>
              <p className="text-gray-700 mb-6">
                Kami menerapkan langkah-langkah keamanan yang komprehensif untuk melindungi data pribadi Anda:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas untuk personel yang berwenang</li>
                <li>Audit keamanan rutin dan pembaruan sistem</li>
                <li>Prosedur backup dan recovery yang andal</li>
                <li>Pelatihan staf tentang praktik privasi terbaik</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Berbagi Informasi</h2>
              <p className="text-gray-700 mb-6">
                Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Diperlukan untuk menyediakan layanan yang Anda minta</li>
                <li>Untuk mematuhi kewajiban hukum atau peraturan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                <li>Dengan mitra bisnis tepercaya yang membantu menyediakan layanan</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda</h2>
              <p className="text-gray-700 mb-6">
                Anda memiliki hak-hak berikut terkait data pribadi Anda:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki data yang tidak akurat atau tidak lengkap</li>
                <li>Menghapus data pribadi Anda dalam kondisi tertentu</li>
                <li>Membatasi pemrosesan data pribadi Anda</li>
                <li>Menarik persetujuan untuk pemrosesan data</li>
                <li>Memindahkan data Anda ke layanan lain</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies dan Teknologi Pelacakan</h2>
              <p className="text-gray-700 mb-6">
                Website kami menggunakan cookies dan teknologi serupa untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Mengingat preferensi dan pengaturan Anda</li>
                <li>Menganalisis penggunaan website dan meningkatkan layanan</li>
                <li>Menyediakan konten yang relevan dan personalisasi</li>
                <li>Memahami bagaimana pengguna berinteraksi dengan website kami</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyimpanan Data</h2>
              <p className="text-gray-700 mb-6">
                Data pribadi Anda akan disimpan selama diperlukan untuk tujuan yang telah dijelaskan dalam kebijakan ini, 
                kecuali periode penyimpanan yang lebih lama diperlukan atau diizinkan oleh hukum.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h2>
              <p className="text-gray-700 mb-6">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan dipublikasikan di halaman ini 
                dan tanggal "Terakhir diperbarui" akan disesuaikan. Kami mendorong Anda untuk meninjau kebijakan ini secara berkala.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <p className="text-gray-700 mb-6">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak-hak Anda, 
                silakan hubungi kami melalui:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-orange-600 mr-3" />
                    <span>Email: privacy@dutamandirwijaya.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-600 mr-3" />
                    <span>Telepon: +62 896-9670-7080</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-orange-600 mr-3" />
                    <span>Alamat: Pancur Swadaya Blok J No. 15, Kota Batam, Kepulauan Riau</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Kembali ke Beranda
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