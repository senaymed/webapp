export function HowItWorks() {
  return (
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
  );
} 