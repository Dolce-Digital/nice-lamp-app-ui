import OpenAI from "openai";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { type, vibe, audience, occasion } = req.body;

        // Initialize OpenAI client
        const client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });

        // Build the prompt
        const prompt = `
You are Nice-Lamp, a boutique-hospitality email engine.

Write a polished, elegant, hotel-ready email in the Nice-Lamp tone:
Soft Luxury × Dry Wit × High-Precision Clarity.

Inputs:
- Email type: ${type}
- Hotel vibe: ${vibe}
- Audience: ${audience}
- Occasion: ${occasion}

Output:
A full email with greeting, body, CTA line, and signature.
`;

        // Call new Responses API (2025+)
        const response = await client.responses.create({
            model: "gpt-4.1-mini",
            input: prompt
        });

        // Extract text output safely
        const emailText = response.output_text;

        if (!emailText || emailText.trim() === "") {
            return res.status(500).json({ error: "Engine returned empty output." });
        }

        return res.status(200).json({ email: emailText });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
