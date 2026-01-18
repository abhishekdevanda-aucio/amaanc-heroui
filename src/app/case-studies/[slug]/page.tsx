import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
    params: {
        slug: string;
    };
}

const MOCK_DETAILS: Record<string, any> = {
    "financial-crm-transformation": {
        title: "Financial Services CRM Transformation",
        client: "Leading Investment Bank",
        industry: "Financial Services",
        challenge: "The bank struggled with disconnected systems across wealth management, retail banking, and investment services. Client data was siloed, leading to fragmented customer experiences and compliance risks.",
        solution: "We implemented Salesforce Financial Services Cloud with custom Lightning components for wealth advisors. Integrated legacy systems via MuleSoft to create a unified client view. Deployed Einstein Analytics for portfolio insights.",
        results: [
            "40% reduction in client onboarding time",
            "95% advisor adoption rate within 3 months",
            "Real-time compliance tracking across all touchpoints",
            "30% increase in cross-sell opportunities identified"
        ],
        technologies: ["Financial Services Cloud", "MuleSoft", "Einstein Analytics", "Lightning Web Components"]
    },
    "retail-commerce-integration": {
        title: "Omnichannel Retail Integration",
        client: "Global Retail Chain",
        industry: "Retail",
        challenge: "Disjointed online and offline experiences. Inventory visibility issues leading to stockouts and overstocking. Marketing campaigns not personalized.",
        solution: "Deployed Salesforce Commerce Cloud B2C integrated with existing POS systems. Implemented Marketing Cloud for personalized journeys. Real-time inventory sync via MuleSoft.",
        results: [
            "35% increase in online sales",
            "50% improvement in inventory turnover",
            "70% email open rates with personalized campaigns",
            "Unified customer profiles across all channels"
        ],
        technologies: ["Commerce Cloud", "Marketing Cloud", "MuleSoft", "Service Cloud"]
    },
    "manufacturing-ai-forecasting": {
        title: "AI-Powered Sales Forecasting",
        client: "Manufacturing Leader",
        industry: "Manufacturing",
        challenge: "Sales forecasts were manual and often inaccurate. Production planning suffered from demand volatility. Limited visibility into pipeline health.",
        solution: "Implemented Sales Cloud with Einstein Forecasting. Integrated ERP systems for real-time production data. Built custom dashboards with Tableau CRM.",
        results: [
            "50% improvement in forecast accuracy",
            "25% reduction in production overruns",
            "Real-time pipeline visibility for executives",
            "Automated opportunity scoring with Einstein AI"
        ],
        technologies: ["Sales Cloud", "Einstein AI", "Tableau CRM", "Manufacturing Cloud"]
    }
};

export default async function CaseStudyDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const supabase = await createClient();
    const { data } = await supabase
        .from("case_studies")
        .select("*")
        .eq("slug", slug)
        .single();

    const study = data || MOCK_DETAILS[slug];

    if (!study) {
        notFound();
    }

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Link href="/case-studies" className="text-blue-200 hover:text-white text-sm font-medium mb-4 inline-block">
                        ← Back to Case Studies
                    </Link>
                    <p className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-2">
                        {study.industry}
                    </p>
                    <h1 className="text-4xl font-extrabold sm:text-5xl mb-4">
                        {study.title}
                    </h1>
                    <p className="text-xl text-blue-100">
                        {study.client}
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">The Challenge</h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300">
                            {study.challenge}
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Our Solution</h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300">
                            {study.solution}
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Results</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {study.results && study.results.map((result: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
                                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-neutral-700 dark:text-neutral-300 font-medium">{result}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Technologies Used</h2>
                        <div className="flex flex-wrap gap-3">
                            {study.technologies && study.technologies.map((tech: string, idx: number) => (
                                <span key={idx} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    <div className="mt-16 p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                            Let&apos;s discuss how we can help you achieve similar results.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 transition-colors">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
