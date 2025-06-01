"use client"
import { useState, useRef } from "react";
import { FileText } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const GEMINI_API_KEY = "AIzaSyBiAMU5QckFhp4eBPbCcFB2HeOyAW6iXok";
const DEEPSEEK_API_KEY = "sk-7c6a8a160ab646be9e19793ba72812f4";

// New SymptomVisual component
function SymptomVisual({ gender }: { gender: string }) {
  if (gender === "male") {
    return (
      <Image
        src="https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/symptom_checker_beta/assets/front-m.png"
        alt="Male anatomy"
        fill
        className="object-contain rounded-xl"
        priority
      />
    );
  } else if (gender === "female") {
    return (
      <Image
        src="https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/symptom_checker_beta/assets/front-f.png"
        alt="Female anatomy"
        fill
        className="object-contain rounded-xl"
        priority
      />
    );
  }
  return (
    <video
      className="w-full h-full object-contain rounded-xl"
      src="/155.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}

export function SymptomChecker() {
  const [gender, setGender] = useState<string>("");
  const [symptomInput, setSymptomInput] = useState("");
  const [symptomSuggestions, setSymptomSuggestions] = useState<string[]>([]);
  const [addedSymptoms, setAddedSymptoms] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("info");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [conditions, setConditions] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [conditionDetails, setConditionDetails] = useState<string>("");
  const [conditionTreatment, setConditionTreatment] = useState<string>("");
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function fetchSymptomSuggestions(query: string) {
    if (!query.trim()) {
      setSymptomSuggestions([]);
      return;
    }
    const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: `Suggest 5 symptoms similar to: ${query}. Only return a comma-separated list.` }],
      }),
    });
    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content || "";
    setSymptomSuggestions(text.split(",").map((s: string) => s.trim()).filter(Boolean));
  }

  function addSymptom(symptom: string) {
    if (symptom && !addedSymptoms.includes(symptom)) {
      setAddedSymptoms([...addedSymptoms, symptom]);
    }
    setSymptomInput("");
    setSymptomSuggestions([]);
    inputRef.current?.focus();
  }

  function removeSymptom(symptom: string) {
    setAddedSymptoms(addedSymptoms.filter(s => s !== symptom));
  }

  async function fetchConditions() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [{ role: "user", content: `Given these symptoms: ${addedSymptoms.join(", ")}, list 5 possible medical conditions. Only return a comma-separated list.` }],
        }),
      });
      const data = await res.json();
      const text = data?.choices?.[0]?.message?.content || "";
      setConditions(text.split(",").map((s: string) => s.trim()).filter(Boolean));
    } catch (e) {
      setError("Failed to fetch conditions.");
    } finally {
      setLoading(false);
    }
  }

  async function fetchConditionDetails(condition: string) {
    setDetailsLoading(true);
    setDetailsError(null);
    setConditionDetails("");
    setConditionTreatment("");
    try {
      // Fetch details
      const resDetails = await fetch("https://api.deepseek.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [{ role: "user", content: `Give a detailed description about the medical condition: ${condition}.` }],
        }),
      });
      const dataDetails = await resDetails.json();
      setConditionDetails(dataDetails?.choices?.[0]?.message?.content || "No details found.");
      // Fetch treatment
      const resTreatment = await fetch("https://api.deepseek.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [{ role: "user", content: `List the treatments for the medical condition: ${condition}.` }],
        }),
      });
      const dataTreatment = await resTreatment.json();
      setConditionTreatment(dataTreatment?.choices?.[0]?.message?.content || "No treatment found.");
    } catch (e) {
      setDetailsError("Failed to fetch details or treatment.");
    } finally {
      setDetailsLoading(false);
    }
  }

  const handleContinue = () => {
    if (symptomInput.trim()) addSymptom(symptomInput.trim());
    setActiveTab("symptoms");
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "conditions" && addedSymptoms.length > 0) {
      fetchConditions();
    }
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Symptom Checker</h2>
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
            Identify possible conditions and treatments by checking your symptoms
          </p>
        </div>
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="border-b border-gray-200 mb-8">
              <div className="flex space-x-8">
                <button onClick={() => handleTabChange("info")} className={`px-0 py-3 text-sm font-medium ${activeTab === "info" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-400"}`}>INFO</button>
                <button onClick={() => handleTabChange("symptoms")} className={`px-0 py-3 text-sm font-medium ${activeTab === "symptoms" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-400"}`}>SYMPTOMS</button>
                <button onClick={() => handleTabChange("conditions")} className={`px-0 py-3 text-sm font-medium ${activeTab === "conditions" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-400"}`}>CONDITIONS</button>
                <button
                  onClick={() => { if (selectedCondition) handleTabChange("details"); }}
                  className={`px-0 py-3 text-sm font-medium ${activeTab === "details" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-400"}${!selectedCondition ? " opacity-50 cursor-not-allowed" : ""}`}
                  disabled={!selectedCondition}
                >
                  DETAILS
                </button>
                <button className="px-0 py-3 text-sm font-medium text-gray-400">TREATMENT</button>
              </div>
            </div>

            {activeTab === "info" && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                          <select className="w-full h-12 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white">
                            <option>Select</option>
                            <option>0-5 years</option>
                            <option>6-12 years</option>
                            <option>13-17 years</option>
                            <option>18-30 years</option>
                            <option>31-50 years</option>
                            <option>51-70 years</option>
                            <option>70+ years</option>
                          </select>
                        </div>
                        <div>
                          <div className="flex space-x-6">
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="male-symptom"
                                name="sex-symptom"
                                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                                checked={gender === "male"}
                                onChange={() => setGender("male")}
                              />
                              <label htmlFor="male-symptom" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer">
                                Male
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="female-symptom"
                                name="sex-symptom"
                                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                                checked={gender === "female"}
                                onChange={() => setGender("female")}
                              />
                              <label htmlFor="female-symptom" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer">
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">What are your symptoms?</h3>
                      <div className="relative">
                        <input
                          ref={inputRef}
                          type="text"
                          placeholder="Type"
                          value={symptomInput}
                          onChange={e => {
                            setSymptomInput(e.target.value);
                            fetchSymptomSuggestions(e.target.value);
                          }}
                          onKeyDown={e => {
                            if (e.key === "Enter" && symptomInput.trim()) {
                              addSymptom(symptomInput.trim());
                            }
                          }}
                          className="w-full h-12 pl-4 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                        {symptomSuggestions.length > 0 && (
                          <ul className="absolute z-10 left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg">
                            {symptomSuggestions.map((s, i) => (
                              <li
                                key={i}
                                className="px-4 py-2 hover:bg-teal-50 cursor-pointer"
                                onClick={() => addSymptom(s)}
                              >
                                {s}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {addedSymptoms.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {addedSymptoms.map((symptom, i) => (
                          <span key={i} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full flex items-center gap-2">
                            {symptom}
                            <button onClick={() => removeSymptom(symptom)} className="ml-1 text-xs text-red-500">×</button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center items-start">
                    <div className="relative w-full max-w-[400px] h-[600px] mt-[-100px]">
                      <SymptomVisual gender={gender} />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3"
                    onClick={handleContinue}
                    disabled={addedSymptoms.length === 0 && !symptomInput.trim()}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "symptoms" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Add More Symptoms</h3>
                <div className="relative mb-4">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type more symptoms"
                    value={symptomInput}
                    onChange={e => {
                      setSymptomInput(e.target.value);
                      fetchSymptomSuggestions(e.target.value);
                    }}
                    onKeyDown={e => {
                      if (e.key === "Enter" && symptomInput.trim()) {
                        addSymptom(symptomInput.trim());
                      }
                    }}
                    className="w-full h-12 pl-4 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  {symptomSuggestions.length > 0 && (
                    <ul className="absolute z-10 left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg">
                      {symptomSuggestions.map((s, i) => (
                        <li
                          key={i}
                          className="px-4 py-2 hover:bg-teal-50 cursor-pointer"
                          onClick={() => addSymptom(s)}
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {addedSymptoms.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {addedSymptoms.map((symptom, i) => (
                      <span key={i} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full flex items-center gap-2">
                        {symptom}
                        <button onClick={() => removeSymptom(symptom)} className="ml-1 text-xs text-red-500">×</button>
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex justify-end">
                  <Button
                    className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3"
                    onClick={() => handleTabChange("conditions")}
                    disabled={addedSymptoms.length === 0}
                  >
                    See Conditions
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "conditions" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Possible Conditions</h3>
                {loading && <div>Loading conditions...</div>}
                {error && <div className="text-red-500">{error}</div>}
                {conditions.length > 0 ? (
                  <ul className="list-disc pl-6">
                    {conditions.map((cond, i) => (
                      <li key={i}>
                        <button
                          className="text-teal-700 hover:underline cursor-pointer bg-transparent border-none p-0"
                          onClick={() => {
                            setSelectedCondition(cond);
                            setActiveTab("details");
                            fetchConditionDetails(cond);
                          }}
                        >
                          {cond}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : !loading && <div>No conditions found for the given symptoms.</div>}
              </div>
            )}

            {activeTab === "details" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{selectedCondition ? selectedCondition : "Condition Details"}</h3>
                {!selectedCondition && (
                  <div className="text-gray-500">Select a condition from the list to see details.</div>
                )}
                {detailsLoading && <div>Loading details...</div>}
                {detailsError && <div className="text-red-500">{detailsError}</div>}
                {!detailsLoading && !detailsError && selectedCondition && (
                  <>
                    <div className="mb-6 whitespace-pre-line">{conditionDetails}</div>
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold mb-2">Treatment</h4>
                      <div className="whitespace-pre-line">{conditionTreatment}</div>
                    </div>
                  </>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
} 