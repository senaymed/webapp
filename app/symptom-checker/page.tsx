import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Activity, User } from "lucide-react"

export default function SymptomCheckerPage() {
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
              <Activity className="h-6 w-6 text-teal-600" />
              <h1 className="text-2xl font-bold text-gray-900">Symptom Checker</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Symptom Checker</h2>
              <p className="text-gray-600 text-lg">
                Identify possible conditions and treatments by checking your symptoms
              </p>
            </div>

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-5">0-5 years</SelectItem>
                          <SelectItem value="6-12">6-12 years</SelectItem>
                          <SelectItem value="13-17">13-17 years</SelectItem>
                          <SelectItem value="18-30">18-30 years</SelectItem>
                          <SelectItem value="31-50">31-50 years</SelectItem>
                          <SelectItem value="51-70">51-70 years</SelectItem>
                          <SelectItem value="70+">70+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Sex</label>
                      <div className="flex space-x-6">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="male"
                            name="sex"
                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                            defaultChecked
                          />
                          <label htmlFor="male" className="ml-3 text-sm font-medium text-gray-700">
                            Male
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="female"
                            name="sex"
                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                          />
                          <label htmlFor="female" className="ml-3 text-sm font-medium text-gray-700">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What are your symptoms?</h3>
                  <Input placeholder="Type your symptoms here..." className="h-12" />
                  <p className="text-sm text-gray-500 mt-2">Example: headache, fever, cough, stomach pain</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Selected Symptoms</h4>
                  <div className="bg-gray-50 rounded-lg p-8 text-center min-h-[120px] flex flex-col items-center justify-center">
                    <Activity className="h-8 w-8 text-gray-400 mb-3" />
                    <p className="text-gray-500 font-medium">No symptoms added</p>
                    <p className="text-gray-400 text-sm mt-1">Start typing to add symptoms</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-[300px] h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=300"
                    alt="3D Human anatomy model for symptom selection"
                    fill
                    className="object-contain"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 rounded-lg p-4 text-center">
                      <User className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click on body parts to add symptoms</p>
                    </div>
                  </div>
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

          <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Important Disclaimer</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 text-sm">
                <strong>Medical Disclaimer:</strong> This symptom checker is for informational purposes only and is not
                a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your
                physician or other qualified health provider with any questions you may have regarding a medical
                condition.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
