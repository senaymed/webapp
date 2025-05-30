import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowLeft, Pill, Clock, AlertCircle, Star } from "lucide-react"

export default function DrugsMedicationsPage() {
  const popularDrugs = [
    { name: "Paracetamol", category: "Pain Relief", rating: 4.5, reviews: 1234 },
    { name: "Amoxicillin", category: "Antibiotic", rating: 4.3, reviews: 987 },
    { name: "Ibuprofen", category: "Anti-inflammatory", rating: 4.4, reviews: 756 },
    { name: "Metformin", category: "Diabetes", rating: 4.2, reviews: 543 },
    { name: "Coartem", category: "Antimalarial", rating: 4.6, reviews: 432 },
    { name: "Omeprazole", category: "Acid Reducer", rating: 4.1, reviews: 321 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-teal-600">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <Pill className="h-6 w-6 text-teal-600" />
              <h1 className="text-2xl font-bold text-gray-900">Drugs & Medications</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Search Medications</h2>
            <div className="relative">
              <Input type="text" placeholder="Enter drug name, generic name, or brand name..." className="pl-10 h-12" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Popular searches:</span>
              {["Paracetamol", "Amoxicillin", "Ibuprofen", "Metformin"].map((drug) => (
                <button key={drug} className="text-sm text-teal-600 hover:text-teal-700 hover:underline">
                  {drug}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Quick Search</h3>
                  <p className="text-sm text-gray-600">Find drugs by name</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Search our comprehensive database of medications with detailed information about dosage, side effects,
                and interactions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Safety Information</h3>
                  <p className="text-sm text-gray-600">Important warnings</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Get critical safety information, contraindications, and precautions for all medications in our database.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Dosage Guide</h3>
                  <p className="text-sm text-gray-600">Proper usage</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Learn about proper dosing, timing, and administration methods for safe and effective medication use.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-6">Popular Medications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularDrugs.map((drug, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{drug.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{drug.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{drug.category}</p>
                  <p className="text-xs text-gray-500">{drug.reviews} reviews</p>
                  <Button variant="outline" size="sm" className="mt-3 w-full">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
