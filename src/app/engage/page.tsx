import Link from "next/link";

export default function EngagePage() {
    const sections = [
        {
            title: "Case Studies",
            description: "Real-world success stories from our clients",
            link: "/case-studies",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            color: "from-blue-500 to-indigo-600"
        },
        {
            title: "Blog & Insights",
            description: "Expert perspectives on Salesforce and AI",
            link: "/blog",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            color: "from-purple-500 to-pink-600"
        },
        {
            title: "Newsroom",
            description: "Company announcements and press releases",
            link: "/newsroom",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
            ),
            color: "from-green-500 to-teal-600"
        },
        {
            title: "Events",
            description: "Webinars, conferences, and speaking engagements",
            link: "/events",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            color: "from-orange-500 to-red-600"
        }
    ];

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white sm:text-5xl">
                        Engage With Us
                    </h1>
                    <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        Stay connected with the latest insights, success stories, and company updates from Amaanc.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {sections.map((section) => (
                        <Link
                            key={section.title}
                            href={section.link}
                            className="group block"
                        >
                            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:shadow-2xl transition-all duration-300">
                                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                                <div className="p-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${section.color} text-white mb-6 group-hover:scale-110 transition-transform">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {section.title}
                                    </h2>
                                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                                        {section.description}
                                    </p>
                                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 transition-all">
                                        Explore
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
                        Get the latest Salesforce insights, case studies, and industry trends delivered to your inbox monthly.
                    </p>
                    <div className="flex gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
