'use client'

import { Card, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const SERVICES = [
    {
        title: "Salesforce Solutions",
        description: "End-to-end implementation and customization of Sales, Service, and Marketing Clouds.",
        href: "/services/salesforce",
        icon: (
            <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        )
    },
    {
        title: "System Integration",
        description: "Seamlessly connect your disparate systems using MuleSoft and custom API strategies.",
        href: "/services/integration",
        icon: (
            <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: "AI & Analytics",
        description: "Leverage Einstein AI and Tableau to derive actionable insights from your data.",
        href: "/services/ai",
        icon: (
            <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    }
]

export default function ServicesHighlights() {
    const router = useRouter();

    return (
        <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Our Core Expertise
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                        Comprehensive solutions tailored to your enterprise needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERVICES.map((service, idx) => (
                        <Card key={idx} className="p-6">
                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                                    <span className="inline-block p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                                        {service.icon}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
                                    {service.description}
                                </p>
                                <div>
                                    <Button onPress={() => router.push(service.href)} variant="ghost" className="pl-0 font-medium justify-start">
                                        Learn more -&gt;
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
