import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Camera, Upload } from "lucide-react"

export default function PillIdentifierPage() {
  const pillShapes = ["Round", "Oval", "Capsule", "Square", "Diamond", "Triangle", "Other"]
  const pillColors = ["White", "Yellow", "Blue", "Red", "Green", "Pink", "Orange", "Purple", "Brown", "Gray", "Black"]

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
              <Search className="h-6 w-6 text-teal-600" />
              <h1 className="text-2xl font-bold text-gray-900">Pill Identifier</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Identify Your Pill</h2>
            <p className="text-gray-600 mb-6">
              Use our pill identifier to find information about your medication. You can search by imprint, shape,
              color, or upload a photo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Imprint (letters/numbers on pill)
                  </label>
                  <Input placeholder="e.g., 44 175, TYLENOL" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shape</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select shape" />
                    </SelectTrigger>
                    <SelectContent>
                      {pillShapes.map((shape) => (
                        <SelectItem key={shape} value={shape.toLowerCase()}>
                          {shape}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      {pillColors.map((color) => (
                        <SelectItem key={color} value={color.toLowerCase()}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size (mm)</label>
                  <Input placeholder="e.g., 10" type="number" />
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <Search className="h-4 w-4 mr-2" />
                  Search Pills
                </Button>
              </div>

              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Take a Photo</h3>
                  <p className="text-gray-600 mb-4">Take a clear photo of your pill for automatic identification</p>
                  <Button variant="outline" className="mb-2">
                    <Camera className="h-4 w-4 mr-2" />
                    Use Camera
                  </Button>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Image</h3>
                  <p className="text-gray-600 mb-4">Upload an existing photo from your device</p>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Choose File
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">How to Use the Pill Identifier</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Enter Details</h3>
                <p className="text-gray-600 text-sm">Enter the imprint, select the shape and color of your pill</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Search Results</h3>
                <p className="text-gray-600 text-sm">Review the list of possible matches for your pill</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Get Information</h3>
                <p className="text-gray-600 text-sm">Access detailed information about the identified medication</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
