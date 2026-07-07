// data.ts
export const portfolioData = {
    skills: [
        { id: "01", category: "CORE & LANGUAGES", items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "OOP", "Data Structures & Algorithms", "Software Development", "Agile Methodologies", "Git & GitHub"] },
        { id: "02", category: "FRONTEND", items: ["React", "Next.js", "Tailwind CSS", "Redux", "Responsive Design", "REST API Integration"] },
        { id: "03", category: "BACKEND (PYTHON)", items: ["FastAPI", "Flask", "Django", "Django REST Framework", "Authentication (JWT/OAuth)", "Celery", "WebSockets", "Microservices"] },
        { id: "04", category: "DATABASES & CACHING", items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "Database Design", "ORM (SQLAlchemy/Django ORM)"] },
        { id: "05", category: "DEVOPS & CLOUD", items: ["Docker", "Kubernetes", "CI/CD", "Linux", "Nginx", "Vercel", "Render", "AWS Basics"] },
        { id: "06", category: "TESTING, DATA & AI TOOLS", items: ["Pytest", "Unit Testing", "Postman", "Pandas", "NumPy", "scikit-learn", "OpenAPI/Swagger", "ChatGPT", "GitHub Copilot", "Claude", "Gemini"] }
    ],
    experience: [
        {
            year: "2026",
            company: "HIET College",
            role: "Winner - Hack-O-Fest 2026",
            points: [
                "Built a full-stack application, TrailSafe, with a Python backend integrating multiple external REST APIs for real-time risk scoring and route optimization."
            ]
        },
        {
            year: "CUHP",
            company: "Central University of HP",
            role: "Organizer - CUHP-CTF",
            points: [
                "Part of the organizing team for 11 Capture The Flag (CTF) cybersecurity events, assisting with challenge development, participant coordination, and live leaderboard management."
            ]
        }
    ],
    education: [
        {
            year: "2021-2024",
            school: "Govt. PG College Una",
            degree: "B.Sc. Computer Science",
            university: "Himachal Pradesh University (HPU)",
            location: "Una, Himachal Pradesh, India"
        },
        {
            year: "2024-2026",
            school: "Central University of Himachal Pradesh",
            degree: "MCA",
            university: "Central University of Himachal Pradesh (CUHP)",
            location: "Himachal Pradesh, India"
        }
    ],
    projects: [
        {
            title: "Omni Venture Studio",
            desc: "Decoupled multi-tenant B2B market intelligence platform for VC workflows, combining a Next.js public site, React premium dashboard, Angular compliance portal, WebSocket feeds, and AI pitch-deck chat.",
            tags: ["NEXT.JS", "DJANGO", "FASTAPI", "LANGCHAIN", "PGVECTOR"],
            link: "https://github.com/vinaykumarbharwal/omni-venture-studio"
        },
        {
            title: "ScrapeForge",
            desc: "Full-stack SaaS web scraping platform for visually creating, scheduling, monitoring, and exporting structured scrapers without writing code.",
            tags: ["TYPESCRIPT", "SAAS", "AUTOMATION", "SCHEDULING"],
            link: "https://github.com/vinaykumarbharwal/ScrapeForge"
        },
        {
            title: "Titan Supply Agent",
            desc: "Autonomous supply-chain digital twin with LangGraph agents for scouting risks, analyzing SKU margins, drafting supplier negotiations, and enforcing human approval gates.",
            tags: ["PYTHON", "LANGGRAPH", "LITELLM", "CHAINLIT"],
            link: "https://github.com/vinaykumarbharwal/titan-supply-agent"
        },
        {
            title: "Wildfire Detection",
            desc: "Mission-focused wildfire detection platform using Edge AI, YOLO-to-ONNX deployment, and mobile endpoints for low-latency fire spotting in remote areas.",
            tags: ["PYTHON", "YOLO", "ONNX", "EDGE AI"],
            link: "https://github.com/vinaykumarbharwal/Wildfire_Detection"
        },
        {
            title: "GitNiche",
            desc: "AI-powered GitHub discovery platform that helps developers find active, beginner-friendly open-source issues based on stack, level, and goals.",
            tags: ["TYPESCRIPT", "AI", "GITHUB API", "OPEN SOURCE"],
            link: "https://github.com/vinaykumarbharwal/GitNiche"
        },
        {
            title: "CUHP CTF Platform",
            desc: "Full-stack Capture The Flag platform with team gameplay, real-time leaderboard tie-breaking, score progression charts, and categorized cybersecurity challenges.",
            tags: ["JAVASCRIPT", "CTF", "REAL-TIME", "LEADERBOARD"],
            link: "https://github.com/vinaykumarbharwal/CUHP-CTF-Platform"
        }
    ],
    contact: {
        location: "Una, Himachal Pradesh, India",
        email: "vinaykumarbharwal@gmail.com",
        links: {
            linkedin: "https://www.linkedin.com/in/vinaykumarbharwal",
            github: "https://github.com/vinaykumarbharwal",
            twitter: "https://x.com/bharwalvinay",
            instagram: "https://www.instagram.com/vinay_bhxrwal_0001"
        }
    },
    certificates: [
    { title: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI", link: "https://coursera.org/verify/MTTVIGOC8DBH" },
    { title: "Developing AI Applications with Python and Flask", issuer: "IBM", link: "https://coursera.org/verify/JLSTYM51QJ47" },
    { title: "Developing Back-End Apps with Node.js and Express", issuer: "IBM", link: "https://coursera.org/verify/M7A4RB45VDC7" },
    { title: "Developing Front-End Apps with React", issuer: "IBM", link: "https://coursera.org/verify/PYKR5GCTRF3W" },
    { title: "Generative AI: Elevate your Career", issuer: "IBM", link: "https://coursera.org/verify/31PWERJ6WVIM" },
    { title: "Full Stack Software Developer Assessment", issuer: "IBM", link: "https://coursera.org/verify/FII2FVPCUIQ2" },
    { title: "Python for Data Science, AI & Development", issuer: "IBM", link: "https://coursera.org/verify/4CNR1VICI6KC" },
    { title: "Introduction to Cloud Computing", issuer: "IBM", link: "https://coursera.org/verify/L96GKBEQ1FIE" },
    { title: "Introduction to Software Engineering", issuer: "IBM", link: "https://coursera.org/verify/926GB7UKZC21" },
    { title: "Developing Apps with Git & GitHub", issuer: "IBM", link: "https://coursera.org/verify/K5RMF093788U" },
    { title: "HTML, CSS, & JavaScript Intro", issuer: "IBM", link: "https://coursera.org/verify/HPSV1GKMH8NQ" },
    { title: "Software Developer Career Guide and Interview Preparation", issuer: "IBM", link: "https://coursera.org/verify/8CW9NKZSGPEK" },
    ],
};
