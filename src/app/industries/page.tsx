'use client'

import { Card } from "@heroui/react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const MOCK_INDUSTRIES = [
    {
        slug: "financial-services",
        name: "Financial Services",
        overview: "Secure, compliant, and customer-centric financial solutions built on Salesforce Financial Services Cloud.",
    },
    {
        slug: "retail",
        name: "Retail & Consumer Goods",
        overview: "Unified commerce experiences that drive customer loyalty and operational efficiency.",
    },
    {
        slug: "manufacturing",
        name: "Manufacturing",
        overview: "Digital transformation solutions connecting sales, operations, and supply chain.",
    },
    {
        slug: "healthcare",
        name: "Healthcare",
        overview: "Patient-first digital healthcare solutions with secure data interoperability.",
    },
];

export default function IndustriesPage() {
    const [industries, setIndustries] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchIndustries() {
            const supabase = createClient();
            const { data } = await supabase.from("industries").select("*").order("created_at", { ascending: true });

            if (data && data.length > 0) {
                setIndustries(data);
            } else {
                setIndustries(MOCK_INDUSTRIES);
            }
            setLoading(false);
        }
        fetchIndustries();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-neutral-600">Loading industries...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white sm:text-5xl">
                        Industries We Serve
                    </h1>
                    <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        Tailored Salesforce solutions for your industry&apos;s unique challenges.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {industries.map((industry) => (
                        <Card key={industry.slug} className="overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                                    {industry.name}
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                                    {industry.overview}
                                </p>
                                <Link
                                    href={`/industries/${industry.slug}`}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium group"
                                >
                                    Explore Solutions
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
