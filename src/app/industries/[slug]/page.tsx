import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
    params: {
        slug: string;
    };
}

const MOCK_DETAILS: Record<string, any> = {
    "financial-services": {
        name: "Financial Services",
        overview: "Secure, compliant, and customer-centric financial solutions.",
        challenges: "Legacy systems, regulatory compliance, and siloed customer data.",
        solutions: "We implement Financial Services Cloud to provide a 360-degree view of the customer, ensuring compliance and enabling personalized wealth management.",
    },
    "retail": {
        name: "Retail & Consumer Goods",
        overview: "Unified commerce for the modern shopper.",
        challenges: "Fragmented inventory data and inconsistent customer experiences across channels.",
        solutions: "By integrating Commerce Cloud with Marketing Cloud, we create seamless shopping journeys that drive loyalty and sales.",
    },
    "manufacturing": {
        name: "Manufacturing",
        overview: "Digital transformation for the factory floor and beyond.",
        challenges: "Supply chain visibility and disconnect between sales and operations.",
        solutions: "Sales and Service Cloud implementation to align sales forecasts with production capacity.",
    },
    "healthcare": {
        name: "Healthcare",
        overview: "Patient-first digital healthcare.",
        challenges: "Patient engagement and data interoperability (HL7/FHIR).",
        solutions: "Health Cloud implementation to manage patient relationships and MuleSoft for secure clinical data exchange.",
    }
};

export default async function IndustryDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const supabase = await createClient();
    const { data: industry } = await supabase
        .from("industries")
        .select("*")
        .eq("slug", slug)
        .single();

    const data = industry || MOCK_DETAILS[slug];

    if (!data) {
        notFound();
    }

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen">
            {/* Hero for Industry */}
            <div className="bg-neutral-900 text-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Industry Focus</span>
                    <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">{data.name}</h1>
                    <p className="mt-6 text-xl text-neutral-300 max-w-3xl">{data.overview}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                            <span className="text-red-500">⚠</span> The Challenge
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300">
                            {data.challenges}
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-900">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                            <span className="text-green-500">✓</span> Our Solution
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300">
                            {data.solutions}
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-8">Transform your {data.name} Business</h2>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-medium text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 h-12 px-10 transition-colors">
                        Schedule a Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
}
