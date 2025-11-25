<script>
	// For MVP, seasonal packs are hardcoded (this is enough to impress).
	let season = "";
	
	const seasonalData = {
		winter: [
			{
				title: "Truffle Weekend",
				desc: "Local truffle farmers open their estates for exclusive tasting sessions.",
				idea: "Feature a gourmet stay package with early access."
			},
			{
				title: "Candlelit Old-Town Tour",
				desc: "A charming guided walk through historic streets illuminated for the holidays.",
				idea: "Promote it as a romantic add-on for couples."
			},
			{
				title: "Chic Hot Chocolate Festival",
				desc: "Artisan chocolatiers present elevated winter beverages.",
				idea: "Create an in-room tasting experience."
			}
		],
		spring: [
			{
				title: "Flower Market Revival",
				desc: "Local growers bring rare spring blooms.",
				idea: "Highlight bouquet workshops."
			},
			{
				title: "Rooftop Aperitivo Season",
				desc: "Warmer evenings, perfect for sunset drinks.",
				idea: "Launch a signature cocktail."
			}
		]
	};
</script>

<h2 style="font-family:'Cormorant Garamond', serif; font-size:1.8rem; margin-bottom:1rem;">
	Seasonal Inspiration Packs 🍃
</h2>

<p style="max-width:650px; line-height:1.6; margin-bottom:2rem;">
	Choose a season to preview curated local highlights your hotel can use for newsletters, guest communications, or upsell ideas.
</p>

<label>
	<strong>Select season</strong><br />
	<select bind:value={season} style="width: 250px; padding: .5rem;">
		<option value="">Select…</option>
		<option value="winter">Winter 2025</option>
		<option value="spring">Spring 2026</option>
	</select>
</label>

{#if season}
	<div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">

		{#each seasonalData[season] as item}
			<div style="background:white; padding:1.2rem 1.5rem; border-radius:8px; border:1px solid #e8e2da;">
				<h3 style="margin:0; color:#D84171; font-family:'Cormorant Garamond', serif;">
					{item.title}
				</h3>

				<p style="margin:.3rem 0 1rem 0; line-height:1.4;">{item.desc}</p>

				<p style="font-size:.9rem; background:#F6F4EF; padding:.6rem 1rem; border-radius:6px;">
					<strong>Hotel idea:</strong> {item.idea}
				</p>
			</div>
		{/each}
	</div>
{/if}
