import React, { useState, useEffect, useRef } from "react";
import { ref, push, onChildAdded, query, limitToLast } from "firebase/database";
import { db } from "../lib/firebase";

interface Message {
  id: string;
  name: string;
  text: string;
  timestamp: number;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatRef = query(ref(db, "public_chat"), limitToLast(50));
    
    const unsubscribe = onChildAdded(chatRef, (snapshot) => {
      const data = snapshot.val();
      const newMessage: Message = {
        id: snapshot.key || Date.now().toString(),
        name: data.name,
        text: data.text,
        timestamp: data.timestamp,
      };
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const name = username.trim() || "Anonymous";
    const chatRef = ref(db, "public_chat");
    
    push(chatRef, {
      name,
      text: message,
      timestamp: Date.now(),
    });

    setMessage("");
  };

  return (
    <div className="section border-t border-warm-border dark:border-warm-dark-border py-12">
      <h2 className="text-3xl mb-8">Public Room</h2>
      <div className="flex flex-col w-full h-[400px] border border-warm-border dark:border-warm-dark-border rounded-lg p-4 bg-transparent">
        <div className="flex-grow overflow-y-auto mb-4 pr-1 scrollbar-thin scrollbar-thumb-warm-muted">
          {messages.map((msg) => (
            <div key={msg.id} className="mb-3 break-words">
              <span className="font-bold text-warm-primary dark:text-warm-dark-primary">{msg.name}: </span>
              <span className="text-warm-text dark:text-warm-dark-text opacity-90">{msg.text}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Name"
            className="w-1/4 p-2 rounded border border-warm-border dark:border-warm-dark-border bg-warm-card dark:bg-warm-dark-card text-sm focus:outline-none focus:border-warm-primary"
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow p-2 rounded border border-warm-border dark:border-warm-dark-border bg-warm-card dark:bg-warm-dark-card text-sm focus:outline-none focus:border-warm-primary"
          />
          <button
            type="submit"
            className="p-2 px-4 rounded bg-warm-primary dark:bg-warm-dark-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
