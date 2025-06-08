import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

const translations = {
  EN: {
    why: "Why SenayMed",
    features: "Features",
    how: "How It Works",
    drug: "Drug Search",
    getStarted: "Get Started",
  },
  AM: {
    why: "ለምን ሰናይሜድ",
    features: "ባህሪያት",
    how: "እንዴት እንደሚሰራ",
    drug: "የመድሃኒት ፍለጋ",
    getStarted: "ጀምር",
  },
};

const flagMap = {
  EN: "https://flagcdn.com/us.svg",
  AM: "https://flagcdn.com/et.svg",
};

export default function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-teal-500 to-teal-400">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/senaymed.png"
              alt="SenayMed Logo"
              width={375}
              height={100}
              className="h-24 w-auto"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#why" className="text-sm font-medium text-white hover:text-teal-200 transition-colors">
            Why SenayMed?
          </a>
          <a href="#features" className="text-sm font-medium text-white hover:text-teal-200 transition-colors">
            What You Can Do
          </a>
          <a href="#drug-search" className="text-sm font-medium text-white hover:text-teal-200 transition-colors">
            Find Drugs & Conditions
          </a>
          <a href="#symptom-checker" className="text-sm font-medium text-white hover:text-teal-200 transition-colors">
            Symptom Checker
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-white hover:text-teal-200 transition-colors">
            How It Works
          </a>
          <a href="#mobile-app" className="text-sm font-medium text-white hover:text-teal-200 transition-colors">
            SenayMed Mobile App
          </a>
          <div className="flex items-center gap-2 border rounded-md px-2 py-1 cursor-pointer select-none">
            <button
              onClick={() => setLang('EN')}
              className={`bg-transparent border-none outline-none cursor-pointer flex items-center transition-opacity ${lang === 'EN' ? 'opacity-100' : 'opacity-50'}`}
              aria-label="Switch to English"
            >
              <img src={flagMap.EN} alt="English" width={32} height={20} style={{ borderRadius: 4 }} />
            </button>
            <button
              onClick={() => setLang('AM')}
              className={`bg-transparent border-none outline-none cursor-pointer flex items-center transition-opacity ${lang === 'AM' ? 'opacity-100' : 'opacity-50'}`}
              aria-label="Switch to Amharic"
            >
              <img src={flagMap.AM} alt="Amharic" width={32} height={20} style={{ borderRadius: 4 }} />
            </button>
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            {t.getStarted}
          </Button>
          <Button variant="outline" className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
} 