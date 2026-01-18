'use client'

import { Card } from "@heroui/react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const MOCK_CASE_STUDIES = [
    {
        slug: "financial-crm-transformation",
        title: "Financial Services CRM Transformation",
        client: "Leading Investment Bank",
        industry: "Financial Services",
        excerpt: "Streamlined wealth management operations with Salesforce Financial Services Cloud, resulting in 40% faster client onboarding.",
        image_url: null,
    },
    {
        slug: "retail-commerce-integration",
        title: "Omnichannel Retail Integration",
        client: "Global Retail Chain",
        industry: "Retail",
        excerpt: "Unified online and offline customer experiences using Commerce Cloud and MuleSoft, increasing sales by 35%.",
        image_url: null,
    },
    {
        slug: "manufacturing-ai-forecasting",
        title: "AI-Powered Sales Forecasting",
        client: "Manufacturing Leader",
        industry: "Manufacturing",
        excerpt: "Implemented Einstein AI for predictive analytics, improving forecast accuracy by 50%.",
        image_url: null,
    },
];

export default function CaseStudiesPage() {
    const [caseStudies, setCaseStudies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCaseStudies() {
            const supabase = createClient();
            const { data } = await supabase
                .from("case_studies")
                .select("*")
                .order("created_at", { ascending: false });

            if (data && data.length > 0) {
                setCaseStudies(data);
            } else {
                setCaseStudies(MOCK_CASE_STUDIES);
            }
            setLoading(false);
        }
        fetchCaseStudies();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-neutral-600">Loading case studies...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white sm:text-5xl">
                        Case Studies
                    </h1>
                    <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        Real-world success stories showcasing how we transform businesses with Salesforce.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {caseStudies.map((study) => (
                        <Card key={study.slug} className="overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                <div className="text-center text-white p-6">
                                    <p className="text-sm font-semibold uppercase tracking-wide">{study.industry}</p>
                                    <p className="text-3xl font-bold mt-2">Success</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                                    {study.client}
                                </p>
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                                    {study.title}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                                    {study.excerpt}
                                </p>
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium group"
                                >
                                    Read Full Story
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
