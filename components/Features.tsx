import { Search, Activity, FileText, MapPin, Wifi, Calendar } from "lucide-react";

export function Features() {
  return (
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
  );
} 