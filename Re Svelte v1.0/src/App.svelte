<script>
	let name = 'Manab';
</script>

<main>
	<section id="left-half" class="round">
		<img src="tako.png" alt="profile pic" width="45%" height="auto" style="transform: scaleX(-1);" />
		<h1>Hello {name}</h1>
		<p>cos/sin • 20 y/o</p>
		<p>He's a Computer Science student and a big dummy overthinker</p>
		<div>
			<a href="https://discord.com/users/okaymango5"><img src="https://s.magecdn.com/social/16w/mw-discord.png" alt="discord"></a>
			<a href="https://github.com/Manabesu/"><img src="https://s.magecdn.com/social/16w/mw-github.png" alt="github"></a>
			<a href="https://www.linkedin.com/in/manabesu/"><img src="https://s.magecdn.com/social/16w/mw-linkedin.png" alt="linkedin"></a>
			<a href="mailto:mmmanabendra2006@gmail.com"><img src="https://s.magecdn.com/social/16w/mw-mail.png" alt="email"></a>
		</div>
	</section>
	<section id="right-half" class="round">
		<button class="pagebutton" onclick="pageChange()">&#10142;</button>
		<div id="page1">
			<p class="textContent">
				A 2nd year CSE student at SOA Uni.
			</p><br>
			<p class="textContent">
			Currently exploring what lies ahead of him. For that, he's dabbling in a lot of things,
			from programming to music to quantum mechanics.
			</p><br>
			<p class="textContent">
				Looking for all opportunities to learn various stuff.
			</p><br>
			<p class="textContent">
				He doesn't have many friends.If you'd like to be one, please reach him out. 
				He may not communicate with you much, but he doesn't mean anything bad.
			</p>
		</div>
		<div id="page2">

		</div>
	</section>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display: flex;
		gap: 1%;
	}

	h1 {
		color: #ffffff;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.round {
		border: 1px solid #fff;
		border-radius: 12px;
		background: #111111;
	}

	#left-half {
		width: 20%;
		height: 80%;
		min-height: 80vh;
		padding: 1%;
	}

	#right-half {
		width: 80%;
		height: 60%;
		min-height: 80vh;
		padding: 1%;
	}

	/*button {
		background: transparent;
		color: #fff;
	}*/

	.pagebutton {
		background: transparent;
		color: #fff;
		border-radius: 25%;
		display: flex;
		align-items: center;
		text-align: center;
		margin-left: auto;
		width: 2em;
		height: 2em;
	}

	.textContent {
		text-align: left; 
		width: 50%; 
		margin: auto;
	}
</style>