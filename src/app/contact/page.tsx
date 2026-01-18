import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-xl text-neutral-500 dark:text-neutral-400">
                        Discuss your project with our Salesforce & AI experts.
                    </p>
                </div>

                <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-2xl p-8 sm:p-12 border border-neutral-100 dark:border-neutral-800">
                    <ContactForm source="contact_page" />
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">Email Us</h3>
                        <p className="text-neutral-500 mt-2">contact@amaanc.com</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">Call Us</h3>
                        <p className="text-neutral-500 mt-2">+44 20 1234 5678</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">Visit Us</h3>
                        <p className="text-neutral-500 mt-2">London, United Kingdom</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
