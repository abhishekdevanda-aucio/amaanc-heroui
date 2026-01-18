'use client'

import { useActionState } from "react";
import { submitLead, FormState } from "@/actions/lead";
import { Button, Input, TextArea, TextField, Label } from "@heroui/react";

const initialState: FormState = {
    success: false,
    message: ""
};

export default function ContactForm({ source = "contact_page" }: { source?: string }) {
    const [state, formAction, isPending] = useActionState(submitLead, initialState);

    if (state.success) {
        return (
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">Message Sent!</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{state.message}</p>
                <Button className="mt-4" onPress={() => window.location.reload()} variant="ghost">Send another</Button>
            </div>
        )
    }

    return (
        <form action={formAction} className="space-y-6">
            <input type="hidden" name="source" value={source} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField name="name" isRequired>
                    <Label>Full Name</Label>
                    <Input placeholder="John Doe" disabled={isPending} />
                </TextField>
                <TextField name="email" type="email" isRequired>
                    <Label>Email Address</Label>
                    <Input placeholder="john@company.com" disabled={isPending} />
                </TextField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField name="phone" type="tel">
                    <Label>Phone Number</Label>
                    <Input placeholder="+1 (555) 000-0000" disabled={isPending} />
                </TextField>
                <TextField name="company">
                    <Label>Company Name</Label>
                    <Input placeholder="Acme Inc." disabled={isPending} />
                </TextField>
            </div>

            <TextField name="message" isRequired>
                <Label>How can we help?</Label>
                <TextArea placeholder="Tell us about your project requirements..." rows={4} disabled={isPending} />
            </TextField>

            {state.message && !state.success && (
                <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm">
                    {state.message}
                </div>
            )}

            <Button type="submit" variant="primary" size="lg" className="w-full font-semibold" isPending={isPending}>
                Send Message
            </Button>
        </form>
    );
}
