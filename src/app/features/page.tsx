'use client'

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function FeaturesPage() {
    const router = useRouter();

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">
                        Salesforce Platform Capabilities
                    </h1>
                    <p className="mt-4 text-xl text-neutral-500 dark:text-neutral-400">
                        Maximizing the full potential of the Salesforce ecosystem.
                    </p>
                </div>

                <div className="space-y-24">
                    {/* Sales Cloud */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Sales Cloud</h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                                Sell faster and smarter with the world&apos;s #1 CRM. We help you automate tasks, centralize customer data, and close deals from anywhere.
                            </p>
                            <ul className="list-disc pl-5 mb-8 space-y-2 text-neutral-600 dark:text-neutral-400">
                                <li>Lead &amp; Opportunity Management</li>
                                <li>Workflow Automation &amp; Approvals</li>
                                <li>Sales Forecasting</li>
                            </ul>
                            <Button onPress={() => router.push('/contact')} variant="primary">Discuss Sales Cloud</Button>
                        </div>
                        <div className="order-1 md:order-2 bg-blue-50 dark:bg-blue-900/20 h-64 rounded-xl flex items-center justify-center">
                            <span className="text-blue-500 font-bold text-xl">Sales Cloud UI Visualization</span>
                        </div>
                    </div>

                    {/* Service Cloud */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="hidden md:block bg-purple-50 dark:bg-purple-900/20 h-64 rounded-xl flex items-center justify-center">
                            <span className="text-purple-500 font-bold text-xl">Service Cloud UI Visualization</span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Service Cloud</h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                                Deliver personalized support at scale. Empower your agents with a complete view of every customer and AI-powered recommendations.
                            </p>
                            <ul className="list-disc pl-5 mb-8 space-y-2 text-neutral-600 dark:text-neutral-400">
                                <li>Omnichannel Routing</li>
                                <li>Knowledge Base Management</li>
                                <li>Service Analytics</li>
                            </ul>
                            <Button onPress={() => router.push('/contact')} variant="primary">Discuss Service Cloud</Button>
                        </div>
                        <div className="md:hidden bg-purple-50 dark:bg-purple-900/20 h-64 rounded-xl flex items-center justify-center">
                            <span className="text-purple-500 font-bold text-xl">Service Cloud UI Visualization</span>
                        </div>
                    </div>

                    {/* Marketing Cloud */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Marketing Cloud</h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                                Build relationships and drive revenue. Create 1-to-1 customer journeys across email, mobile, social, and advertising.
                            </p>
                            <ul className="list-disc pl-5 mb-8 space-y-2 text-neutral-600 dark:text-neutral-400">
                                <li>Journey Builder</li>
                                <li>Email Studio</li>
                                <li>Social Studio</li>
                            </ul>
                            <Button onPress={() => router.push('/contact')} variant="primary">Discuss Marketing Cloud</Button>
                        </div>
                        <div className="order-1 md:order-2 bg-orange-50 dark:bg-orange-900/20 h-64 rounded-xl flex items-center justify-center">
                            <span className="text-orange-500 font-bold text-xl">Marketing Cloud UI Visualization</span>
                        </div>
                    </div>

                    {/* Einstein AI */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="hidden md:block bg-indigo-50 dark:bg-indigo-900/20 h-64 rounded-xl flex items-center justify-center">
                            <span className="text-indigo-500 font-bold text-xl">Einstein AI Visualization</span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Einstein AI</h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                                Embed AI directly into your CRM. Predict outcomes, recommend next steps, and automate standard tasks.
                            </p>
                            <ul className="list-disc pl-5 mb-8 space-y-2 text-neutral-600 dark:text-neutral-400">
                                <li>Predictive Lead Scoring</li>
                                <li>Opportunity Insights</li>
                                <li>Automated Data Discovery</li>
                            </ul>
                            <Button onPress={() => router.push('/contact')} variant="primary">Discuss Einstein AI</Button>
                        </div>
                        <div className="md:hidden bg-indigo-50 dark:bg-indigo-900/20 h-64 rounded-xl flex items-center justify-center">
                            <span className="text-indigo-500 font-bold text-xl">Einstein AI Visualization</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
