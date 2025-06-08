"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<"form" | "pending" | "success" | "error">("form");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = searchParams.get("token");
  const API_URL = "http://localhost:3000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || password.length < 8) {
      setMessage("Password must be at least 8 characters long.");
      setStatus("error");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setStatus("error");
      return;
    }
    if (!token) {
      setMessage("No reset token provided.");
      setStatus("error");
      return;
    }
    setLoading(true);
    setStatus("pending");
    try {
      const res = await fetch(`${API_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword: password }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Password reset successfully. You can now login.");
      } else {
        setStatus("error");
        setMessage(data.message || "Reset failed. The token may be invalid or expired.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
          {status === "form" && (
            <>
              <Lock className="h-16 w-16 text-teal-500 mb-4" />
              <h2 className="text-2xl font-bold text-teal-700 mb-2">Reset Password</h2>
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      className="pr-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <Lock className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long.</p>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                {status === "error" && message && (
                  <div className="text-center text-red-500 text-sm">{message}</div>
                )}
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white h-11" disabled={loading}>
                  {loading ? "Resetting..." : "Reset Password"}
                </Button>
              </form>
            </>
          )}
          {status === "pending" && (
            <div className="text-teal-600 font-semibold animate-pulse">Resetting your password...</div>
          )}
          {status === "success" && (
            <>
              <CheckCircle className="h-16 w-16 text-teal-500 mb-4" />
              <h2 className="text-2xl font-bold text-teal-700 mb-2">Password Reset!</h2>
              <p className="text-gray-700 mb-6 text-center">{message}</p>
              <Link href="/login"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
                Go to Login
              </Link>
            </>
          )}
          {status === "error" && status !== "form" && (
            <>
              <XCircle className="h-16 w-16 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold text-red-600 mb-2">Reset Failed</h2>
              <p className="text-gray-700 mb-6 text-center">{message}</p>
              <Link href="/login"
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