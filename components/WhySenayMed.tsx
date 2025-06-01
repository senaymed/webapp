import { Search, Languages, FileText, Wifi } from "lucide-react";

export function WhySenayMed() {
  return (
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
  );
} 