'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ArrowLeft, Building, Send, Clock, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 896-9670-7080',
      action: 'tel:+6289696707080',
      description: 'Hubungi kami untuk konsultasi cepat'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@dutamandirwijaya.com',
      action: 'mailto:info@dutamandirwijaya.com',
      description: 'Kirim email untuk pertanyaan detail'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Pancur Swadaya Blok J No. 15, Kota Batam, Kepulauan Riau',
      action: '#',
      description: 'Kunjungi kantor kami'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Sabtu: 08:00 - 17:00',
      action: '#',
      description: 'Minggu & Hari Libur: Tutup'
    }
  ]

  const services = [
    'Konstruksi Gedung Hunian',
    'Instalasi Listrik',
    'Instalasi Elektronika',
    'Instalasi Saluran Air (Plambing)',
    'Instalasi Mekanikal',
    'Perdagangan Material Bangunan'
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
              <Link href="/contact" className="text-orange-600 font-medium">Kontak</Link>
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
              <Link href="/contact" className="block px-3 py-2 text-orange-600 font-medium">Kontak</Link>
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
            <span className="text-orange-600 font-medium">Kontak</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami siap membantu kebutuhan konstruksi dan instalasi Anda. 
              Hubungi kami untuk konsultasi gratis dan penawaran terbaik.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">✓ Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="+62 812-3456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Pilih Subjek</option>
                    <option value="Konsultasi Proyek">Konsultasi Proyek</option>
                    <option value="Penawaran Harga">Penawaran Harga</option>
                    <option value="Informasi Layanan">Informasi Layanan</option>
                    <option value="Kerjasama">Kerjasama</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Jelaskan kebutuhan proyek Anda..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="bg-orange-100 rounded-lg p-2 mr-4">
                          <info.icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          {info.action.startsWith('tel:') || info.action.startsWith('mailto:') ? (
                            <Link 
                              href={info.action}
                              className="text-orange-600 hover:text-orange-700 font-medium"
                            >
                              {info.content}
                            </Link>
                          ) : (
                            <p className="text-gray-700">{info.content}</p>
                          )}
                          <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Butuh Bantuan Cepat?</h3>
                <p className="text-gray-700 mb-4">
                  Hubungi kami langsung untuk konsultasi cepat dan penawaran terbaik untuk proyek Anda.
                </p>
                <Link 
                  href="tel:+6289696707080"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Hubungi Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Kami menyediakan berbagai layanan konstruksi dan instalasi untuk memenuhi kebutuhan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="bg-orange-100 rounded-lg p-3 inline-block mb-3">
                  <Building className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lokasi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Kunjungi kantor kami untuk konsultasi langsung.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <MapPin className="h-16 w-16 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              PT DUTA MANDIRI WIJAYA
            </h3>
            <p className="text-gray-600 mb-4">
              Pancur Swadaya Blok J No. 15<br />
              Kota Batam, Kepulauan Riau<br />
              Indonesia
            </p>
            <Link 
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Buka di Google Maps
            </Link>
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
            Tim profesional kami siap membantu mewujudkan proyek konstruksi dan instalasi impian Anda.
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
              href="/"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
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