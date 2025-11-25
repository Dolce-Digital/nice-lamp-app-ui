<script>
	// Basic layout script (empty for now)
</script>

<!-- Global Fonts -->
<style global>
	@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Raleway:wght@300;400;600&display=swap');

	html, body {
		margin: 0;
		padding: 0;
		font-family: 'Raleway', sans-serif;
		background: #F6F4EF;
		color: #392B21;
	}
	
	header {
		background: #FFFFFF;
		border-bottom: 1px solid #e8e2da;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	header h1 {
		margin: 0;
		font-family: 'Cormorant Garamond', serif;
		font-size: 1.8rem;
		color: #D84171;
		font-weight: 600;
	}

	nav a {
		margin-left: 1.5rem;
		text-decoration: none;
		color: #392B21;
		font-weight: 400;
		transition: opacity 0.2s ease;
	}

	nav a:hover {
		opacity: 0.6;
	}

	main {
		padding: 2rem;
		max-width: 900px;
		margin: 0 auto;
	}
</style>

<header>
	<h1>Nice-Lamp</h1>
	<nav>
		<a href="/">Home</a>
		<a href="/email">Create Email</a>
		<a href="/seasonal">Seasonal Packs</a>
	</nav>
</header>

<main>
	<slot />
</main>
