"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function DrugsByLetterPage() {
  const { letter } = useParams();
  const [drugs, setDrugs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [selectedDrug, setSelectedDrug] = useState<string | null>(null);
  const [drugDetail, setDrugDetail] = useState<any>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState<string | null>(null);
  const API_URL = "http://localhost:3000";

  useEffect(() => {
    if (letter) {
      fetchDrugs(letter as string, 1);
      setPage(1);
    }
    // eslint-disable-next-line
  }, [letter]);

  const fetchDrugs = async (ltr: string, pageNum: number = 1) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/drugs?startsWith=${ltr}&page=${pageNum}&limit=${limit}`);
      const data = await res.json();
      console.log('API response:', data);
      if (!res.ok) {
        setError(data.message || "Failed to fetch drugs");
        setDrugs([]);
        setTotal(0);
      } else {
        setDrugs(data.drugs);
        setTotal(data.total);
      }
    } catch (err) {
      setError("Network error. Please try again.");
      setDrugs([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (letter) {
      setPage(newPage);
      fetchDrugs(letter as string, newPage);
    }
  };

  const handleDrugClick = async (drug: string) => {
    setSelectedDrug(drug);
    setShowModal(true);
    setDrugDetail(null);
    setDetailError(null);
    setDetailLoading(true);
    try {
      const res = await fetch(`${API_URL}/drugs/detail?name=${encodeURIComponent(drug)}`);
      const data = await res.json();
      if (!res.ok) {
        setDetailError(data.message || "Failed to fetch drug details");
      } else {
        setDrugDetail(data);
      }
    } catch (err) {
      setDetailError("Network error. Please try again.");
    } finally {
      setDetailLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-white min-h-[80vh]">
        <div className="container px-4 md:px-6">
          <div className="mb-8 flex flex-col md:flex-row items-center gap-4 justify-between">
            <h2 className="text-4xl font-extrabold text-teal-700 drop-shadow-sm">
              Browse Drugs: <span className="text-teal-500">'{letter}'</span>
            </h2>
            <span className="text-lg text-gray-500">{total} drugs found</span>
          </div>
          <div className="bg-white/80 rounded-xl shadow-lg border p-8">
            {loading && <div className="text-center text-teal-400 font-semibold animate-pulse">Loading drugs...</div>}
            {error && <div className="text-center text-red-500 font-semibold">{error}</div>}
            {!loading && !error && (drugs?.length ?? 0) === 0 && (
              <div className="text-center text-gray-500">No drugs found for {letter}.</div>
            )}
            {(drugs?.length ?? 0) > 0 && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {drugs.map((drug) => (
                    <Card
                      key={drug}
                      className="cursor-pointer hover:shadow-xl transition-shadow border-teal-100 hover:border-teal-400 bg-gradient-to-br from-white to-teal-50"
                      onClick={() => handleDrugClick(drug)}
                    >
                      <CardContent className="p-6 flex flex-col items-center justify-center">
                        <span className="text-lg font-bold text-teal-700 text-center mb-2 truncate w-full" title={drug}>{drug}</span>
                        <span className="text-xs text-gray-400">Click for details</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-2 mt-8">
                  <button
                    className="px-4 py-2 rounded border bg-teal-100 text-teal-700 font-semibold hover:bg-teal-200 disabled:opacity-50"
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                  >
                    Previous
                  </button>
                  <span className="text-teal-700 font-medium">Page {page} of {Math.ceil(total / limit)}</span>
                  <button
                    className="px-4 py-2 rounded border bg-teal-100 text-teal-700 font-semibold hover:bg-teal-200 disabled:opacity-50"
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page >= Math.ceil(total / limit)}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Drug Detail Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full relative border-2 border-teal-200 animate-fade-in">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-teal-600 text-3xl font-bold"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-extrabold text-teal-700 mb-4 text-center drop-shadow">{selectedDrug}</h2>
              {detailLoading && <div className="text-center text-teal-400 font-semibold animate-pulse">Loading...</div>}
              {detailError && <div className="text-center text-red-500 font-semibold">{detailError}</div>}
              {drugDetail && (
                <div className="text-left text-base space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                  {drugDetail.description && <div><span className="font-semibold text-teal-600">Description:</span> <span className="text-gray-700">{drugDetail.description}</span></div>}
                  {drugDetail.indications_and_usage && <div><span className="font-semibold text-teal-600">Indications & Usage:</span> <span className="text-gray-700">{drugDetail.indications_and_usage}</span></div>}
                  {drugDetail.purpose && <div><span className="font-semibold text-teal-600">Purpose:</span> <span className="text-gray-700">{drugDetail.purpose}</span></div>}
                  {drugDetail.warnings && <div><span className="font-semibold text-teal-600">Warnings:</span> <span className="text-gray-700">{drugDetail.warnings}</span></div>}
                  {drugDetail.dosage_and_administration && <div><span className="font-semibold text-teal-600">Dosage & Administration:</span> <span className="text-gray-700">{drugDetail.dosage_and_administration}</span></div>}
                  {drugDetail.adverse_reactions && <div><span className="font-semibold text-teal-600">Adverse Reactions:</span> <span className="text-gray-700">{drugDetail.adverse_reactions}</span></div>}
                  {drugDetail.contraindications && <div><span className="font-semibold text-teal-600">Contraindications:</span> <span className="text-gray-700">{drugDetail.contraindications}</span></div>}
                  {drugDetail.active_ingredient && <div><span className="font-semibold text-teal-600">Active Ingredient:</span> <span className="text-gray-700">{drugDetail.active_ingredient}</span></div>}
                  {drugDetail.inactive_ingredient && <div><span className="font-semibold text-teal-600">Inactive Ingredient:</span> <span className="text-gray-700">{drugDetail.inactive_ingredient}</span></div>}
                  {drugDetail.precautions && <div><span className="font-semibold text-teal-600">Precautions:</span> <span className="text-gray-700">{drugDetail.precautions}</span></div>}
                  {drugDetail.drug_interactions && <div><span className="font-semibold text-teal-600">Drug Interactions:</span> <span className="text-gray-700">{drugDetail.drug_interactions}</span></div>}
                  {drugDetail.overdosage && <div><span className="font-semibold text-teal-600">Overdosage:</span> <span className="text-gray-700">{drugDetail.overdosage}</span></div>}
                  {drugDetail.how_supplied && <div><span className="font-semibold text-teal-600">How Supplied:</span> <span className="text-gray-700">{drugDetail.how_supplied}</span></div>}
                  {drugDetail.storage_and_handling && <div><span className="font-semibold text-teal-600">Storage & Handling:</span> <span className="text-gray-700">{drugDetail.storage_and_handling}</span></div>}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
} 