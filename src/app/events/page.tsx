'use client'

import { useState } from "react";

export default function EventsPage() {
    const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('upcoming');

    const events = [
        {
            id: 1,
            title: "Salesforce Dreamforce 2024",
            type: "Conference",
            date: "2024-09-17",
            location: "San Francisco, CA",
            status: "upcoming",
            description: "Join us at Dreamforce where our team will showcase latest Einstein AI implementations."
        },
        {
            id: 2,
            title: "Webinar: Financial Services Cloud Masterclass",
            type: "Webinar",
            date: "2024-02-15",
            location: "Virtual",
            status: "upcoming",
            description: "Deep dive into FSC best practices with our senior architects. Register free."
        },
        {
            id: 3,
            title: "MuleSoft CONNECT 2024",
            type: "Conference",
            date: "2024-05-08",
            location: "Chicago, IL",
            status: "upcoming",
            description: "Speaking session: 'API-Led Integration at Enterprise Scale'"
        },
        {
            id: 4,
            title: "AI for CRM: Executive Briefing",
            type: "Workshop",
            date: "2023-11-20",
            location: "London, UK",
            status: "past",
            description: "Exclusive workshop for C-level executives on AI strategy in CRM."
        }
    ];

    const filteredEvents = events.filter(e => filter === 'all' || e.status === filter);

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white sm:text-5xl">
                        Events & Speaking Engagements
                    </h1>
                    <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        Join us at industry events, webinars, and workshops.
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${filter === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                            }`}
                    >
                        All Events
                    </button>
                    <button
                        onClick={() => setFilter('upcoming')}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${filter === 'upcoming'
                                ? 'bg-blue-600 text-white'
                                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                            }`}
                    >
                        Upcoming
                    </button>
                    <button
                        onClick={() => setFilter('past')}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${filter === 'past'
                                ? 'bg-blue-600 text-white'
                                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                            }`}
                    >
                        Past Events
                    </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {filteredEvents.map((event) => (
                        <div key={event.id} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${event.status === 'upcoming'
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                        : 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200'
                                    }`}>
                                    {event.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                                </span>
                                <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                                    {event.type}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                                {event.title}
                            </h2>

                            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {event.location}
                                </div>
                            </div>

                            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                                {event.description}
                            </p>

                            {event.status === 'upcoming' && (
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                                    Register Now
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
