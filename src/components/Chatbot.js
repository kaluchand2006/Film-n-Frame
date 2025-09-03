import React, { useState, useRef, useEffect } from "react";
import "../styles/Chatbot.css";

const defaultMessages = [
  { from: "bot", text: "👋 Welcome to Flute n Frame! I'm your Virtual Producer. Ask me anything about our services, booking, or film production." }
];

const botReplies = [
  { q: /package|pricing|cost|price/i, a: "💡 We offer flexible packages for every budget, from indie films to major productions. Would you like a custom quote or details on our premium services?" },
  { q: /book|booking|schedule|appointment|reserve/i, a: "📅 You can book a consultation or production slot directly on our website, or let me know your preferred date and we'll assist you!" },
  { q: /service|offer|provide|solutions/i, a: "🎥 We provide full-service film production, editing, post-production, VFX, and virtual production. What aspect are you interested in?" },
  { q: /hello|hi|hey|greetings/i, a: "👋 Hello! How can I help you create your next cinematic masterpiece?" },
  { q: /contact|email|phone|reach/i, a: "📧 You can reach us via the Contact section, or email info@filmsnframe.com. We're also available on WhatsApp and Instagram!" },
  { q: /portfolio|showreel|work|examples/i, a: "🎬 Check out our Showreel and Portfolio section for recent projects, trailers, and behind-the-scenes footage!" },
  { q: /team|crew|staff|who/i, a: "👥 Our team includes award-winning directors, editors, and VFX artists. Want to know more about our crew?" },
  { q: /location|where|studio/i, a: "🌍 We operate globally, with studios in LA, London, and Mumbai. Where are you based?" },
  { q: /testimonials|reviews|feedback/i, a: "⭐ See what our clients say in the Testimonials section—real stories from directors, producers, and brands." },
  { q: /ai|virtual|technology|innovate/i, a: "🤖 We use AI and virtual production tools for faster, smarter filmmaking. Curious about our tech?" },
  { q: /.*/, a: "✨ I'm here to help with anything about our services, booking, your project, or the film industry!" }
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages((msgs) => [...msgs, { from: "user", text }]);
    setTimeout(() => {
      const reply = botReplies.find((r) => r.q.test(text))?.a || botReplies[botReplies.length - 1].a;
      setMessages((msgs) => [...msgs, { from: "bot", text: reply }]);
    }, 700);
  };

  return (
    <div className={`chatbot-widget${open ? " open" : ""}`}>
      <button className="chatbot-toggle" onClick={() => setOpen((o) => !o)} aria-label="Open chatbot">
        🎬
      </button>
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            Virtual Producer
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chatbot">&times;</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg ${msg.from}`}>{msg.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form
            className="chatbot-input-row"
            onSubmit={e => {
              e.preventDefault();
              sendMessage(input);
              setInput("");
            }}
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask me anything..."
              autoFocus
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
