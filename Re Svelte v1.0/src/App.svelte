<script>
  let isTabTwo = false;

    import { onMount, tick } from 'svelte';
  import { initializeApp } from "firebase/app";
  import { getDatabase, ref, onChildAdded, push, serverTimestamp, query, limitToLast } from "firebase/database";

  // -- FIREBASE SETUP --
  const firebaseConfig = {
  apiKey: "AIzaSyDJaIq4pAy_oJY0p8_zmfO_ZZ0v4AhqxKw",
  authDomain: "manabesu-githubio.firebaseapp.com",
  databaseURL: "https://manabesu-githubio-default-rtdb.firebaseio.com",
  projectId: "manabesu-githubio",
  storageBucket: "manabesu-githubio.firebasestorage.app",
  messagingSenderId: "1088701237489",
  appId: "1:1088701237489:web:83fd17418ad5f67ca50150",
  measurementId: "G-PWB2N9WYW6"
};
  



  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
  const writeRef = ref(db, 'public_chat');
  const readQuery = query(writeRef, limitToLast(50));

  // -- COMPONENT STATE --
  let messages = [];
  let chatName = '';
  let currentMessage = '';
  let chatContainer; // Reference for auto-scrolling

  // -- LIFECYCLE & LOGIC --
  onMount(() => {
    // Listen for DB additions
    onChildAdded(readQuery, async (snapshot) => {
      const data = snapshot.val() || {};
      if (!data.text) return;

      // Append to reactive array
      messages = [...messages, { name: data.name || 'Anonymous', text: data.text }];
      
      // Wait for Svelte to update the DOM, then scroll to bottom
      await tick();
      if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
    });
  });

  function sendMessage() {
    const text = currentMessage.trim().substring(0, 500);
    const name = chatName.trim().substring(0, 30) || "Anonymous";

    if (!text) return;

    push(writeRef, {
      name,
      text,
      timestamp: serverTimestamp()
    }).catch(err => console.error("Firebase write rejected:", err));

    currentMessage = ''; // Clear input immediately
  }
</script>

