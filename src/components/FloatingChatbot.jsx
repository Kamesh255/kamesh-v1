"use client";
import { useState, useRef, useEffect } from "react";

const suggestions = [
  "👨‍💻 About Kamesh",
  "⚙️ Technical skills",
  "🚀 View projects",
  "📈 Experience",
  "📩 Contact him",
];

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
      {
    role: "bot",
    text: "👋 Hi! I'm Kamesh Hedau's assistant. Ask me about his skills, projects, or experience.",
  },
    {
      role: "system",
      content: `
You are a professional AI assistant representing Kamesh Hedau, a frontend developer.

STRICT RULES:
- Always talk about Kamesh (never about yourself as an AI)
- Do not generate fake or unrelated information
- Keep responses professional, concise, and impactful
- Focus on real frontend development work

ABOUT KAMESH:
Kamesh Hedau is a frontend developer with 4 years of experience specializing in React.js, Next.js, and modern web technologies. He has built 20+ projects including dashboards, banking interfaces, and interactive UI systems, with a strong focus on performance, responsiveness, and user experience.

SKILLS:
- React.js, Next.js
- JavaScript (ES6+)
- HTML5, CSS3
- Bootstrap
- API Integration
- Responsive Web Design
- UI/UX Optimization
- Performance Optimization

EXPERIENCE:
- Developed 20+ real-world web applications
- Strong focus on clean UI, performance, and responsiveness
- Expertise in scroll-based animations and interactive UI

PROJECTS:
1. Banking Web Application:
   - Developed a dynamic and responsive banking interface
   - Features include transaction history, account overview, and dashboard UI
   - Focused on secure UI patterns and smooth user experience

2. Portfolio Website:
   - Built a modern portfolio with advanced animations
   - Implemented scroll-based interactive sections and smooth transitions

3. Dynamic Dashboard:
   - Created dashboard with real-time data handling and API integration
   - Interactive UI components and optimized rendering

4. Image Gallery System:
   - Full-screen preview with next/previous navigation
   - Smooth UI transitions and responsive design

5. Multi-step Form System:
   - Dynamic form handling with validation
   - Step-by-step UX with clean UI

STRENGTHS:
- Strong UI/UX understanding
- Clean and maintainable code
- Performance-focused development
- Attention to detail

CONTACT:
- Available via portfolio contact form

RESPONSE RULES:
- If asked about projects → highlight banking app, dashboard, and UI work
- If asked about skills → list frontend stack clearly
- If asked about experience → provide structured summary
- If asked "who is Kamesh" → give professional introduction

IMPORTANT:
Always respond confidently as Kamesh's assistant.
Never say you don't know Kamesh.
`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatRef = useRef(null);

  // 🌗 Theme detect
  const isDark =
    typeof window !== "undefined" &&
    document.documentElement.getAttribute("data-theme") === "dark";

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  // 🔥 FORMATTER (ul/li + bold + paragraph)
  const formatText = (text, msg) => {
    if (!text) return null;

    const lines = text.split("\n");
    const elements = [];
    let listItems = [];

    lines.forEach((line, i) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("*") || trimmed.startsWith("-")) {
        listItems.push(
          <li
            style={{ color: msg.role === "user" ? "#f7f7f7" : "#001b54" }}
            key={i}
            dangerouslySetInnerHTML={{
              __html: trimmed
                .replace(/^(\*|-)/, "")
                .trim()
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />,
        );
      } else {
        if (listItems.length > 0) {
          elements.push(
            <ul
              key={`ul-${i}`}
              style={{
                paddingLeft: "18px",
                margin: "6px 0",
                color: msg.role === "user" ? "#f7f7f7" : "#001b54",
              }}
            >
              {listItems}
            </ul>,
          );
          listItems = [];
        }

        if (trimmed) {
          elements.push(
            <p
              key={i}
              style={{
                margin: "6px 0",
                color: msg.role === "user" ? "#f7f7f7" : "#001b54",
              }}
              dangerouslySetInnerHTML={{
                __html: trimmed.replace(
                  /\*\*(.*?)\*\*/g,
                  "<strong>$1</strong>",
                ),
              }}
            />,
          );
        }
      }
    });

    if (listItems.length > 0) {
      elements.push(
        <ul
          style={{
            paddingLeft: "18px",
            color: msg.role === "user" ? "#f7f7f7" : "#001b54",
          }}
        >
          {listItems}
        </ul>,
      );
    }

    return elements;
  };

  const sendMessage = async (customText) => {
    const msgText = customText || input;
    if (!msgText.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: msgText }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: msgText }),
      });

      const data = await res.json();

      let text = "";

      for (let i = 0; i < data.reply.length; i++) {
        text += data.reply[i];
        await new Promise((r) => setTimeout(r, 5));

        setMessages((prev) => {
          const updated = [...prev];

          if (updated[updated.length - 1]?.role === "bot") {
            updated[updated.length - 1].text = text;
          } else {
            updated.push({ role: "bot", text });
          }

          return updated;
        });
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "18px",
          right: "18px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "linear-gradient(135deg,#3b82f6,#6366f1)",
          color: "#fff",
          fontSize: "22px",
          zIndex: 999,
          border: "none",
        }}
      >
        🤖
      </button>

      {/* CHATBOX */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "18px",
            width: "95vw",
            maxWidth: "380px",
            height: "75vh",
            maxHeight: "520px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            zIndex: 999,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            fontSize: "13px",
            lineHeight: "1.6",
          }}
          className="chatboat"
        >
          {/* HEADER */}
          <div
            style={{
              padding: "10px 12px",
              borderBottom: "1px solid #e2e8f0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Kamesh AI Assistant</span>
            <span style={{ cursor: "pointer" }} onClick={() => setOpen(false)}>
              ✖
            </span>
          </div>

          {/* CHAT BODY */}
          <div
            ref={chatRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "10px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.role === "user" ? "right" : "left",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    background: msg.role === "user" ? "#0051ff" : "#fefefe",
                    color: msg.role === "user" ? "#f0f0f0" : "#00135f",

                    padding: "8px 10px",
                    borderRadius: "10px",
                    display: "inline-block",
                    maxWidth: "85%",
                  }}
                >
                  {formatText(msg.text, msg)}
                </div>
              </div>
            ))}

            {loading && <div style={{ fontSize: "12px" }}>Typing...</div>}
          </div>

          {/* SUGGESTIONS */}
          <div
            style={{
              padding: "6px",
              display: "flex",
              gap: "6px",
              overflowX: "auto",
            }}
          >
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => sendMessage(s)}
                style={{
                  fontSize: "11px",
                  padding: "5px 8px",
                  borderRadius: "20px",
                  background: isDark ? "#1e293b" : "#e2e8f0",
                  color: isDark ? "#fff" : "#000",
                  border: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* INPUT */}
          <div
            style={{
              display: "flex",
              padding: "8px",
              gap: "6px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "6px 8px",
                borderRadius: "6px",
                border: "none",
                background: isDark ? "#1e293b" : "#f1f5f9",
                color: isDark ? "#fff" : "#000",
                fontSize: "12px",
              }}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={() => sendMessage()} className="btn-light">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
