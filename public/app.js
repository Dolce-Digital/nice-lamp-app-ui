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
   OUTPUT PAGE — CALL REAL KERNEL ENGINE
---------------------------------------- */

async function loadOutputIfNeeded() {
	const outputBox = document.getElementById("output-box");
	if (!outputBox) return;

	const params = new URLSearchParams(window.location.search);

	const type = params.get("type") || "";
	const vibe = params.get("vibe") || "";
	const audience = params.get("audience") || "";
	const occasion = params.get("occasion") || "";

	outputBox.textContent = "Generating email… please wait.";

	try {
		const response = await fetch("/api/kernel.js", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ type, vibe, audience, occasion })
		});

		const data = await response.json();

		if (data.email) {
			outputBox.textContent = data.email;
		} else {
			outputBox.textContent = "Error: No email returned by engine.";
		}
	} catch (err) {
		outputBox.textContent = "Error contacting engine: " + err.message;
	}
}

/* ----------------------------------------
   COPY BUTTON
---------------------------------------- */

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

