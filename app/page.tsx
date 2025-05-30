"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/auth-modal"
import {
  Search,
  AlertCircle,
  FileText,
  MapPin,
  Wifi,
  Calendar,
  Languages,
  AlertTriangle,
  Activity,
  Pill,
  Heart,
  BookOpen,
  BarChart3,
  CreditCard,
  Bell,
  DollarSign,
  Mic,
} from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, ChevronLeft } from "lucide-react"

const medicalTools = [
  {
    id: "drugs-medications",
    title: "Drugs & Medications",
    icon: Pill,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
    href: "/drugs-medications",
  },
  {
    id: "pill-identifier",
    title: "Pill Identifier",
    icon: Search,
    color: "bg-green-100",
    iconColor: "text-green-600",
    href: "/pill-identifier",
  },
  {
    id: "drug-interaction",
    title: "Drug Interaction Checker",
    icon: AlertCircle,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
    href: "/drug-interaction",
  },
  {
    id: "symptom-checker",
    title: "Symptom Checker",
    icon: Activity,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
    href: "/symptom-checker",
  },
  {
    id: "side-effects",
    title: "Side Effects",
    icon: AlertTriangle,
    color: "bg-red-100",
    iconColor: "text-red-600",
    href: "/side-effects",
  },
  {
    id: "conditions-diseases",
    title: "Conditions & Diseases",
    icon: FileText,
    color: "bg-teal-100",
    iconColor: "text-teal-600",
    href: "/conditions-diseases",
  },
  {
    id: "treatment-guides",
    title: "Treatment Guides",
    icon: BookOpen,
    color: "bg-indigo-100",
    iconColor: "text-indigo-600",
    href: "/treatment-guides",
  },
  {
    id: "compare-drugs",
    title: "Compare Drugs",
    icon: BarChart3,
    color: "bg-orange-100",
    iconColor: "text-orange-600",
    href: "/compare-drugs",
  },
  {
    id: "my-med-list",
    title: "My Med List",
    icon: Heart,
    color: "bg-pink-100",
    iconColor: "text-pink-600",
    href: "/my-med-list",
  },
  {
    id: "discount-card",
    title: "Discount Card",
    icon: CreditCard,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
    href: "/discount-card",
  },
  {
    id: "fda-alerts",
    title: "FDA Alerts",
    icon: Bell,
    color: "bg-red-100",
    iconColor: "text-red-600",
    href: "/fda-alerts",
  },
  {
    id: "price-guide",
    title: "Price Guide",
    icon: DollarSign,
    color: "bg-green-100",
    iconColor: "text-green-600",
    href: "/price-guide",
  },
  {
    id: "phonetic-search",
    title: "Phonetic Search",
    icon: Mic,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
    href: "/phonetic-search",
  },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const itemsPerView = 4
  const maxIndex = Math.max(0, medicalTools.length - itemsPerView)

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=150"
              alt="SenayMed Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#why" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
              Why SenayMed
            </a>
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
              How It Works
            </a>
            <a href="#drug-search" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
              Drug Search
            </a>
            <div className="flex items-center gap-2 border rounded-md px-2 py-1">
              <Languages size={16} />
              <span className="text-sm font-medium">EN</span>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white" onClick={() => setIsAuthModalOpen(true)}>
              Get Started
            </Button>
            <Button variant="outline" className="md:hidden">
              <span className="sr-only">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-600 to-teal-700"
          style={{ background: "linear-gradient(to bottom right, #007a52, #009966, #005c3d)" }}
        >
          <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center gap-8 py-12 md:py-16 lg:py-20">
            <div className="flex flex-col gap-4 lg:gap-6 lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                Empowering Health <span className="text-teal-400">Access in Ethiopia</span>
              </h1>
              <p className="text-gray-300 md:text-xl max-w-[600px]">
                Search for drugs, explore traditional medicine, find hospitals, and get AI-powered health info — all in
                your language, online or offline.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button
                  className="bg-teal-500 hover:bg-teal-600 text-white h-12 px-6"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="h-12 px-6 border-white text-white hover:bg-white hover:text-slate-900"
                >
                  Try the Demo
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
                {/* Central SenayMed Logo */}
                <div className="relative z-20 text-center bg-white rounded-2xl p-6 shadow-2xl border-4 border-teal-500">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-2">SenayMed</h2>
                  <p className="text-sm text-gray-600 font-medium">Healthcare Hub</p>
                </div>

                {/* Radiating Arrows */}
                <div className="absolute inset-0 z-10">
                  {/* Arrow 1 - Top */}
                  <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-t from-teal-400 to-teal-300 origin-bottom animate-arrow-1 shadow-lg">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-teal-300"></div>
                  </div>

                  {/* Arrow 2 - Top Right */}
                  <div className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-teal-400 to-teal-300 origin-bottom animate-arrow-2 shadow-lg">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-teal-300"></div>
                  </div>

                  {/* Arrow 3 - Right */}
                  <div className="absolute top-1/2 left-1/2 w-1 h-26 bg-gradient-to-t from-teal-400 to-teal-300 origin-bottom animate-arrow-3 shadow-lg">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-teal-300"></div>
                  </div>

                  {/* Arrow 4 - Bottom Right */}
                  <div className="absolute top-1/2 left-1/2 w-1 h-22 bg-gradient-to-t from-teal-400 to-teal-300 origin-bottom animate-arrow-4 shadow-lg">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-teal-300"></div>
                  </div>

                  {/* Arrow 5 - Bottom */}
                  <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-t from-teal-400 to-teal-300 origin-bottom animate-arrow-5 shadow-lg">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-teal-300"></div>
                  </div>

                  {/* Arrow 6 - Bottom Left */}
                  <div className="absolute top-1/2 left-1/2 w-1 h-21 bg-gradient-to-t from-teal-400 to-teal-300 origin-bottom animate-arrow-6 shadow-lg">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-teal-300"></div>
                  </div>

                  {/* Arrow 7 - Left */}
                  <div className="absolute top-1/2 left-1/2 w-1 h-27 bg-gradient-to-t from-teal-400 to-teal-300 origin-bottom animate-arrow-7 shadow-lg">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-teal-300"></div>
                  </div>

                  {/* Arrow 8 - Top Left */}
                  <div className="absolute top-1/2 left-1/2 w-1 h-23 bg-gradient-to-t from-teal-400 to-teal-300 origin-bottom animate-arrow-8 shadow-lg">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-teal-300"></div>
                  </div>
                </div>

                {/* Animated Pills */}
                <div className="absolute inset-0 z-15">
                  {/* Pill 1 - Top */}
                  <div className="absolute animate-orbit-1">
                    <div className="relative">
                      <div className="w-16 h-8 bg-gradient-to-r from-red-400 to-red-600 rounded-full shadow-xl border-3 border-white"></div>
                      <div className="absolute left-2 top-0 w-8 h-8 bg-white rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
                    </div>
                  </div>

                  {/* Pill 2 - Top Right */}
                  <div className="absolute animate-orbit-2">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-xl border-3 border-white"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
                    </div>
                  </div>

                  {/* Pill 3 - Right */}
                  <div className="absolute animate-orbit-3">
                    <div className="relative">
                      <div className="w-10 h-16 bg-gradient-to-b from-green-400 to-green-600 rounded-full shadow-xl border-3 border-white"></div>
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent rounded-full"></div>
                    </div>
                  </div>

                  {/* Pill 4 - Bottom Right */}
                  <div className="absolute animate-orbit-4">
                    <div className="relative">
                      <div className="w-15 h-7 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl border-3 border-white"></div>
                      <div className="absolute left-2 top-0 w-7 h-7 bg-white rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
                    </div>
                  </div>

                  {/* Pill 5 - Bottom */}
                  <div className="absolute animate-orbit-5">
                    <div className="relative">
                      <div className="w-13 h-13 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-xl border-3 border-white"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
                    </div>
                  </div>

                  {/* Pill 6 - Bottom Left */}
                  <div className="absolute animate-orbit-6">
                    <div className="relative">
                      <div className="w-14 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full shadow-xl border-3 border-white"></div>
                      <div className="absolute left-2 top-0 w-8 h-8 bg-white rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
                    </div>
                  </div>

                  {/* Pill 7 - Left */}
                  <div className="absolute animate-orbit-7">
                    <div className="relative">
                      <div className="w-9 h-14 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-xl border-3 border-white"></div>
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent rounded-full"></div>
                    </div>
                  </div>

                  {/* Pill 8 - Top Left */}
                  <div className="absolute animate-orbit-8">
                    <div className="relative">
                      <div className="w-11 h-15 bg-gradient-to-b from-indigo-400 to-indigo-600 rounded-full shadow-xl border-3 border-white"></div>
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 right-20 w-3 h-3 bg-teal-300 rounded-full animate-float-1 opacity-70"></div>
                <div className="absolute top-32 right-10 w-2 h-2 bg-blue-400 rounded-full animate-float-2 opacity-70"></div>
                <div className="absolute bottom-20 right-40 w-4 h-4 bg-teal-200 rounded-full animate-float-3 opacity-70"></div>
                <div className="absolute bottom-40 left-10 w-2 h-2 bg-teal-400 rounded-full animate-float-1 opacity-70"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why SenayMed Section */}
        <section id="why" className="bg-gray-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why <span className="text-teal-500">SenayMed</span>?
              </h2>
              <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                We're addressing critical gaps in Ethiopia's healthcare information ecosystem to make quality health
                knowledge accessible to all.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Limited access to accurate health info</h3>
                <p className="text-gray-600">
                  Most Ethiopians can't easily access reliable medical information, especially in rural areas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Languages className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lack of local language support</h3>
                <p className="text-gray-600">
                  Health information is rarely available in local Ethiopian languages, creating barriers to
                  understanding.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No integration of traditional medicine</h3>
                <p className="text-gray-600">
                  Existing solutions ignore Ethiopia's rich tradition of natural and herbal remedies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Wifi className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Offline access challenges</h3>
                <p className="text-gray-600">
                  Many regions have limited connectivity, making it difficult to access online health resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What You <span className="text-teal-500">Can Do</span>
              </h2>
              <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                SenayMed puts comprehensive health information at your fingertips, in your language and context.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Drug Lookup</h3>
                <p className="text-gray-600">
                  Search medications in Amharic, English, or Oromo. Get detailed information about dosage, side effects,
                  and availability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Disease Info</h3>
                <p className="text-gray-600">
                  Get reliable information about symptoms, conditions, and treatments through our AI assistant.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Traditional Medicine Library</h3>
                <p className="text-gray-600">
                  Access Ethiopia's rich heritage of traditional remedies and herbal treatments documented by experts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hospital & Clinic Directory</h3>
                <p className="text-gray-600">
                  Find healthcare facilities near you with information on services, hours, and contact details.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Wifi className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Offline Access</h3>
                <p className="text-gray-600">
                  Use the app without internet connection - perfect for rural areas with limited connectivity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prescription Reminders</h3>
                <p className="text-gray-600">Never miss a dose with customizable medication reminders and schedules.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-gray-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It <span className="text-teal-500">Works</span>
              </h2>
              <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                SenayMed is designed to be intuitive and accessible for everyone, regardless of technical expertise.
              </p>
            </div>
            <div className="relative max-w-3xl mx-auto mt-16">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200"></div>

              {/* Step 1 */}
              <div className="relative mb-16">
                <div className="flex items-center">
                  <div className="flex-1 mr-4 md:mr-12 text-right">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 inline-block">
                      <h3 className="text-xl font-semibold mb-2">Search for symptoms or medicine</h3>
                      <p className="text-gray-600">
                        Enter your query in any supported language: Amharic, English, or Oromo.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1 ml-4 md:ml-12"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-16">
                <div className="flex items-center">
                  <div className="flex-1 mr-4 md:mr-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1 ml-4 md:ml-12">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 inline-block">
                      <h3 className="text-xl font-semibold mb-2">Get trusted results in your language</h3>
                      <p className="text-gray-600">
                        Receive medically accurate information carefully reviewed and translated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-16">
                <div className="flex items-center">
                  <div className="flex-1 mr-4 md:mr-12 text-right">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 inline-block">
                      <h3 className="text-xl font-semibold mb-2">Learn about modern & traditional options</h3>
                      <p className="text-gray-600">
                        Compare conventional treatments with traditional medicine approaches.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1 ml-4 md:ml-12"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex-1 mr-4 md:mr-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="flex-1 ml-4 md:ml-12">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 inline-block">
                      <h3 className="text-xl font-semibold mb-2">Get reminders & save favorites</h3>
                      <p className="text-gray-600">
                        Set medication reminders and bookmark important information for offline access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drug Search Demo Section */}
        <section id="drug-search" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Drugs & Conditions</h2>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter a drug name, condition, pill imprint, etc."
                  className="w-full h-12 pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Trending searches:
                  <span className="text-teal-500 mx-1">Amoxicillin</span> •
                  <span className="text-teal-500 mx-1">Paracetamol</span> •
                  <span className="text-teal-500 mx-1">Coartem</span> •
                  <span className="text-teal-500 mx-1">Metformin</span> •
                  <span className="text-teal-500 mx-1">Hydrochlorothiazide</span> •
                  <span className="text-teal-500 mx-1">Omeprazole</span>
                </p>
              </div>

              {/* Medical Tools Carousel */}
              <div className="mt-12">
                <div className="relative">
                  <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>

                  <div className="overflow-hidden mx-12">
                    <div
                      className="flex transition-transform duration-300 ease-in-out gap-4"
                      style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                    >
                      {medicalTools.map((tool) => {
                        const IconComponent = tool.icon
                        return (
                          <Link
                            key={tool.id}
                            href={tool.href}
                            className="flex-shrink-0 w-[calc(25%-12px)] p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow"
                          >
                            <div
                              className={`w-12 h-12 ${tool.color} rounded-full flex items-center justify-center mb-4`}
                            >
                              <IconComponent className={`h-6 w-6 ${tool.iconColor}`} />
                            </div>
                            <h3 className="text-sm font-medium text-center text-gray-900">{tool.title}</h3>
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={currentIndex >= maxIndex}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <Tabs defaultValue="browse-drugs" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="browse-drugs">Browse Drugs</TabsTrigger>
                    <TabsTrigger value="conditions">Conditions</TabsTrigger>
                  </TabsList>
                  <TabsContent value="browse-drugs" className="mt-4">
                    <div className="grid grid-cols-8 gap-2">
                      {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                        <button
                          key={letter}
                          className="h-10 w-10 flex items-center justify-center rounded border border-gray-200 hover:bg-teal-50 hover:border-teal-200"
                        >
                          {letter}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-8 gap-2 mt-2">
                      {["I", "J", "K", "L", "M", "N", "O", "P"].map((letter) => (
                        <button
                          key={letter}
                          className="h-10 w-10 flex items-center justify-center rounded border border-gray-200 hover:bg-teal-50 hover:border-teal-200"
                        >
                          {letter}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-8 gap-2 mt-2">
                      {["Q", "R", "S", "T", "U", "V", "W", "X"].map((letter) => (
                        <button
                          key={letter}
                          className="h-10 w-10 flex items-center justify-center rounded border border-gray-200 hover:bg-teal-50 hover:border-teal-200"
                        >
                          {letter}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {["Y", "Z", "0-9"].map((letter) => (
                        <button
                          key={letter}
                          className={`h-10 flex items-center justify-center rounded border border-gray-200 hover:bg-teal-50 hover:border-teal-200 ${letter === "0-9" ? "col-span-1" : ""}`}
                        >
                          {letter}
                        </button>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="conditions" className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-lg border border-gray-200">
                        <h3 className="font-medium mb-2">Common Conditions</h3>
                        <ul className="space-y-2">
                          <li className="text-teal-600 hover:underline cursor-pointer">Hypertension</li>
                          <li className="text-teal-600 hover:underline cursor-pointer">Diabetes</li>
                          <li className="text-teal-600 hover:underline cursor-pointer">Malaria</li>
                          <li className="text-teal-600 hover:underline cursor-pointer">Tuberculosis</li>
                          <li className="text-teal-600 hover:underline cursor-pointer">HIV/AIDS</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-white rounded-lg border border-gray-200">
                        <h3 className="font-medium mb-2">Seasonal Conditions</h3>
                        <ul className="space-y-2">
                          <li className="text-teal-600 hover:underline cursor-pointer">Common Cold</li>
                          <li className="text-teal-600 hover:underline cursor-pointer">Influenza</li>
                          <li className="text-teal-600 hover:underline cursor-pointer">Allergies</li>
                          <li className="text-teal-600 hover:underline cursor-pointer">Typhoid</li>
                          <li className="text-teal-600 hover:underline cursor-pointer">Cholera</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Symptom Checker Preview */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Symptom Checker</h2>
              <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                Identify possible conditions and treatments by checking your symptoms
              </p>
            </div>
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="border-b border-gray-200 mb-8">
                  <div className="flex space-x-8">
                    <button className="px-0 py-3 text-sm font-medium text-orange-500 border-b-2 border-orange-500">
                      INFO
                    </button>
                    <button className="px-0 py-3 text-sm font-medium text-gray-400">SYMPTOMS</button>
                    <button className="px-0 py-3 text-sm font-medium text-gray-400">CONDITIONS</button>
                    <button className="px-0 py-3 text-sm font-medium text-gray-400">DETAILS</button>
                    <button className="px-0 py-3 text-sm font-medium text-gray-400">TREATMENT</button>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Symptom Checker</h1>
                  <p className="text-gray-600">
                    Identify possible conditions and treatments by checking your symptoms.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                          <select className="w-full h-12 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white">
                            <option>Select</option>
                            <option>0-5 years</option>
                            <option>6-12 years</option>
                            <option>13-17 years</option>
                            <option>18-30 years</option>
                            <option>31-50 years</option>
                            <option>51-70 years</option>
                            <option>70+ years</option>
                          </select>
                        </div>
                        <div>
                          <div className="flex space-x-6">
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="male-symptom"
                                name="sex-symptom"
                                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                                defaultChecked
                                readOnly
                              />
                              <label htmlFor="male-symptom" className="ml-3 text-sm font-medium text-gray-700">
                                Male
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="female-symptom"
                                name="sex-symptom"
                                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                                readOnly
                              />
                              <label htmlFor="female-symptom" className="ml-3 text-sm font-medium text-gray-700">
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">What are your symptoms?</h3>
                      <input
                        type="text"
                        placeholder="Type"
                        className="w-full h-12 pl-4 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <div className="bg-gray-50 rounded-lg p-8 text-center min-h-[120px] flex flex-col items-center justify-center">
                        <FileText className="h-8 w-8 text-gray-400 mb-3" />
                        <p className="text-gray-500 font-medium">No symptoms added</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <div className="relative w-full max-w-[300px] h-[500px]">
                      <Image
                        src="/placeholder.svg?height=500&width=300"
                        alt="3D Human anatomy model showing skeletal and muscular systems"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" className="px-8 py-3">
                    Previous
                  </Button>
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3">Continue</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="bg-gradient-to-r from-teal-500 to-teal-400 py-16 md:py-24 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">SenayMed Mobile App</h2>
                <p className="text-xl mb-6">
                  Access drug & treatment information, identify pills, check interactions and set up personal medication
                  records - all from your smartphone.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Image
                    src="/placeholder.svg?height=53&width=160"
                    alt="Download on the App Store"
                    width={160}
                    height={53}
                    className="h-12 w-auto"
                  />
                  <Image
                    src="/placeholder.svg?height=53&width=180"
                    alt="Get it on Google Play"
                    width={180}
                    height={53}
                    className="h-12 w-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-[280px] h-[560px]">
                  <div className="absolute inset-0 bg-black rounded-[40px] shadow-xl"></div>
                  <div className="absolute inset-2 bg-white rounded-[36px] overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=560&width=280"
                      alt="SenayMed Mobile App Screenshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                SenayMed is making a difference in healthcare access across Ethiopia
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">AB</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Abebe T.</h4>
                    <p className="text-sm text-gray-500">Addis Ababa</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "SenayMed has been a lifesaver for my family. Being able to check medication information in Amharic
                  helps my parents understand their treatments better."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">MT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Makeda T.</h4>
                    <p className="text-sm text-gray-500">Bahir Dar</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As a healthcare worker in a rural area, the offline access feature is invaluable. I can provide
                  accurate information even without internet connection."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">DG</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Dr. Girma</h4>
                    <p className="text-sm text-gray-500">Jimma</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The integration of traditional medicine alongside modern treatments is brilliant. It helps bridge the
                  gap between different healthcare approaches."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Roadmap</h2>
              <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                Follow our journey as we build and improve SenayMed
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-0 left-16 md:left-1/4 w-1 h-full bg-teal-200"></div>

                {/* Week 1 */}
                <div className="relative flex mb-8">
                  <div className="flex-none w-16 md:w-1/4 pt-2 text-right pr-6">
                    <span className="font-semibold">Week 1</span>
                  </div>
                  <div className="absolute left-16 md:left-1/4 transform -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-white"></div>
                  <div className="flex-grow pl-6 md:pl-10">
                    <h3 className="font-semibold text-lg">UI Design</h3>
                    <p className="text-gray-600">Creating user-friendly interfaces for web and mobile platforms</p>
                  </div>
                </div>

                {/* Week 2 */}
                <div className="relative flex mb-8">
                  <div className="flex-none w-16 md:w-1/4 pt-2 text-right pr-6">
                    <span className="font-semibold">Week 2</span>
                  </div>
                  <div className="absolute left-16 md:left-1/4 transform -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-white"></div>
                  <div className="flex-grow pl-6 md:pl-10">
                    <h3 className="font-semibold text-lg">Database Development</h3>
                    <p className="text-gray-600">Building comprehensive drug and medical information database</p>
                  </div>
                </div>

                {/* Week 3 */}
                <div className="relative flex mb-8">
                  <div className="flex-none w-16 md:w-1/4 pt-2 text-right pr-6">
                    <span className="font-semibold">Week 3</span>
                  </div>
                  <div className="absolute left-16 md:left-1/4 transform -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-white"></div>
                  <div className="flex-grow pl-6 md:pl-10">
                    <h3 className="font-semibold text-lg">AI Integration</h3>
                    <p className="text-gray-600">Implementing AI-powered symptom checker and health assistant</p>
                  </div>
                </div>

                {/* Week 4 */}
                <div className="relative flex mb-8">
                  <div className="flex-none w-16 md:w-1/4 pt-2 text-right pr-6">
                    <span className="font-semibold">Week 4</span>
                  </div>
                  <div className="absolute left-16 md:left-1/4 transform -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-white"></div>
                  <div className="flex-grow pl-6 md:pl-10">
                    <h3 className="font-semibold text-lg">Translation & Localization</h3>
                    <p className="text-gray-600">Adapting content for Amharic, English, and Oromo languages</p>
                  </div>
                </div>

                {/* Week 5 */}
                <div className="relative flex mb-8">
                  <div className="flex-none w-16 md:w-1/4 pt-2 text-right pr-6">
                    <span className="font-semibold">Week 5</span>
                  </div>
                  <div className="absolute left-16 md:left-1/4 transform -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-white"></div>
                  <div className="flex-grow pl-6 md:pl-10">
                    <h3 className="font-semibold text-lg">Testing & Optimization</h3>
                    <p className="text-gray-600">Quality assurance and performance optimization</p>
                  </div>
                </div>

                {/* Week 6 */}
                <div className="relative flex">
                  <div className="flex-none w-16 md:w-1/4 pt-2 text-right pr-6">
                    <span className="font-semibold">Week 6</span>
                  </div>
                  <div className="absolute left-16 md:left-1/4 transform -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-white"></div>
                  <div className="flex-grow pl-6 md:pl-10">
                    <h3 className="font-semibold text-lg">Launch</h3>
                    <p className="text-gray-600">Official release of SenayMed web and mobile platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-600 to-teal-500 rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to improve healthcare access?</h2>
              <p className="text-xl mb-8">Join SenayMed today and be part of the healthcare revolution in Ethiopia.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-white text-teal-600 hover:bg-gray-100 h-12 px-8 text-lg"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Get Started
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-teal-600 h-12 px-8 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/placeholder.svg?height=40&width=150"
                  alt="SenayMed Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Empowering health access in Ethiopia through technology and information.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Drug Search
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Symptom Checker
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Developers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+251 11 234 5678</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>info@senaymed.com</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Addis Ababa, Ethiopia</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2">Languages</h4>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-gray-800 hover:bg-gray-700 rounded">English</button>
                  <button className="px-3 py-1 text-sm bg-gray-800 hover:bg-gray-700 rounded">አማርኛ</button>
                  <button className="px-3 py-1 text-sm bg-gray-800 hover:bg-gray-700 rounded">Afaan Oromo</button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} SenayMed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
