'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ArrowLeft, Building, FileText, CheckCircle, AlertCircle, Shield, Clock } from 'lucide-react'

export default function TermsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    {
      icon: CheckCircle,
      title: "Penerimaan Syarat",
      content: [
        "Dengan mengakses dan menggunakan website kami, Anda menerima dan setuju untuk terikat oleh syarat dan ketentuan ini",
        "Jika Anda tidak setuju dengan syarat ini, jangan gunakan website atau layanan kami",
        "Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu",
        "Perubahan akan berlaku efektif segera setelah dipublikasikan di website"
      ]
    },
    {
      icon: Shield,
      title: "Layanan Kami",
      content: [
        "PT DUTA MANDIRI WIJAYA menyediakan layanan konstruksi dan instalasi",
        "Layanan meliputi konstruksi gedung hunian, instalasi listrik, elektronika, plambing, mekanikal, dan perdagangan material bangunan",
        "Kami berhak menolak atau membatalkan layanan kepada siapa pun dengan alasan apa pun",
        "Kami berusaha menyediakan layanan dengan kualitas terbaik sesuai standar industri"
      ]
    },
    {
      icon: AlertCircle,
      title: "Kewajiban Pengguna",
      content: [
        "Memberikan informasi yang akurat dan lengkap",
        "Tidak menggunakan website untuk tujuan ilegal atau tidak sah",
        "Tidak mengirimkan materi yang berbahaya, memfitnah, atau melanggar hak",
        "Menghormati hak kekayaan intelektual kami dan pihak ketiga",
        "Tidak mencoba mengganggu atau merusak sistem keamanan website"
      ]
    },
    {
      icon: Clock,
      title: "Perjanjian Layanan",
      content: [
        "Semua perjanjian layanan harus ditulis dalam bentuk kontrak resmi",
        "Harga dan jangka waktu akan ditentukan dalam proposal resmi",
        "Pembayaran dilakukan sesuai dengan termin yang disepakati",
        "Perubahan lingkup pekerjaan harus disetujui secara tertulis",
        "Kedua belah pihak berkewajiban mematuhi ketentuan kontrak"
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
            <span className="text-orange-600 font-medium">Terms & Conditions</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-orange-100 rounded-full p-4 inline-block mb-6">
              <FileText className="h-12 w-12 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-gray-600">
              Syarat dan ketentuan ini mengatur penggunaan website dan layanan yang disediakan 
              oleh PT DUTA MANDIRI WIJAYA.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-sm text-gray-500 mb-4">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            
            <div className="prose prose-orange max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Selamat datang di website PT DUTA MANDIRI WIJAYA. Syarat dan Ketentuan ini ("Syarat") 
                mengatur penggunaan website dan layanan kami. Dengan mengakses atau menggunakan website kami, 
                Anda setuju untuk terikat oleh Syarat ini.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Penerimaan Syarat</h2>
              <p className="text-gray-700 mb-6">
                Dengan mengakses dan menggunakan website PT DUTA MANDIRI WIJAYA, Anda menyatakan bahwa:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Anda telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini</li>
                <li>Anda berusia minimal 18 tahun atau memiliki persetujuan orang tua/wali</li>
                <li>Anda memiliki kapasitas hukum untuk terikat oleh perjanjian ini</li>
                <li>Anda akan mematuhi semua hukum dan peraturan yang berlaku</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Layanan Kami</h2>
              <p className="text-gray-700 mb-6">
                PT DUTA MANDIRI WIJAYA menyediakan layanan konstruksi dan instalasi meliputi:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Konstruksi Gedung Hunian (Kode: 41011)</li>
                <li>Instalasi Listrik (Kode: 43211)</li>
                <li>Instalasi Elektronika (Kode: 43213)</li>
                <li>Instalasi Saluran Air/Plambing (Kode: 43221)</li>
                <li>Instalasi Mekanikal (Kode: 43291)</li>
                <li>Perdagangan Material Bangunan (Kode: 46638)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Perjanjian Layanan</h2>
              <p className="text-gray-700 mb-6">
                Untuk setiap proyek, berlaku ketentuan sebagai berikut:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Semua perjanjian harus dibuat secara tertulis dalam bentuk kontrak resmi</li>
                <li>Proposal dan penawaran harga berlaku selama 30 hari kecuali disepakati lain</li>
                <li>Pembayaran dilakukan sesuai termin yang disepakati dalam kontrak</li>
                <li>Perubahan lingkup pekerjaan harus disetujui secara tertulis oleh kedua belah pihak</li>
                <li>Jangka waktu pelaksanaan dihitung sejak semua persyaratan awal terpenuhi</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kewajiban Pengguna</h2>
              <p className="text-gray-700 mb-6">
                Sebagai pengguna website dan layanan kami, Anda berkewajiban untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Memberikan informasi yang akurat, lengkap, dan terkini</li>
                <li>Tidak menggunakan website untuk tujuan ilegal atau tidak sah</li>
                <li>Tidak mengirimkan materi yang melanggar hak kekayaan intelektual</li>
                <li>Tidak mencoba mengganggu atau merusak sistem keamanan website</li>
                <li>Mematuhi semua petunjuk dan kebijakan yang kami berlakukan</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Harga dan Pembayaran</h2>
              <p className="text-gray-700 mb-6">
                Ketentuan mengenai harga dan pembayaran:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Harga yang tercantum dalam penawaran belum termasuk PPN (jika berlaku)</li>
                <li>Harga dapat berubah sesuai dengan kondisi pasar dan fluktuasi material</li>
                <li>Pembayaran dilakukan melalui transfer ke rekening perusahaan resmi</li>
                <li>Pembayaran dianggap sah setelah konfirmasi penerimaan dari pihak kami</li>
                <li>Keterlambatan pembayaran dapat dikenakan denda sesuai ketentuan</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Jaminan dan Garansi</h2>
              <p className="text-gray-700 mb-6">
                Kami memberikan jaminan untuk semua layanan yang kami sediakan:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Jaminan kualitas sesuai dengan standar industri yang berlaku</li>
                <li>Garansi untuk material yang digunakan sesuai dengan ketentuan pabrikan</li>
                <li>Perbaikan untuk cacat yang terjadi akibat kesalahan instalasi</li>
                <li>Jaminan tidak berlaku untuk kerusakan akibat penggunaan yang tidak tepat</li>
                <li>Klaim garansi harus disertai dengan bukti pembayaran yang sah</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Pembatalan dan Pengembalian</h2>
              <p className="text-gray-700 mb-6">
                Ketentuan pembatalan dan pengembalian dana:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Pembatalan proyek harus dilakukan secara tertulis</li>
                <li>Pembatalan sebelum pekerjaan dimulai dikenakan biaya administrasi 10%</li>
                <li>Pembatalan setelah pekerjaan dimulai dikenakan biaya sesuai progres pekerjaan</li>
                <li>Pengembalian dana diproses dalam waktu 14 hari kerja</li>
                <li>Biaya material yang sudah dibeli tidak dapat dikembalikan</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Hak Kekayaan Intelektual</h2>
              <p className="text-gray-700 mb-6">
                Semua konten di website ini dilindungi oleh hak kekayaan intelektual:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Nama PT DUTA MANDIRI WIJAYA dan logo adalah merek dagang terdaftar</li>
                <li>Desain, grafik, dan konten website dilindungi hak cipta</li>
                <li>Dilarang menyalin, mendistribusikan, atau memodifikasi konten tanpa izin</li>
                <li>Pelanggaran akan ditindak sesuai dengan hukum yang berlaku</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Pembatasan Tanggung Jawab</h2>
              <p className="text-gray-700 mb-6">
                PT DUTA MANDIRI WIJAYA tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Keterlambatan akibat force majeur (bencana alam, huru hara, dll)</li>
                <li>Kerusakan akibat penggunaan yang tidak sesuai dengan petunjuk</li>
                <li>Kerugian akibat informasi yang tidak akurat dari pihak ketiga</li>
                <li>Gangguan layanan akibat maintenance atau upgrade sistem</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privasi Data</h2>
              <p className="text-gray-700 mb-6">
                Perlindungan data pribadi Anda adalah prioritas kami:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Data pribadi akan diolah sesuai dengan Kebijakan Privasi kami</li>
                <li>Kami tidak akan menjual atau menyewakan data pribadi Anda</li>
                <li>Data hanya digunakan untuk tujuan penyediaan layanan</li>
                <li>Anda berhak mengakses dan memperbaiki data pribadi Anda</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Perubahan Syarat</h2>
              <p className="text-gray-700 mb-6">
                Kami berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Perubahan akan diumumkan melalui website</li>
                <li>Penggunaan website setelah perubahan berarti persetujuan Anda</li>
                <li>Kami menyarankan untuk meninjau syarat secara berkala</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Hukum yang Berlaku</h2>
              <p className="text-gray-700 mb-6">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap sengketa akan diselesaikan melalui musyawarah terlebih dahulu, dan jika tidak mencapai kesepakatan, 
                akan diselesaikan melalui pengadilan yang berwenang di Kota Batam.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Hubungi Kami</h2>
              <p className="text-gray-700 mb-6">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-orange-600 mr-3" />
                    <span>Email: legal@dutamandirwijaya.com</span>
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