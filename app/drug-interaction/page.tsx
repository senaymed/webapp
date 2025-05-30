import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, AlertCircle, Plus, X } from "lucide-react"

export default function DrugInteractionPage() {
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
              <AlertCircle className="h-6 w-6 text-teal-600" />
              <h1 className="text-2xl font-bold text-gray-900">Drug Interaction Checker</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Check Drug Interactions</h2>
            <p className="text-gray-600 mb-6">
              Enter the medications you're taking to check for potential interactions, contraindications, and safety
              warnings.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Add Medications</label>
                <div className="flex gap-2">
                  <Input placeholder="Enter drug name..." className="flex-1" />
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">Current Medications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <span className="text-gray-700">Paracetamol 500mg</span>
                    <button className="text-red-500 hover:text-red-700">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <span className="text-gray-700">Ibuprofen 400mg</span>
                    <button className="text-red-500 hover:text-red-700">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-teal-600 hover:bg-teal-700">Check Interactions</Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Interaction Results</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded-r-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium text-yellow-800">Moderate Interaction</span>
                </div>
                <p className="text-yellow-700 text-sm">
                  Paracetamol and Ibuprofen: Taking these medications together may increase the risk of kidney problems.
                  Monitor kidney function and stay hydrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
