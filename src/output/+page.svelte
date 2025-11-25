<script>
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	// Get the URL parameters from the previous screen
	const url = get(page).url;
	const type = url.searchParams.get("type") || "";
	const vibe = url.searchParams.get("vibe") || "";
	const audience = url.searchParams.get("audience") || "";
	const occasion = url.searchParams.get("occasion") || "";

	// Simple demo generator — later replaced by Kernel Engine output
	function generateDemoEmail() {
		return `
Dear Guest,

We are delighted to share something special with you today.

As a ${vibe || "boutique"} property, we care deeply about creating meaningful experiences for ${audience || "our guests"}. This ${occasion || "moment"} is the perfect opportunity to introduce a tailored ${type || "email"} designed with elegance and warm hospitality.

More soon — your stay (and your inbox) deserve only the best.

Warm regards,
The Nice-Lamp Concierge Email App ✨
		`;
	}

	let emailContent = generateDemoEmail();
</script>

<h2 style="font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; margin-bottom: 1rem;">
	Your Generated Email ✨
</h2>

<p style="margin-bottom: 1.5rem; line-height: 1.6; max-width: 700px;">
	This is a demo preview. In the final version, the Kernel Engine will produce tone-optimized emails using your hotel’s brand identity.
</p>

<div style="background: white; border: 1px solid #e8e2da; padding: 1.5rem; border-radius: 8px; white-space: pre-line; line-height: 1.6; max-width: 700px;">
	{emailContent}
</div>

<button
	on:click={() => navigator.clipboard.writeText(emailContent)}
	style="margin-top: 1.5rem; padding: 1rem 1.5rem; background: #D84171; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
	Copy Email to Clipboard
</button>
