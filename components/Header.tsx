import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import React, { useState } from "react";

export default function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-teal-500 to-teal-400">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=150"
            alt="SenayMed Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#why" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
            Why SenayMed
          </a>
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
            How It Works
          </a>
          <a href="#drug-search" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
            Drug Search
          </a>
          <div className="flex items-center gap-2 border rounded-md px-2 py-1">
            <Languages size={16} />
            <span className="text-sm font-medium">EN</span>
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white" onClick={() => setIsAuthModalOpen(true)}>
            Get Started
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