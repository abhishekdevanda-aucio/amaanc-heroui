'use server'

import { createClient } from "@/utils/supabase/server";

export type FormState = {
    success: boolean;
    message?: string;
    errors?: Record<string, string[]>;
}

export async function submitLead(prevState: FormState, formData: FormData): Promise<FormState> {
    const supabase = await createClient();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;
    const source = formData.get("source") as string || "contact_page";

    // Basic server-side validation
    if (!name || !email || !message) {
        return { success: false, message: "Please fill in all required fields." };
    }

    const { error } = await supabase.from("leads").insert({
        name,
        email,
        phone,
        company,
        message,
        source
    });

    if (error) {
        console.error("Supabase Error:", error);
        return { success: false, message: "Failed to submit form. Please try again." };
    }

    // TODO: Trigger email notification here (or rely on DB triggers)

    return { success: true, message: "Thank you! We will get back to you shortly." };
}
