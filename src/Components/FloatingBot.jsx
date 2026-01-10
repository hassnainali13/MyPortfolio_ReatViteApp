import { useState } from "react";
import BotWindow from "./BotWindow";
import { FaRobot } from "react-icons/fa";

export default function FloatingBot() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open && <BotWindow onClose={() => setOpen(false)} />}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-50"
        title="Chat with AI Bot"
      >
        <FaRobot size={24} />
      </button>
    </div>
  );
}
