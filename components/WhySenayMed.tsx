import { Search, Languages, FileText, Wifi } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const whyTranslations = {
  EN: {
    title: "Why SenayMed?",
    desc: "We're addressing critical gaps in Ethiopia's healthcare information ecosystem to make quality health knowledge accessible to all.",
    items: [
      {
        title: "Limited access to accurate health info",
        desc: "Most Ethiopians can't easily access reliable medical information, especially in rural areas.",
      },
      {
        title: "Lack of local language support",
        desc: "Health information is rarely available in local Ethiopian languages, creating barriers to understanding.",
      },
      {
        title: "No integration of traditional medicine",
        desc: "Existing solutions ignore Ethiopia's rich tradition of natural and herbal remedies.",
      },
      {
        title: "Offline access challenges",
        desc: "Many regions have limited connectivity, making it difficult to access online health resources.",
      },
    ],
  },
  AM: {
    title: "ለምን ሰናይሜድ?",
    desc: "በኢትዮጵያ የጤና መረጃ ስርዓት ውስጥ ያሉ አስፈላጊ ክፍተቶችን በመሙላት የጥራት ያለው የጤና እውቀት ለሁሉም እንዲደርስ እንሠራለን።",
    items: [
      {
        title: "ትክክለኛ የጤና መረጃ አግኝት የተገደበበት",
        desc: "ብዙ ኢትዮጵያውያን ታመና የሆነ የሕክምና መረጃ በቀላሉ ማግኘት አይችሉም፣ በተለይም በገጠር አካባቢዎች።",
      },
      {
        title: "የአካባቢ ቋንቋ ድጋፍ አለመኖሩ",
        desc: "የጤና መረጃ በአካባቢ ቋንቋዎች በብዛት አይገኝም፣ ይህም ለመረዳት እንደ መከላከያ ይሆናል።",
      },
      {
        title: "የባህላዊ ሕክምና አስተዳደር አለመኖሩ",
        desc: "አሁን ያሉ መፍትሄዎች የኢትዮጵያን ባህላዊ የተፈጥሮ እና የአትክልት መድሃኒቶችን ይችላሉ።",
      },
      {
        title: "የኦፍላይን መዳረሻ ችግሮች",
        desc: "ብዙ አካባቢዎች የኢንተርኔት ግንኙነት የተገደበበት ስለሆነ የመረጃ ምንጮችን ማግኘት አይቻልም።",
      },
    ],
  },
};

export function WhySenayMed() {
  const { lang } = useLanguage();
  const t = whyTranslations[lang];
  const icons = [Search, Languages, FileText, Wifi];
  return (
    <section id="why" className="bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
            {t.desc}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
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