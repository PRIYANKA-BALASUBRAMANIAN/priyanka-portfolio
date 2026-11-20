/**
 * Portfolio Data Configuration for B. Priyanka
 * 
 * All placeholders (GitHub, LinkedIn, Email, Demo links) are centralized here
 * and clearly marked with EDITABLE comments so you can replace them anytime.
 */

export const personalInfo = {
  name: "B. Priyanka",
  role: "Aspiring AI Engineer | Computer Science Undergraduate",
  degree: "B.Tech Computer Science and Engineering (Artificial Intelligence)",
  college: "Karunya Institute of Technology and Sciences",
  graduationYear: "2027",
  cgpa: "8.68",
  location: "Tamil Nadu, India",
  summary:
    "Undergraduate student in Computer Science and Engineering with a specialization in Artificial Intelligence. Passionate about architecting intelligent systems, Generative AI workflows, full-stack applications, and scalable problem-solving. Constantly seeking to bridge foundational machine learning models with real-world software engineering.",
  
  // EDITABLE: Replace with your actual email, LinkedIn, and GitHub links
  email: "priyanka.example@email.com", // EDITABLE: e.g. priyanka.b@gmail.com
  github: "https://github.com/PRIYANKA-BALASUBRAMANIAN",
  linkedin: "https://linkedin.com/in/your-profile", // EDITABLE: e.g. https://linkedin.com/in/priyanka-b
  resumePath: "/resume.pdf", // EDITABLE: place your resume in public/resume.pdf or link to Google Drive
};

export const aboutData = {
  headline: "Building intelligent software at the intersection of AI and modern engineering.",
  description: [
    "I am an undergraduate Computer Science Engineering student specializing in Artificial Intelligence at Karunya Institute of Technology and Sciences, graduating in 2027 with a current CGPA of 8.68.",
    "My technical focus revolves around Artificial Intelligence, Retrieval-Augmented Generation (RAG), Natural Language Processing, and full-stack software development. I have hands-on experience designing and implementing practical machine learning pipelines, AST-driven emission estimators, and semantic search systems.",
    "Driven by analytical thinking, attention to detail, and a genuine eagerness to learn, I continuously refine my skills through hands-on project work, industry internships, and professional certifications. I am excited to contribute to innovative teams building impactful, future-ready technology."
  ],
  highlights: [
    { label: "Degree Specialization", value: "B.Tech CSE (AI)" },
    { label: "Academic Standing", value: "8.68 CGPA" },
    { label: "Graduation Cohort", value: "Class of 2027" },
    { label: "Core Competency", value: "AI, RAG & Full-Stack" }
  ]
};

export const skillsCategories = [
  {
    category: "AI / Machine Learning",
    description: "Core intelligence frameworks, LLM integrations & semantic retrieval",
    skills: [
      { name: "Machine Learning", level: "Advanced" },
      { name: "NLP", level: "Intermediate" },
      { name: "Generative AI", level: "Intermediate" },
      { name: "RAG Architecture", level: "Intermediate" }
    ],
    color: "from-cyan-500 to-blue-500"
  },
  {
    category: "Programming Languages",
    description: "Core algorithms, data structures & systems design",
    skills: [
      { name: "Python", level: "Proficient" },
      { name: "Java", level: "Intermediate" },
      { name: "JavaScript", level: "Proficient" }
    ],
    color: "from-blue-500 to-indigo-500"
  },
  {
    category: "Frontend Development",
    description: "Responsive, accessible & performant user interfaces",
    skills: [
      { name: "React", level: "Proficient" },
      { name: "HTML5", level: "Proficient" },
      { name: "CSS3 / Tailwind", level: "Proficient" }
    ],
    color: "from-indigo-500 to-violet-500"
  },
  {
    category: "Backend Development",
    description: "Scalable APIs, server-side architecture & endpoints",
    skills: [
      { name: "FastAPI", level: "Proficient" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" }
    ],
    color: "from-violet-500 to-purple-500"
  },
  {
    category: "Databases",
    description: "Relational queries and document/vector stores",
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" }
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Developer Tools",
    description: "Version control, API testing & rapid prototyping",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "Streamlit", level: "Proficient" },
      { name: "Postman", level: "Intermediate" }
    ],
    color: "from-emerald-500 to-teal-500"
  }
];

