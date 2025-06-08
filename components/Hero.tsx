import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/components/LanguageContext";

const heroTranslations = {
  EN: {
    title: "Empowering Health Access in Ethiopia",
    desc: "Search for drugs, explore traditional medicine, find hospitals, and get AI-powered health info — all in your language, online or offline.",
    login: "Login",
    signup: "Sign Up",
  },
  AM: {
    title: "የጤና መዳበሪያ እና መዳን በኢትዮጵያ",
    desc: "መድሃኒቶችን ፈልጉ፣ ባህላዊ ሕክምናን ያስሱ፣ ሆስፒታሎችን ያግኙ፣ እና በአይነት ቋንቋዎ የተዘጋጀ የAI የጤና መረጃ ያግኙ።",
    login: "ግባ",
    signup: "ይመዝገቡ",
  }
};

export function Hero() {
  const { lang } = useLanguage();
  const t = heroTranslations[lang];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-teal-400"
    >
      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center gap-10 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col gap-5 lg:gap-7 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
            {t.title}
          </h1>
          <p className="text-white md:text-xl max-w-[650px]">
            {t.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <Button
              className="bg-teal-500 hover:bg-teal-600 text-white h-12 px-7 text-base font-semibold shadow-md"
            >
              <Link href="/login">{t.login}</Link>
            </Button>
            <Button
              className="bg-teal-500 hover:bg-teal-600 text-white h-12 px-7 text-base font-semibold shadow-md"
            >
              <Link href="/signup">{t.signup}</Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative flex items-center justify-center">
          {/* Video as a design element */}
          <div className="relative w-[550px] h-[275px] md:w-[700px] md:h-[350px] rounded-full shadow-xl overflow-hidden border-6 border-white">
            <div className="absolute inset-0 w-full h-full rounded-full" style={{ background: '#029A68', zIndex: 0 }} />
            <video
              className="w-full h-full object-cover relative z-10 rounded-full"
              src="/medicalpil.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
} 