import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/lib/supabase";

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(3),
    message: z.string().min(20),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const parsed = schema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid input", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const { name, email, subject, message } = parsed.data;

        const { error } = await supabase
            .from("contact_messages")
            .insert({ name, email, subject, message });

        if (error) {
            console.error("Supabase insert error:", error);
            return NextResponse.json(
                { error: "Failed to save message" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error("Contact API error:", err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
