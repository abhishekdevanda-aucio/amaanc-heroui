import Link from "next/link";

const BLOG_POSTS = [
    {
        slug: "salesforce-einstein-ai-trends-2024",
        title: "5 Revolutionary Einstein AI Trends Transforming CRM in 2024",
        excerpt: "Discover how generative AI, predictive analytics, and automated data capture are revolutionizing customer relationship management.",
        author: "Amaanc Team",
        date: "2024-01-15",
        category: "AI & Innovation",
        readTime: "5 min read"
    },
    {
        slug: "mulesoft-integration-best-practices",
        title: "MuleSoft Integration: Enterprise Best Practices Guide",
        excerpt: "Learn proven strategies for building scalable, secure, and maintainable API integrations with MuleSoft Anypoint Platform.",
        author: "Amaanc Team",
        date: "2024-01-10",
        category: "Integration",
        readTime: "8 min read"
    },
    {
        slug: "financial-services-cloud-compliance",
        title: "Achieving Regulatory Compliance with Salesforce Financial Services Cloud",
        excerpt: "Navigate complex financial regulations while delivering exceptional customer experiences using FSC's built-in compliance tools.",
        author: "Amaanc Team",
        date: "2024-01-05",
        category: "Financial Services",
        readTime: "6 min read"
    },
    {
        slug: "tableau-crm-dashboard-design",
        title: "Designing Effective Tableau CRM Dashboards: A Practical Guide",
        excerpt: "Master the art of creating actionable, user-friendly analytics dashboards that drive data-driven decision making.",
        author: "Amaanc Team",
        date: "2023-12-28",
        category: "Analytics",
        readTime: "7 min read"
    },
];

export default function BlogPage() {
    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white sm:text-5xl">
                        Blog & Insights
                    </h1>
                    <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        Expert perspectives on Salesforce, AI, and digital transformation.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {BLOG_POSTS.map((post) => (
                        <article key={post.slug} className="group">
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                        <div className="text-center text-white p-6">
                                            <p className="text-sm font-semibold uppercase tracking-wide">{post.category}</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                                            <time dateTime={post.date}>
                                                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </time>
                                            <span>·</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 transition-all">
                                            Read More
                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
