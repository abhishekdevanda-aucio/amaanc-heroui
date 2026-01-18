'use client'

import { Card, Button } from "@heroui/react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const MOCK_SERVICES = [
    {
        slug: "salesforce",
        title: "Salesforce Solutions",
        description: "End-to-end implementation and customization of Sales, Service, and Marketing Clouds to maximize your CRM potential.",
    },
    {
        slug: "integration",
        title: "System Integration",
        description: "Seamlessly connect disparate systems using MuleSoft and custom API strategies for unified data flow.",
    },
    {
        slug: "ai",
        title: "AI & Analytics",
        description: "Leverage Einstein AI and Tableau to derive actionable insights and automate decision-making.",
    },
];

export default function ServicesPage() {
    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchServices() {
            const supabase = createClient();
            const { data } = await supabase.from("services").select("*").order("created_at", { ascending: true });

            if (data && data.length > 0) {
                setServices(data);
            } else {
                setServices(MOCK_SERVICES);
            }
            setLoading(false);
        }
        fetchServices();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-neutral-600">Loading services...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white sm:text-5xl">
                        Our Services
                    </h1>
                    <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        Comprehensive Salesforce and integration solutions tailored to your business needs.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <Card key={service.slug} className="p-6 hover:shadow-xl transition-shadow">
                            <div className="flex flex-col h-full">
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
                                    {service.description}
                                </p>
                                <div className="mt-auto">
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium group"
                                    >
                                        Learn more
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
