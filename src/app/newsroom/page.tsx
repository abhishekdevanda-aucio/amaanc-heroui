export default function NewsroomPage() {
    const announcements = [
        {
            id: 1,
            type: "Press Release",
            title: "Amaanc Achieves Salesforce Summit Partnership Status",
            date: "2024-01-12",
            excerpt: "We're proud to announce our elevation to Summit Partner status, recognizing our expertise in delivering enterprise Salesforce solutions."
        },
        {
            id: 2,
            type: "Company News",
            title: "Expanding Our AI Practice with Dedicated Einstein Team",
            date: "2024-01-05",
            excerpt: "Amaanc announces the formation of a specialized Einstein AI practice to meet growing demand for intelligent CRM solutions."
        },
        {
            id: 3,
            type: "Press Release",
            title: "Amaanc Named MuleSoft Integration Partner of the Year",
            date: "2023-12-20",
            excerpt: "Recognition for outstanding integration architecture delivery across financial services and retail sectors."
        },
        {
            id: 4,
            type: "Company News",
            title: "Celebrating 12 Years of Salesforce Excellence",
            date: "2023-12-15",
            excerpt: "Since 2012, we've helped over 500 organizations transform their customer relationships through Salesforce."
        }
    ];

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white sm:text-5xl">
                        Newsroom
                    </h1>
                    <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        Latest company news, press releases, and announcements.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {announcements.map((item) => (
                        <article key={item.id} className="border-l-4 border-blue-600 bg-white dark:bg-neutral-900 p-8 rounded-r-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                    {item.type}
                                </span>
                                <time className="text-sm text-neutral-500 dark:text-neutral-400" dateTime={item.date}>
                                    {new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </time>
                            </div>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                                {item.title}
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-300 text-lg">
                                {item.excerpt}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-neutral-500 dark:text-neutral-400 mb-6">
                        For media inquiries, please contact:
                    </p>
                    <a href="mailto:press@amaanc.com" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        press@amaanc.com
                    </a>
                </div>
            </div>
        </div>
    );
}
