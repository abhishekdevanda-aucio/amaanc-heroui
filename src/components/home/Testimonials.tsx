'use client'

import { Card } from "@heroui/react";

const TESTIMONIALS = [
    {
        content: "Amaanc transformed our sales operations. Their expertise in Salesforce is unmatched.",
        author: "Global Tech Solutions",
        role: "CTO"
    },
    {
        content: "The Integration team helped us connect legacy systems seamlessly. Highly recommended.",
        author: "FinTech Corp",
        role: "Director of Engineering"
    },
    {
        content: "Einstein AI implementation gave us insights we never thought possible.",
        author: "Retail Giant",
        role: "Head of Marketing"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-white dark:bg-neutral-950">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, idx) => (
                        <Card key={idx} className="p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                            <div className="flex flex-col h-full">
                                <div className="mb-6 grow">
                                    <svg className="w-8 h-8 text-neutral-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21L14.017 18C14.017 16.896 14.383 16.33 15.117 16.33C15.918 16.33 16.318 16.896 16.318 18L16.318 21H19L19 18C19 15.333 17.518 14 15.553 14C12.836 14 11.477 15.333 11.477 18L11.477 21H14.017ZM8.00004 21L8.00004 18C8.00004 16.896 8.36604 16.33 9.10004 16.33C9.90004 16.33 10.3 16.896 10.3 18L10.3 21H12.983L12.983 18C12.983 15.333 11.501 14 9.53604 14C6.81904 14 5.46004 15.333 5.46004 18L5.46004 21H8.00004Z" />
                                    </svg>
                                    <p className="text-neutral-600 dark:text-neutral-300 italic">
                                        "{t.content}"
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-neutral-900 dark:text-white">{t.author}</p>
                                    <p className="text-sm text-neutral-500">{t.role}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
