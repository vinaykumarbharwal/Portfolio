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
            title: "Cortex - Document QA Web App",
            desc: "Designed and built an end-to-end document question-answering app with a React frontend and FastAPI REST backend. Implemented modular Python ingestion for PDF, TXT, and MD files, embedding generation, FAISS retrieval, third-party LLM integration, structured response parsing, and Dockerized deployment with configurable runtime parameters.",
            tags: ["PYTHON", "FASTAPI", "REACT", "FAISS"],
            image: "/images/codify.png",
            link: "#"
        },
        {
            title: "Search Ranking Platform",
            desc: "Built a full-stack API service and dashboard that ranks results from 20+ engineered text features, improving relevance by 30%+ over baseline. Added rate limiting, API-key authentication, fallback logic, real-time scoring controls, reproducible XGBoost model export/import, and API latency and throughput benchmarks.",
            tags: ["PYTHON", "FASTAPI", "REACT", "XGBOOST"],
            image: "/images/acs.png",
            link: "#"
        },
        {
            title: "Agniveer - Detection & Reasoning Platform",
            desc: "Built a full-stack detection and reasoning platform with model inference and image tensor preprocessing behind a testable FastAPI layer. Integrated geolocation, weather, and responder REST APIs into a structured Python request pipeline with reusable prompt templates and a React monitoring dashboard.",
            tags: ["PYTHON", "FASTAPI", "REACT", "REST APIs"],
            image: "/images/eval.jpg",
            link: "#"
        },
        {
            title: "CERES",
            desc: "AI-Based Smart OS Automation. Tauri-based system with an NLP-to-OS script pipeline using Whisper.",
            tags: ["TAURI", "PYTHON", "WHISPER"],
            image: "/images/ceres.png",
            link: "https://github.com/vinaykumarbharwal/ceres"
        },
        {
            title: "ACS Sentinel - Autonomous Cloud Reliability Agent",
            desc : "Engineered a self-healing Kubernetes agent using LangGraph and Python, automating failure remediation for 3 critical scenarios (DB crash, zombie tasks, security)",
            tags: ["LANGGRAPH", "KUBERNETES", "PYTHON"],
            image: "/images/acs.png",
            link: "https://github.com/vinaykumarbharwal/acs"
        },
        {
            title: "Codify",
            desc: "Remote Code Execution System. Cloud-based real-time executor with Next.js 14, Tailwind, TS, and MongoDB.",
            tags: ["NEXT.JS", "DOCKER", "CI/CD"],
            image: "/images/codify.png",
            link: "https://github.com/vinaykumarbharwal/codify-server"
        },
        {
            title: "Smart Grading System",
            desc: "Subjective Answer Evaluation System. Leverages BERT for semantic analysis and Gemini OCR.",
            tags: ["NLP", "FASTAPI", "BERT"],
            image: "/images/eval.jpg",
            link: "https://github.com/vinaykumarbharwal/CT-6-final-year-project"
        },
        {
            title: "Transformer Translator",
            desc: "English-to-German translator using PyTorch & 'Attention Is All You Need' architecture. Trained on 25k+ sentence pairs.",
            tags: ["PYTORCH", "NLP", "TRANSFORMER"],
            image: "/images/transformer.png",
            link: "https://github.com/vinaykumarbharwal/Transformer"
        }

    ],
    distinctions: [
        { 
            title: "Smart India Hackathon Finalist", 
            desc: "Selected for the grand finale of the world's biggest open innovation model.",
            image: "/images/sih.jpeg"
        },
        { 
            title: "Winner - Web Reshape Hackathon", 
            desc: "VNIT Nagpur (Axis'25). Ranked 1st of 100+ teams.",
            image: "/images/vnit.jpeg"
        },
        { 
            title: "Winner - Hackathon (Sipna)", 
            desc: "Secured 1st Runner Up among 250+ participants.",
            image: "/images/sipna.jpeg"
        },
        { 
            title: "Winner - St. Vincent Palloti", 
            desc: "Secured 1st Position by building 'Sarti' Mutual Fund Manager.",
            image: "/images/palloti.jpg"
        },
        { 
            title: "3-Star Coder", 
            desc: "CodeChef (Max Rating: 1600). Solved 300+ competitive problems.",
            image: "/images/cc.png"
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
    videos: [
    {
        title: "AI OS Automation Demo",
        desc: "Ceres agent performing system tasks via voice commands.",
        videoSrc: "/videos/CERES-demo.mp4", 
        thumbnail: "/images/ceres.jpg"
    },
    ],
};