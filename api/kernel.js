import OpenAI from "openai";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const body = JSON.parse(req.body);

        const { type, vibe, audience, occasion } = body;

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });

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

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }]
        });

        const emailText = completion.choices[0].message.content;

        return res.status(200).json({ email: emailText });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
