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
import { Hero } from "@/components/Hero"
import { WhySenayMed } from "@/components/WhySenayMed"
import { Features } from "@/components/Features"
import { HowItWorks } from "@/components/HowItWorks"
import { DrugSearch } from "@/components/DrugSearch"
import { SymptomChecker } from "@/components/SymptomChecker"
import { MobileApp } from "@/components/MobileApp"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

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
      <Header />
      <main className="flex-1">
        <Hero />
        <WhySenayMed />
        <Features />
        <DrugSearch />
        <SymptomChecker />
        <HowItWorks />
        <MobileApp />
      </main>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      <Footer />
    </div>
  )
}
