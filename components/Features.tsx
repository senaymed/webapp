import { Search, Activity, FileText, MapPin, Wifi, Calendar } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const featuresTranslations = {
  EN: {
    title: "What You Can Do",
    desc: "SenayMed puts comprehensive health information at your fingertips, in your language and context.",
    items: [
      {
        title: "Drug Lookup",
        desc: "Search medications in Amharic, English, or Oromo. Get detailed information about dosage, side effects, and availability.",
      },
      {
        title: "AI-Powered Disease Info",
        desc: "Get reliable information about symptoms, conditions, and treatments through our AI assistant.",
      },
      {
        title: "Traditional Medicine Library",
        desc: "Access Ethiopia's rich heritage of traditional remedies and herbal treatments documented by experts.",
      },
      {
        title: "Hospital & Clinic Directory",
        desc: "Find healthcare facilities near you with information on services, hours, and contact details.",
      },
      {
        title: "Offline Access",
        desc: "Use the app without internet connection - perfect for rural areas with limited connectivity.",
      },
      {
        title: "Prescription Reminders",
        desc: "Never miss a dose with customizable medication reminders and schedules.",
      },
    ],
  },
  AM: {
    title: "የሚችሉት ነገሮች",
    desc: "ሰናይሜድ የጤና መረጃን በቀላሉ፣ በቋንቋዎ እና በአካባቢዎ ያቀርባል።",
    items: [
      {
        title: "የመድሃኒት ፍለጋ",
        desc: "መድሃኒቶችን በአማርኛ፣ በእንግሊዝኛ ወይም በኦሮምኛ ይፈልጉ። ስለ መጠን፣ የጎን አደጋዎች እና አገኝነት ዝርዝር መረጃ ያግኙ።",
      },
      {
        title: "በAI የተደገፈ የበሽታ መረጃ",
        desc: "ስለ ምልክቶች፣ ሁኔታዎች እና ሕክምናዎች የታመነ መረጃ ያግኙ።",
      },
      {
        title: "የባህላዊ ሕክምና ላይብረሪ",
        desc: "የኢትዮጵያን ባህላዊ የተፈጥሮ መድሃኒቶችን እና የአትክልት ሕክምናን የተሟላ ዝርዝር ያግኙ።",
      },
      {
        title: "የሆስፒታል እና ክሊኒክ ዝርዝር",
        desc: "በአካባቢዎ ያሉ የጤና ተቋማትን ያግኙ፣ ስለ አገልግሎቶች፣ ሰዓታት እና አድራሻዎች መረጃ ያግኙ።",
      },
      {
        title: "ኦፍላይን መዳረሻ",
        desc: "መተግበሪያውን ያንኩ ከኢንተርኔት ሳይጠቀሙ፣ በተለይም በገጠር አካባቢዎች።",
      },
      {
        title: "የመድሃኒት አስታዋሽ አሰጣጥ",
        desc: "የመድሃኒት መውሰድ እንዳትረሱ በተሟላ ሁኔታ የሚታወቀውን አስታዋሽ ያዘጋጁ።",
      },
    ],
  },
};

export function Features() {
  const { lang } = useLanguage();
  const t = featuresTranslations[lang];
  const icons = [Search, Activity, FileText, MapPin, Wifi, Calendar];
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
            {t.desc}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 