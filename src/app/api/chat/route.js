let userRequests = new Map();

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();
    const windowTime = 60 * 1000; // 1 min

    if (!userRequests.has(ip)) {
      userRequests.set(ip, []);
    }

    let timestamps = userRequests.get(ip).filter((t) => now - t < windowTime);

    // 🚫 RATE LIMIT (20 req/min)
    if (timestamps.length >= 20) {
      return Response.json({
        reply: "⚠️ Too many requests. Please wait a moment and try again.",
      });
    }

    timestamps.push(now);
    userRequests.set(ip, timestamps);

    const { message } = await req.json();
    // ✅ CONTACT CUSTOM RESPONSE (ONLY ADD THIS)
if (/contact/i.test(message)) {
  return Response.json({
    reply: `
📩 You can connect with Kamesh using the options below:

🔹 <a href="https://linkedin.com/in/kamesh-hedau" target="_blank">LinkedIn</a>

🔹 <a href="https://kameshhedau.com/contact" target="_blank">Contact Form</a>

🔹 <a href="mailto:kameshhedau19@gmail.com">Email</a>

🔹 <a href="https://wa.me/918109152546?text=Hi%20Kamesh%20I%20visited%20your%20portfolio" target="_blank">WhatsApp</a>

👉 Click any option to continue.
    `,
  });
}

    // ❌ STRICT FILTER (ONLY KAMESH RELATED)
    const isRelevant =
      /kamesh|project|skill|experience|portfolio|contact|frontend|react|next/i.test(
        message,
      );

    if (!isRelevant) {
      return Response.json({
        reply:
          "👋 This assistant is only for Kamesh Hedau's portfolio. Please ask about his skills, projects, or experience.",
      });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3-8b-instruct",
          messages: [
            {
              role: "system",
              content: `
You are strictly Kamesh Hedau's personal portfolio assistant.

STRICT RULES:
- Only answer Kamesh-related queries
- If unrelated → politely refuse
- Do NOT give general answers
- Keep responses short, professional, and confident

IDENTITY:
Kamesh Hedau is a frontend developer with 4+ years of experience.

SKILLS:
React.js, Next.js, JavaScript, HTML, CSS, Bootstrap, API integration, UI/UX, performance optimization

PROJECTS:
- Banking web application (dashboard + transaction UI)
- Animated portfolio with scroll effects
- Dynamic dashboards with API integration
- Image gallery with full-screen preview
- Multi-step form system

EXPERIENCE:
- 20+ real-world projects
- Strong in responsive design and modern UI
- Focus on performance and UX

RULE:
If question is not about Kamesh → refuse.
              `,
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    if (data.error) {
      return Response.json({ reply: data.error.message });
    }

    return Response.json({
      reply: data.choices?.[0]?.message?.content || "No response",
    });
  } catch (error) {
    return Response.json({
      reply: "Server error",
    });
  }
}
