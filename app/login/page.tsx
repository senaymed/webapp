"use client";
import { useRouter } from "next/navigation";
import { AuthModal } from "@/components/auth-modal";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      router.push("/");
    }
  }, [open, router]);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="w-full max-w-md mx-auto">
          <AuthModal isOpen={true} onClose={() => {}} />
        </div>
      </main>
      <Footer />
    </>
  );
} 