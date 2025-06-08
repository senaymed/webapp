"use client";
import { useRouter } from "next/navigation";
import { AuthModal } from "@/components/auth-modal";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SignupPage() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      router.push("/");
    }
  }, [open, router]);

  // Optionally, you can add a prop to AuthModal to set the initial tab to register
  // If not supported, it will default to login, but user can switch
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="w-full max-w-md mx-auto">
          <AuthModal isOpen={open} onClose={() => setOpen(false)} initialTab="register" />
        </div>
      </main>
      <Footer />
    </>
  );
} 