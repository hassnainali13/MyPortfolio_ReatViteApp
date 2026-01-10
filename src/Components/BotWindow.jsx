import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

export default function BotWindow({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("https://your-deployed-bot-url.com/api/chat", {
        userMessage: input,
        conversation: messages,
      });

      const botMsg = { role: "bot", content: res.data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const botMsg = { role: "bot", content: "⚠️ Something went wrong." };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-20 right-5 w-80 max-w-sm h-96 bg-white rounded-xl shadow-xl flex flex-col z-50">
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b border-gray-200">
        <h2 className="font-bold text-lg">AI Assistant</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          <FaTimes />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-[80%] break-words ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-lg bg-gray-200 animate-pulse">
              Bot is typing...
            </div>
          </div>
        )}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input */}
      <div className="flex p-2 border-t border-gray-200 gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
