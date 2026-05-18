// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// PASTE YOUR CONFIG HERE:
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const chatRef = ref(db, 'public_chat'); 

const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message');
const usernameInput = document.getElementById('username');
const sendBtn = document.getElementById('send-btn');

// Listen for new messages in the database
onChildAdded(chatRef, (snapshot) => {
  const data = snapshot.val();
  
  const msgDiv = document.createElement('div');
  msgDiv.style.marginBottom = "8px";
  
  const safeName = data.name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeText = data.text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  msgDiv.innerHTML = `<strong>${safeName}:</strong> ${safeText}`;
  
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Function to send a message
function sendMessage() {
  const text = messageInput.value.trim();
  if (text !== "") {
    const name = usernameInput.value.trim() || "Anonymous";
    
    push(chatRef, {
      name: name,
      text: text,
      // Tell Firebase's server to generate the time instead of the browser
      timestamp: serverTimestamp() 
    });
    
    messageInput.value = ""; 
  }
}

// Send message when button is clicked
sendBtn.addEventListener('click', sendMessage);

// Send message when "Enter" key is pressed
messageInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
