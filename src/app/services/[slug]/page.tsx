import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { Button } from "@heroui/react";
import Link from "next/link";

interface ServicePageProps {
    params: {
        slug: string;
    };
}

const MOCK_DETAILS: Record<string, any> = {
    "salesforce": {
        title: "Salesforce Implementation",
        description: "Full-cycle Salesforce Solutions",
        business_problem: "Inefficient sales processes and siloed data teams.",
        approach: "We start with a deep-dive discovery phase, followed by agile implementation.",
        tools: ["Sales Cloud", "Service Cloud", "Apex", "LWC"],
        value_prop: "Increase sales efficiency by 30%."
    },
    "integration": {
        title: "MuleSoft Integration",
        description: "Connect anything, anywhere.",
        business_problem: "Disconnected systems causing data redundancy.",
        approach: "API-led connectivity architecture.",
        tools: ["MuleSoft", "Anypoint Platform", "REST/SOAP"],
        value_prop: "Real-time data synchronization across the enterprise."
    },
    "ai": {
        title: "AI & Data Analytics",
        description: "Smart insights for smarter decisions.",
        business_problem: "Data rich but insight poor.",
        approach: "Model training and dashboard creation.",
        tools: ["Einstein", "Tableau", "Python"],
        value_prop: "Predictive analytics to forecast trends."
    }
};

export default async function ServiceDetailPage({ params }: ServicePageProps) {
    const { slug } = await params;

    const supabase = await createClient();
    const { data: service } = await supabase
        .from("services")
        .select("*")
        .eq("slug", slug)
        .single();

    const data = service || MOCK_DETAILS[slug];

    if (!data) {
        notFound();
    }

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/services" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm font-medium">
                        &larr; Back to Services
                    </Link>
                </div>

                <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white sm:text-5xl mb-6">
                    {data.title}
                </h1>

                <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-8">
                    {data.description}
                </p>

                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">The Challenge</h2>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            {data.business_problem}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Our Approach</h2>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            {data.approach}
                        </p>
                    </div>
                </div>

                <div className="mt-12 bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Tools & Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                        {data.tools && data.tools.map((tool: string, idx: number) => (
                            <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Ready to get started?</h2>
                    {/* Note: Server component cannot pass router callback to Button onPress easily without 'use client' wrapper.
                 So we use a standard Link component styled as a button, or wrap in a client component.
                 Since this is a Server Component, using Link with classes is cleaner than converting to Client Component just for a button. 
                 But for consistency I will use a simple Link with existing Tailwind Button classes or similar look.
                 Actually, just use Link.
             */}
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-medium text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 h-12 px-8">
                        Contact Us About {data.title}
                    </Link>
                </div>
            </div>
        </div>
    );
}
