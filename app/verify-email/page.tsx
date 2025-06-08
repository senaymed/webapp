"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle } from "lucide-react";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<"pending" | "success" | "error">("pending");
  const [message, setMessage] = useState("");
  const token = searchParams.get("token");
  const API_URL = "http://localhost:3000";

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("No verification token provided.");
      return;
    }
    const verify = async () => {
      try {
        const res = await fetch(`${API_URL}/auth/verify-email/${token}`);
        const data = await res.json();
        if (res.ok) {
          setStatus("success");
          setMessage(data.message || "Email verified successfully. You can now login.");
        } else {
          setStatus("error");
          setMessage(data.message || "Verification failed. The token may be invalid or expired.");
        }
      } catch (err) {
        setStatus("error");
        setMessage("Network error. Please try again.");
      }
    };
    verify();
  }, [token]);

  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
          {status === "pending" && (
            <div className="text-teal-600 font-semibold animate-pulse">Verifying your email...</div>
          )}
          {status === "success" && (
            <>
              <CheckCircle className="h-16 w-16 text-teal-500 mb-4" />
              <h2 className="text-2xl font-bold text-teal-700 mb-2">Email Verified!</h2>
              <p className="text-gray-700 mb-6 text-center">{message}</p>
              <Link href="#" onClick={() => router.push("/login")}
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
                Go to Login
              </Link>
            </>
          )}
          {status === "error" && (
            <>
              <XCircle className="h-16 w-16 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold text-red-600 mb-2">Verification Failed</h2>
              <p className="text-gray-700 mb-6 text-center">{message}</p>
              <Link href="#" onClick={() => router.push("/login")}
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
                Go to Login
              </Link>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
} 