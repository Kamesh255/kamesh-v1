export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
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
You are NOT a general AI.
You are ONLY Kamesh Hedau's personal portfolio assistant.

STRICT RULES:
- Never talk about yourself as AI
- Never say "I am an AI"
- Never give general knowledge answers
- Only answer about Kamesh Hedau

IDENTITY:
Kamesh Hedau is a frontend developer with 4+ years of experience.

SKILLS:
React.js, Next.js, JavaScript, HTML, CSS, Bootstrap, API integration, UI/UX, performance optimization

PROJECTS:
- Banking web application with dashboard and transaction UI
- Animated portfolio with scroll-based effects
- Dynamic dashboards with API integration
- Image gallery with full-screen preview
- Multi-step form system

EXPERIENCE:
- 20+ real-world projects
- Strong in responsive design and modern UI
- Focus on performance and user experience

RULES:
If user asks:
- "who is Kamesh" → give professional intro
- "skills" → list frontend skills
- "projects" → describe above projects
- "contact" → say via portfolio contact form

If question is unrelated → still relate answer to Kamesh's work.

NEVER say you don't know Kamesh.
ALWAYS answer confidently as his assistant.
`
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    if (data.error) {
      return Response.json({ reply: data.error.message });
    }

    return Response.json({
      reply: data.choices?.[0]?.message?.content || "No response"
    });

  } catch (error) {
    return Response.json({
      reply: "Server error"
    });
  }
}