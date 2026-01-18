'use client'

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 pt-16 pb-32 sm:pt-24 sm:pb-40 lg:pt-32 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:mx-auto lg:col-span-6 lg:text-left">
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                Trusted Since 2012
                            </span>
                        </div>
                        <h1>
                            <span className="mt-1 block text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl xl:text-6xl">
                                <span className="block">Transforming Business</span>
                                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">with Salesforce & AI</span>
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 sm:mt-8 sm:text-xl sm:max-w-xl sm:mx-auto lg:mx-0">
                            For over a decade, we&apos;ve delivered enterprise-grade Salesforce implementation, MuleSoft integration, and cutting-edge AI solutions to propel businesses forward.
                        </p>
                        <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button onPress={() => router.push('/contact')} variant="primary" size="lg" className="font-semibold text-lg px-8 shadow-lg">
                                    Get Started
                                </Button>
                                <Button onPress={() => router.push('/services')} variant="secondary" size="lg" className="font-semibold text-lg px-8">
                                    View Services
                                </Button>
                            </div>
                            <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-500">
                                Join 500+ businesses that trust Amaanc for their digital transformation
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:col-span-6 lg:flex lg:items-center">
                        <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md">
                            <div className="relative block w-full bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border border-neutral-200 dark:border-neutral-700">
                                <div className="text-center p-8">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white mb-4">
                                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">Salesforce Excellence</p>
                                    <p className="text-sm text-neutral-500">Certified Experts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
