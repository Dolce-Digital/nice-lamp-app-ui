/* ----------------------------------------
   EMAIL BUILDER → OUTPUT
---------------------------------------- */

function goToOutput() {
	const type = document.getElementById("type").value;
	const vibe = document.getElementById("vibe").value;
	const audience = document.getElementById("audience").value;
	const occasion = document.getElementById("occasion").value;

	const params = new URLSearchParams({
		type,
		vibe,
		audience,
		occasion
	});

	window.location.href = "output.html?" + params.toString();
}

/* ----------------------------------------
   OUTPUT PAGE GENERATION
---------------------------------------- */

function generateDemoEmail(params) {
	const type = params.get("type") || "email";
	const vibe = params.get("vibe") || "boutique";
	const audience = params.get("audience") || "guests";
	const occasion = params.get("occasion") || "this moment";

	return `
Dear Guest,

We are delighted to share something special with you today.

As a ${vibe} property, we care deeply about creating meaningful experiences for ${audience}. 
${occasion.charAt(0).toUpperCase() + occasion.slice(1)} is the perfect opportunity 
to introduce a tailored ${type} crafted with warmth and elegance.

More soon — your stay (and your inbox) deserves only the best.

Warm regards,
The Nice-Lamp Concierge Email App ✨
	`;
}

function loadOutputIfNeeded() {
	const outputBox = document.getElementById("output-box");
	if (!outputBox) return;

	const params = new URLSearchParams(window.location.search);
	const emailText = generateDemoEmail(params);

	outputBox.textContent = emailText;
}

/* Copy button */
function copyOutput() {
	const outputBox = document.getElementById("output-box");
	if (!outputBox) return;

	navigator.clipboard.writeText(outputBox.textContent);
	alert("Email copied to clipboard");
}

/* ----------------------------------------
   SEASONAL PACKS
---------------------------------------- */

const seasonalData = {
	winter: [
		{
			title: "Truffle Weekend",
			desc: "Local truffle farmers open their estates for exclusive tastings.",
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
			idea: "Offer an in-room tasting experience."
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

function loadSeasonal() {
	const select = document.getElementById("season");
	const container = document.getElementById("seasonal-output");

	if (!select || !container) return;

	const season = select.value;
	if (!season) {
		container.innerHTML = "";
		return;
	}

	container.innerHTML = seasonalData[season]
		.map(item => `
			<div class="season-item">
				<h3>${item.title}</h3>
				<p>${item.desc}</p>
				<p><strong>Hotel idea:</strong> ${item.idea}</p>
			</div>
		`)
		.join("");
}

/* ----------------------------------------
   INIT
---------------------------------------- */

loadOutputIfNeeded();
