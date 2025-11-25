<script>
	let type = "";
	let vibe = "";
	let audience = "";
	let occasion = "";

	function goToOutput() {
		// For demo purposes, we're sending the selected fields via URL params.
		// Later, this will call the Kernel Engine.
		const params = new URLSearchParams({
			type,
			vibe,
			audience,
			occasion
		});
		window.location.href = `/output?${params.toString()}`;
	}
</script>

<h2 style="font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; margin-bottom: 1rem;">
	Create a New Email ✨
</h2>

<p style="max-width: 650px; line-height: 1.6; margin-bottom: 2rem;">
	Choose the elements that best describe the email you want to generate.  
	The engine will tailor the tone, structure, and suggestions to match your boutique hotel's identity.
</p>

<div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 500px;">

	<!-- Email Type -->
	<label>
		<strong>Email type</strong><br />
		<select bind:value={type} style="width: 100%; padding: .5rem;">
			<option value="">Select…</option>
			<option value="newsletter">Newsletter</option>
			<option value="offer">Special Offer</option>
			<option value="event">Event Announcement</option>
			<option value="welcome">Welcome / Pre-stay</option>
			<option value="poststay">Post-stay Thank You</option>
		</select>
	</label>

	<!-- Hotel Vibe -->
	<label>
		<strong>Hotel vibe</strong><br />
		<select bind:value={vibe} style="width: 100%; padding: .5rem;">
			<option value="">Select…</option>
			<option value="romantic">Romantic</option>
			<option value="luxury">Luxury Chic</option>
			<option value="family">Family-friendly</option>
			<option value="business">Business & Corporate</option>
		</select>
	</label>

	<!-- Audience -->
	<label>
		<strong>Guest audience</strong><br />
		<select bind:value={audience} style="width: 100%; padding: .5rem;">
			<option value="">Select…</option>
			<option value="couples">Couples</option>
			<option value="families">Families</option>
			<option value="locals">Local customers</option>
			<option value="business">Business travellers</option>
		</select>
	</label>

	<!-- Occasion -->
	<label>
		<strong>Occasion</strong><br />
		<select bind:value={occasion} style="width: 100%; padding: .5rem;">
			<option value="">Select…</option>
			<option value="christmas">Christmas / Holidays</option>
			<option value="weekend">Weekend Boost</option>
			<option value="lowseason">Low-Season Recovery</option>
			<option value="announcement">General Announcement</option>
		</select>
	</label>

	<button 
		on:click={goToOutput}
		style="margin-top: 1.5rem; padding: 1rem 1.5rem; background: #D84171; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
		Generate Email ✨
	</button>
</div>