export const projects = [
  {
    id: "ecopulse",
    title: "EcoPulse",
    tagline: "Software Carbon Emissions Estimation & Analysis",
    description:
      "A machine learning-based application for analyzing and estimating software carbon emissions using Python, Abstract Syntax Tree (AST) analysis, Streamlit, and local LLMs to evaluate code efficiency and compute footprint.",
    techStack: ["Python", "AST Analysis", "Streamlit", "Local LLMs", "Machine Learning"],
    category: "AI / Sustainability",
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/ecopulse", // EDITABLE PLACEHOLDER
    demoUrl: "", // EDITABLE PLACEHOLDER: leave empty if no live deployment
    featured: true,
    highlights: [
      "Performs static code parsing via Python AST to estimate computational intensity",
      "Interactive Streamlit dashboard to visualize emission estimates",
      "Integrates local LLMs to suggest greener code refactoring patterns"
    ]
  },
  {
    id: "hybrid-rag-assistant",
    title: "Hybrid RAG Assistant",
    tagline: "Multilingual Document Question-Answering System",
    description:
      "A multilingual document question-answering system using Python, FastAPI, Qdrant vector database, semantic embeddings, OCR preprocessing, and Large Language Models for grounded responses across varied document types.",
    techStack: ["Python", "FastAPI", "Qdrant", "Embeddings", "OCR", "LLMs"],
    category: "Generative AI",
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/hybrid-rag-assistant", // EDITABLE PLACEHOLDER
    demoUrl: "", // EDITABLE PLACEHOLDER
    featured: true,
    highlights: [
      "Semantic vector indexing and retrieval powered by Qdrant",
      "OCR pipeline for parsing scanned files and multilingual documents",
      "FastAPI asynchronous backend with contextual grounded QA"
    ]
  },
  {
    id: "log-threat-analytics",
    title: "Log Threat Analytics",
    tagline: "Suspicious Pattern Detection in Server Logs",
    description:
      "A log analysis application utilizing Python, spaCy NLP pipelines, regular expression tokenization, and Streamlit to detect anomalous log activities, malicious intrusion attempts, and suspicious patterns.",
    techStack: ["Python", "spaCy", "Regex", "Streamlit", "NLP"],
    category: "Security / NLP",
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/log-threat-analytics", // EDITABLE PLACEHOLDER
    demoUrl: "", // EDITABLE PLACEHOLDER
    featured: false,
    highlights: [
      "Rule-based and NLP-assisted pattern matching for threat signals",
      "Automated extraction of IP addresses, HTTP status anomalies, and payload vectors",
      "Streamlit UI for real-time log ingestion and interactive alert inspection"
    ]
  },
  {
    id: "car-price-prediction",
    title: "Car Price Prediction",
    tagline: "Supervised Regression Modeling for Vehicle Valuation",
    description:
      "A machine learning project built with Python, Linear Regression, OneHotEncoder for categorical preprocessing, and Streamlit to deliver accurate price estimations based on vehicle characteristics.",
    techStack: ["Python", "Machine Learning", "Linear Regression", "OneHotEncoder", "Streamlit"],
    category: "Machine Learning",
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/car-price-prediction", // EDITABLE PLACEHOLDER
    demoUrl: "", // EDITABLE PLACEHOLDER
    featured: false,
    highlights: [
      "Data preprocessing pipeline incorporating OneHotEncoding and feature scaling",
      "Linear regression modeling trained on curated automotive attributes",
      "Streamlit interactive interface enabling instant inference on user inputs"
    ]
  },
  {
    id: "upside-down-diner",
    title: "Upside Down Diner",
    tagline: "Full-Stack Restaurant Portal with Embedded AI Chatbot",
    description:
      "A full-stack web application built using React, Node.js, Express, and MongoDB featuring user ordering workflows, menu management, and an intelligent AI chatbot for customer inquiries and recommendations.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AI Chatbot", "REST API"],
    category: "Full Stack / AI",
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/upside-down-diner", // EDITABLE PLACEHOLDER
    demoUrl: "", // EDITABLE PLACEHOLDER
    featured: true,
    highlights: [
      "Responsive React client integrated with Express and Node.js REST endpoints",
      "Persistent MongoDB database for item catalog and customer orders",
      "Integrated AI conversational assistant providing instant menu guidance"
    ]
  }
];