<main>
  <aside class="panel left">
	<img class="avatar" src="tako.png" alt="profile pic">
    <h1>Hello Manab</h1>
    <span class="pronouns">sin/cos • 20 y/o</span>
    <p class="bio">He's a Computer Science student and a big dummy overthinker</p>
    
    <div class="links">
	  	<a href="https://discord.com/users/okaymango5"><img src="https://s.magecdn.com/social/16w/mw-discord.png" alt="discord"></a>
      <a href="https://github.com/Manabesu/"><img src="https://s.magecdn.com/social/16w/mw-github.png" alt="github"></a>
      <a href="https://www.linkedin.com/in/manabesu/"><img src="https://s.magecdn.com/social/16w/mw-linkedin.png" alt="linkedin"></a>
      <a href="mailto:mmmanabendra2006@gmail.com"><img src="https://s.magecdn.com/social/16w/mw-mail.png" alt="email"></a>
    </div>
    <div class="links">
            <!--<a href="resume.pdf" target="_blank" rel="noopener noreferrer" >
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 9L15 15L17 9M10 15C9.06812 15 8.60218 15 8.23463 14.8478C7.74458 14.6448 7.35523 14.2554 7.15224 13.7654C7 13.3978 7 12.9319 7 12C7 11.0681 7 10.6022 7.15224 10.2346C7.35523 9.74458 7.74458 9.35523 8.23463 9.15224C8.60218 9 9.06812 9 10 9M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: scale(0.35);"></path> </g></svg>
            </a> -->

            <a href="https://medium.com/@manabesu"><img src="https://s.magecdn.com/social/mw-medium.svg" alt="Articles" style="transform: scale(0.8);"></a>
    </div>
  </aside>

  <section class="panel right">
    <header>
    <div style="margin-right: auto;">
    {#if !isTabTwo}
    <h3 style="opacity: 50%;">About me</h3>
    {:else}
    <h3 style="opacity: 50%;">Interests</h3>
    {/if}
    </div>
    <div>
      <label class="slider-toggle">
        <input type="checkbox" bind:checked={isTabTwo} />
        <span class="slider"></span>
      </label>
      </div>
    </header>

    <article class="content">
      {#if !isTabTwo}
      <p>
			A 2nd year CSE student at SOA Uni.
			</p>
			<p>
			Currently exploring what lies ahead of him. For that, he's dabbling in a lot of things,
			from programming to music to quantum mechanics.
			</p>
			<p>
				Looking for all opportunities to learn various stuff.
			</p>
			<p>
				He doesn't have many friends. If you'd like to be one, please reach him out. 
				He may not communicate with you much, but he doesn't mean anything bad.
			</p>
      {:else}
        <div class="interest-list">
          <div>
              <ul style="margin-top: 0;">
                <h3 style="margin:0;">ANIME/MANGA</h3>
                <li>Tensura</li>
                <li>Mairimashita! Iruma-kun</li>
                <li>Hyouka</li>
                <li>The Apothecary Diaries</li>
                <li>Tanaka-kun</li>
                <li>Bocchi the Rock!</li>
                <li>Mushi-shi</li>
                <li>No Game No Life</li>
                <li>Lord of Mysteries</li>
              </ul>
          </div>
          <div>
              <ul style="margin-top: 0;">
                <h3 style="margin:0;">GAMES</h3>
                <li>Hollow Knight</li>
                <li>Osu</li>
                <li>Holocure</li>
                <li>Pokemon</li>
                <li>AFK Journey</li>
                <li>Minecraft</li>
                <li>Stardew Valley</li>
              </ul>
          </div>
            <div>
              <ul style="margin-top: 0;">
                <h3 style="margin:0;">OTHERS</h3>
                <li>Vtubers</li>
                <li>Mysteries</li>
                <li>Japanese</li>
                <li>Novels</li>
                <li>Listening to Songs</li>
                <li>Mechatronics</li>
                <li>Quantum Physics</li>
                <li>Programming stuff</li>
              </ul>
          </div>
        </div>
        
      {/if}
    </article>
  </section><!--
  <section class="panel extra-section">
    <a href="article.html">Blogs</a>
    <a href="resume.html">CSE Resume</a>
  </section> -->
<section class="panel chat-section">
  <h2>Public Room</h2>
  <div class="chat-container">
    <div class="chat-messages">
      {#each messages as msg}
			<div class="" bind:this={chatContainer}>
				<div class="message">
				<strong class="user">{msg.name}:</strong> {msg.text}
				</div>
			{#if messages.length === 0}
				<p class="empty">Loading messages...</p>
			{/if}
			</div>
      {/each}
      {#if messages.length === 0}
        <p class="empty">No messages yet. Be the first.</p>
      {/if}
    </div>
    
    <div class="chat-inputs">
      <input type="text" bind:value={chatName} placeholder="Name" class="theme-input name-input" />
      <input 
        type="text" 
        bind:value={currentMessage} 
        placeholder="Type a message..." 
        class="theme-input msg-input" 
        on:keydown={(e) => e.key === 'Enter' && sendMessage()} 
      />
      <button on:click={sendMessage} class="theme-button">Send</button>
    </div>
  </div>
</section>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: clamp(1rem, 3vw, 3rem);
    color: #e0e0e0;
    font-family: "Cause", "Segoe UI", Roboto, sans-serif;
    display: grid;
    place-items: center;
    min-height: 100vh;
    box-sizing: border-box;
  }

  main {
    display: grid;
    grid-template-columns: minmax(280px, 1fr) minmax(320px, 2.5fr);
    gap: clamp(1rem, 2vw, 2rem);
    width: 100%;
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    main { grid-template-columns: 1fr; }
  }

  .panel {
    background: #000000;
	border: 1px solid #ffffff;
    border-radius: clamp(16px, 2vw, 32px);
    padding: clamp(1.5rem, 3vw, 3rem);
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .avatar {
    width: clamp(80px, 15vw, 120px);
    height: clamp(80px, 15vw, 120px);
	transform: scaleX(-1);
  }

  .interest-list{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: clamp(1rem, 2vw, 1.5rem);
    margin-top: 0.5rem;
  }

  h1 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    margin: 0 0 0.25rem 0;
    font-weight: 600;
  }

  .pronouns {
    font-size: clamp(0.75rem, 1vw, 0.9rem);
    color: #888;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
  }

  .bio {
    font-size: clamp(0.9rem, 1.2vw, 1rem);
    line-height: 1.6;
    color: #bbb;
    margin-bottom: 2rem;
  }

  .links {
    display: flex;
    margin-top: auto;
	transform: scale(1.2);
  }

  .links a {
    color: #e0e0e0;
    width: 24px;
    height: 24px;
    transition: opacity 0.2s;
  }

  .links a:hover { opacity: 0.6; }

  .right {
    display: flex;
    flex-direction: column;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .slider-toggle {
    position: relative;
    width: 48px;
    height: 24px;
  }

  .slider-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #333;
    border-radius: 24px;
    transition: 0.3s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  input:checked + .slider { background-color: #555; }
  input:checked + .slider:before { transform: translateX(24px); }

  .content {
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    line-height: 1.7;
    color: #ccc;
    animation: fade 0.3s ease-in-out;
  }

  @keyframes fade {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  p { margin-top: 0; }
  ul { padding-left: 1.5rem; }

  .extra-section {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}


  /* -- CHAT SECTION -- */
.chat-section {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chat-section h2 {
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 600;
}

.chat-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chat-messages {
  height: clamp(250px, 40vh, 400px); /* Responsive vertical constraint */
  background: #121212;
  border-radius: clamp(8px, 1vw, 12px);
  padding: 1rem;
  overflow-y: auto;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Minimal Custom Scrollbar for the chat */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}
.chat-messages::-webkit-scrollbar-track {
  background: transparent;
}
.chat-messages::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 6px;
}
.chat-messages::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.message {
  line-height: 1.5;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  word-wrap: break-word;
}

.user {
  color: #fff;
  font-weight: 600;
}

.empty {
  color: #666;
  font-style: italic;
  text-align: center;
  margin: auto;
}

.chat-inputs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap; /* Prevents input crushing on mobile */
}

.theme-input, .theme-button {
  background: #121212;
  border: 1px solid #333;
  color: #e0e0e0;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-family: inherit;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  transition: border-color 0.2s, opacity 0.2s;
}

.theme-input:focus {
  outline: none;
  border-color: #e0e0e0; /* High contrast focus state */
}

.name-input {
  flex: 1;
  min-width: 100px;
}

.msg-input {
  flex: 3;
  min-width: 200px;
}

.theme-button {
  background: #e0e0e0;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

.theme-button:hover {
  opacity: 0.8;
}






</style>






<!--===============================-->






<!--

<script>
	let name = 'Manab';
</script>

<main>
	<div id="left-half" class="round">
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
	</div>
	<div>
	<div id="right-half" class="round">
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
	</div>
	</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display: flex;
		gap: 1em;
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
		container-type: inline-size;
		width: 20%;
		height: 80%;
		min-height: 80vh;
		padding: 1em;
	}

	#right-half {
		container-type: inline-size;
		width: 80%;
		height: 60%;
		min-height: 80vh;
		padding: 1em;
	}

	#left-half p {
		font-size: 6cqw;
	}
	#right-half p {
		font-size: 6cqw;
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

-->