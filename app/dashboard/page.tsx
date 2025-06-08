"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bell, CheckCircle, List, User, Settings, ClipboardList, Users, CreditCard } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Overview", icon: List },
  { label: "Account Details", icon: Settings },
  { label: "My Med List", icon: ClipboardList },
  { label: "Support Groups", icon: Users },
  { label: "Subscription", icon: CreditCard },
  { label: "Notifications", icon: Bell },
];

export default function DashboardPage() {
  const [selectedNav, setSelectedNav] = useState("Overview");

  const subscriptionPackages = [
    {
      name: "Basic",
      price: 1200,
      features: [
        "Drugs & Medications",
        "Pill Identifier",
        "Drug Interaction Checker",
        "Symptom Checker",
      ],
    },
    {
      name: "Plus",
      price: 2000,
      features: [
        "Drugs & Medications",
        "Pill Identifier",
        "Drug Interaction Checker",
        "Symptom Checker",
        "Side Effects",
        "Conditions & Diseases",
        "Treatment Guides",
        "Compare Drugs",
      ],
    },
    {
      name: "Premium",
      price: 3000,
      features: [
        "Drugs & Medications",
        "Pill Identifier",
        "Drug Interaction Checker",
        "Symptom Checker",
        "Side Effects",
        "Conditions & Diseases",
        "Treatment Guides",
        "Compare Drugs",
        "My Med List",
        "Discount Card",
        "FDA Alerts",
        "Price Guide",
        "Phonetic Search",
      ],
    },
  ];

  const allFeatures = [
    "Drugs & Medications",
    "Pill Identifier",
    "Drug Interaction Checker",
    "Symptom Checker",
    "Side Effects",
    "Conditions & Diseases",
    "Treatment Guides",
    "Compare Drugs",
    "My Med List",
    "Discount Card",
    "FDA Alerts",
    "Price Guide",
    "Phonetic Search",
  ];

  const handleSubscribe = async (pkg) => {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: pkg.price,
        email: 'user@example.com', // TODO: Replace with actual user email
        packageName: pkg.name,
      }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Payment initialization failed: ' + (data.error || 'Unknown error'));
    }
  };

  return (
    <>
      <Header />
      <main className="bg-teal-50 min-h-[80vh] py-10">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-white rounded-xl shadow p-6 flex flex-col items-center mb-6 md:mb-0">
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                <User className="h-8 w-8 text-teal-600" />
              </div>
              <span className="font-semibold text-lg text-gray-800">Welcome back</span>
              <span className="text-gray-500 text-sm">User</span>
            </div>
            <nav className="w-full flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg text-gray-700 hover:bg-teal-50 transition font-medium focus:outline-none ${selectedNav === item.label ? 'bg-teal-100 font-bold' : ''}`}
                  onClick={() => setSelectedNav(item.label)}
                >
                  <item.icon className="h-5 w-5 text-teal-400" />
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <section className="flex-1 flex flex-col gap-8">
            {selectedNav === "Subscription" ? (
              <div className="bg-white rounded-xl shadow p-8">
                <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">Choose Your Subscription</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {subscriptionPackages.map((pkg) => (
                    <div key={pkg.name} className="border rounded-xl shadow p-6 flex flex-col items-center bg-teal-50">
                      <div className="text-xl font-bold mb-2 text-teal-700">{pkg.name}</div>
                      <div className="text-3xl font-extrabold text-orange-500 mb-4">{pkg.price} ETB</div>
                      <ul className="flex-1 w-full mb-4">
                        {allFeatures.map((feature) => (
                          <li key={feature} className={`py-1 flex items-center gap-2 ${pkg.features.includes(feature) ? 'text-teal-700 font-semibold' : 'text-gray-400 line-through'}`}>
                            {pkg.features.includes(feature) ? '✔' : '✖'} {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg shadow mt-2" onClick={() => handleSubscribe(pkg)}>Select</button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {/* Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-1">Total Saved Medications</div>
                      <div className="text-gray-500 text-sm mb-4">Medications in your list</div>
                      <div className="text-4xl font-extrabold text-teal-600">8</div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <List className="h-8 w-8 text-teal-200" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-1">Tracked Conditions</div>
                      <div className="text-gray-500 text-sm mb-4">Health conditions you monitor</div>
                      <div className="text-4xl font-extrabold text-teal-600">3</div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <CheckCircle className="h-8 w-8 text-teal-200" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-1">Subscription Status</div>
                      <div className="text-gray-500 text-sm mb-4">Your current plan</div>
                      <div className="text-2xl font-bold text-orange-500">Free Plan</div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded-lg shadow" onClick={() => setSelectedNav("Subscription")}>Upgrade</button>
                    </div>
                  </div>
                </div>

                {/* Activity and Reminders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Recent Activity */}
                  <div className="bg-white rounded-xl shadow p-6 flex flex-col">
                    <div className="text-xl font-bold text-gray-800 mb-2">Recent Activity</div>
                    <div className="text-gray-500 text-sm mb-4">Your latest interactions</div>
                    <div className="flex flex-col gap-3">
                      <div className="bg-teal-50 rounded-lg p-3 flex flex-col">
                        <span className="font-semibold text-teal-700">Added medication to list</span>
                        <span className="text-gray-700">Lisinopril 10mg</span>
                        <span className="text-xs text-gray-400">Today, 10:45 AM</span>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-3 flex flex-col">
                        <span className="font-semibold text-teal-700">Added new condition</span>
                        <span className="text-gray-700">Hypertension</span>
                        <span className="text-xs text-gray-400">Yesterday, 3:20 PM</span>
                      </div>
                    </div>
                  </div>
                  {/* Medication Reminders */}
                  <div className="bg-white rounded-xl shadow p-6 flex flex-col">
                    <div className="text-xl font-bold text-gray-800 mb-2">Medication Reminders</div>
                    <div className="text-gray-500 text-sm mb-4">Upcoming medication schedule</div>
                    <div className="flex flex-col gap-3">
                      <div className="bg-teal-50 rounded-lg p-3 flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-teal-700">Lisinopril 10mg</span>
                          <div className="text-xs text-gray-500">1 tablet</div>
                        </div>
                        <span className="text-gray-700 font-semibold">8:00 PM</span>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-3 flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-teal-700">Metformin 500mg</span>
                          <div className="text-xs text-gray-500">1 tablet with food</div>
                        </div>
                        <span className="text-gray-700 font-semibold">9:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
} 