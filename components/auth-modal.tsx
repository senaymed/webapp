"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Mail, Lock, User, ArrowRight, Check, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation";

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialTab?: "login" | "register"
}

export function AuthModal({ isOpen, onClose, initialTab = "login" }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<"login" | "register">(initialTab)
  const [error, setError] = useState<string | null>(null)
  const [resendMessage, setResendMessage] = useState<string | null>(null)
  const [showForgot, setShowForgot] = useState(false)
  const [forgotEmail, setForgotEmail] = useState("")
  const [forgotMessage, setForgotMessage] = useState<string | null>(null)
  const [forgotLoading, setForgotLoading] = useState(false)
  const API_URL = "http://localhost:3000";
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const [checkingName, setCheckingName] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed");
      } else {
        localStorage.setItem("token", data.access_token);
        setError(null);
        onClose();
        router.push("/dashboard");
        // Optionally, trigger a user state update here
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Registration failed");
      } else {
        setError(data.message || "Registration successful. Please check your email to verify your account.");
        setActiveTab("login");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setResendMessage(null);
    try {
      const res = await fetch(`${API_URL}/auth/resend-verification`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setResendMessage(data.message || "If your email is registered and not verified, you will receive a verification email.");
    } catch (err) {
      setResendMessage("Network error. Please try again.");
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotLoading(true);
    setForgotMessage(null);
    try {
      const res = await fetch(`${API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await res.json();
      if (!res.ok) {
        setForgotMessage(data.message || "Failed to send reset email");
      } else {
        setForgotMessage("If your email is registered, you will receive a reset link.");
      }
    } catch (err) {
      setForgotMessage("Network error. Please try again.");
    } finally {
      setForgotLoading(false);
    }
  };

  // Real-time full name validation
  useEffect(() => {
    if (activeTab === "register" && name) {
      const isFullName = name.trim().split(" ").length >= 2;
      setNameError(isFullName ? null : "Please enter your full name (first and last)." );
      if (isFullName) {
        setCheckingName(true);
        fetch(`${API_URL}/auth/check-name?name=${encodeURIComponent(name)}`)
          .then(res => res.json())
          .then(data => setNameError(data.taken ? "Name is already taken." : null))
          .catch(() => setNameError(null))
          .finally(() => setCheckingName(false));
      }
    } else {
      setNameError(null);
    }
  }, [name, activeTab]);

  // Real-time email validation
  useEffect(() => {
    if (activeTab === "register" && email) {
      setCheckingEmail(true);
      fetch(`${API_URL}/auth/check-email?email=${encodeURIComponent(email)}`)
        .then(res => res.json())
        .then(data => setEmailError(data.taken ? "Email is already registered." : null))
        .catch(() => setEmailError(null))
        .finally(() => setCheckingEmail(false));
    } else {
      setEmailError(null);
    }
  }, [email, activeTab]);

  // Password strength meter
  useEffect(() => {
    if (activeTab === "register" && password) {
      let score = 0;
      if (password.length >= 8) score++;
      if (/[A-Z]/.test(password)) score++;
      if (/[0-9]/.test(password)) score++;
      if (/[^A-Za-z0-9]/.test(password)) score++;
      setPasswordStrength(score);
    } else {
      setPasswordStrength(0);
    }
  }, [password, activeTab]);

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-4">
            <User className="h-8 w-8 text-teal-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome to SenayMed</h2>
          <p className="text-gray-600 mt-1">Your healthcare companion in Ethiopia</p>
        </div>

        <Tabs defaultValue="login" value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "register")} className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="login" className="text-base">
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="text-base">
              Register
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-0">
            <form onSubmit={handleLogin} className="space-y-4">
              {error && activeTab === "login" && (
                <>
                  <div className="text-red-500 text-sm text-center">{error}</div>
                  {error === "Please verify your email before logging in" && (
                    <div className="text-center mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={handleResendVerification}
                        disabled={isLoading}
                      >
                        Resend verification email
                      </Button>
                      {resendMessage && (
                        <div className="text-teal-600 text-xs mt-2">{resendMessage}</div>
                      )}
                    </div>
                  )}
                </>
              )}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-sm text-teal-600 hover:underline focus:outline-none"
                      onClick={() => setShowForgot(true)}
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10"
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
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white h-11"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span className="ml-2">Logging in...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <span>Login</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                )}
              </Button>

              <p className="text-center text-sm text-gray-600 mt-6">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("register")}
                  className="text-teal-600 hover:text-teal-500 font-medium"
                >
                  Register now
                </button>
              </p>
            </form>
          </TabsContent>

          <TabsContent value="register" className="mt-0">
            <form onSubmit={handleRegister} className="space-y-4">
              {error && activeTab === "register" && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="pl-10"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                {nameError && <div className="text-xs text-red-500 mt-1">{nameError}</div>}
                {checkingName && <div className="text-xs text-gray-400 mt-1">Checking name...</div>}
              </div>

              <div className="space-y-2">
                <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {emailError && <div className="text-xs text-red-500 mt-1">{emailError}</div>}
                {checkingEmail && <div className="text-xs text-gray-400 mt-1">Checking email...</div>}
              </div>

              <div className="space-y-2">
                <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="register-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10"
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
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`h-2 w-24 rounded bg-gray-200 overflow-hidden relative`}>
                    <div
                      className={`h-2 rounded transition-all duration-300 ${
                        passwordStrength === 0 ? "bg-gray-200 w-0" :
                        passwordStrength === 1 ? "bg-red-400 w-1/4" :
                        passwordStrength === 2 ? "bg-yellow-400 w-2/4" :
                        passwordStrength === 3 ? "bg-blue-400 w-3/4" :
                        "bg-green-500 w-full"
                      }`}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">
                    {passwordStrength === 0 ? "" :
                      passwordStrength === 1 ? "Weak" :
                      passwordStrength === 2 ? "Fair" :
                      passwordStrength === 3 ? "Good" :
                      "Strong"}
                  </span>
                </div>
                <p className="text-xs text-gray-500">Password must be at least 8 characters long</p>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-teal-600 hover:text-teal-500">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-teal-600 hover:text-teal-500">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white h-11"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span className="ml-2">Creating account...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <span>Create Account</span>
                    <Check className="ml-2 h-5 w-5" />
                  </div>
                )}
              </Button>

              <p className="text-center text-sm text-gray-600 mt-6">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className="text-teal-600 hover:text-teal-500 font-medium"
                >
                  Login instead
                </button>
              </p>
            </form>
          </TabsContent>
        </Tabs>

        {showForgot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-scale-in">
              <button
                onClick={() => setShowForgot(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <h2 className="text-xl font-bold mb-4 text-center">Forgot Password</h2>
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input
                    id="forgot-email"
                    type="email"
                    placeholder="your@email.com"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white h-11" disabled={forgotLoading}>
                  {forgotLoading ? "Sending..." : "Send Reset Link"}
                </Button>
                {forgotMessage && <div className="text-center text-sm text-teal-600 mt-2">{forgotMessage}</div>}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
