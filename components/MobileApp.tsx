import Image from "next/image";

export function MobileApp() {
  return (
    <section id="mobile-app" className="bg-gradient-to-r from-teal-500 to-teal-400 py-16 md:py-24 text-white">
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
                src="https://www.drugs.com/img/v-20240725/apps/apple-store.png"
                alt="Download on the App Store"
                width={160}
                height={53}
                className="h-12 w-auto"
              />
              <Image
                src="https://www.drugs.com/img/v-20240725/apps/google-play.png"
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
                  src="https://cdn.gamma.app/gzk3vhgy5jmazs3/generated-images/4r5JHsDDCU8uJbCuQQPH6.jpg"
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
  );
} 