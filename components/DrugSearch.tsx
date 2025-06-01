"use client"

import { useState } from "react";
import Link from "next/link";
import { Search, Pill, AlertCircle, Activity, AlertTriangle, FileText, BookOpen, BarChart3, Heart, CreditCard, Bell, DollarSign, Mic, Languages, ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
];

export function DrugSearch() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, medicalTools.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
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
                    const IconComponent = tool.icon;
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
                    );
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

          {/* Tabs for Browse Drugs and Conditions */}
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
  );
} 