export const internships = [
  {
    role: "AI/ML Intern",
    company: "Edunet Foundation",
    duration: "Internship Period [EDITABLE: e.g. June 2024 - July 2024]",
    location: "Remote / Hybrid [EDITABLE]",
    description:
      "Engaged in hands-on Artificial Intelligence and Machine Learning training, model design, and real-world problem sets. Collaborated on data preprocessing, feature engineering, and model evaluation routines.",
    learnings: [
      "Trained and evaluated supervised and unsupervised machine learning algorithms",
      "Applied data exploratory analysis (EDA) techniques on varied datasets",
      "Collaborated on practical applied AI project deliverables and presentations"
    ]
  },
  {
    role: "Web Development Intern",
    company: "EI Systems",
    duration: "Internship Period [EDITABLE: e.g. Jan 2024 - Feb 2024]",
    location: "Remote / Hybrid [EDITABLE]",
    description:
      "Worked on core web development technologies, responsive interface construction, API integration, and user-centric component architecture to build performant web layouts.",
    learnings: [
      "Designed responsive UI components ensuring cross-device compatibility",
      "Implemented clean client-side logic and structured asynchronous API interactions",
      "Practiced code versioning and collaborative Git development workflows"
    ]
  }
];

export const certifications = [
  {
    title: "Oracle Certified Foundation Associate",
    issuer: "Oracle",
    category: "Cloud & Systems",
    issueDate: "Verified [EDITABLE]",
    credentialUrl: "https://www.oracle.com/certifications/ [EDITABLE]", // EDITABLE PLACEHOLDER
    description: "Foundational validation of cloud infrastructure, core compute services, and database principles."
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte / Forage",
    category: "Data & Business Intelligence",
    issueDate: "Completed [EDITABLE]",
    credentialUrl: "https://forage.com/ [EDITABLE]", // EDITABLE PLACEHOLDER
    description: "Practical simulation tackling exploratory data analysis, data storytelling, and strategic analytical recommendations."
  },
  {
    title: "Python Essential Certifications",
    issuer: "Cisco / Python Institute [EDITABLE]",
    category: "Programming & Algorithms",
    issueDate: "Certified [EDITABLE]",
    credentialUrl: "https://www.credly.com/ [EDITABLE]", // EDITABLE PLACEHOLDER
    description: "Comprehensive mastery of Python programming fundamentals, object-oriented concepts, and standard data structures."
  },
  {
    title: "CCNA Introduction & Networking Certifications",
    issuer: "Cisco Networking Academy",
    category: "Networking & Protocols",
    issueDate: "Completed [EDITABLE]",
    credentialUrl: "https://www.netacad.com/ [EDITABLE]", // EDITABLE PLACEHOLDER
    description: "In-depth understanding of IP addressing, routing and switching, OSI model layers, and secure network infrastructure."
  }
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  specialization: "Artificial Intelligence",
  institution: "Karunya Institute of Technology and Sciences",
  location: "Coimbatore, Tamil Nadu, India",
  duration: "2023 – 2027",
  cgpa: "8.68",
  cgpaScale: "10.0",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java/Python)",
    "Artificial Intelligence & Knowledge Systems",
    "Machine Learning Foundations",
    "Database Management Systems (MySQL/MongoDB)",
    "Computer Networks & Protocols",
    "Operating Systems & Architecture"
  ]
};
