/**
 * Portfolio Data — B. Priyanka
 * 
 * Clean, genuine data configuration for an undergraduate developer.
 * Easily update links, placeholders, and descriptions.
 */

export const personalInfo = {
  name: "B. Priyanka",
  role: "Computer Science and Engineering Undergraduate — Artificial Intelligence",
  degree: "B.Tech — Computer Science and Engineering (Artificial Intelligence)",
  college: "Karunya Institute of Technology and Sciences",
  graduationYear: "2027",
  cgpa: "8.68",
  location: "Tamil Nadu, India",
  
  // Natural summary introducing the undergraduate student
  introduction:
    "I am a Computer Science & Engineering undergraduate specializing in Artificial Intelligence at Karunya Institute of Technology and Sciences (2023–2027). I am actively building my foundational skills in software development, AI applications, Generative AI, and Machine Learning. I enjoy turning theoretical concepts into practical software tools—from AST-driven carbon estimation to multilingual RAG assistants.",

  // Contact Links
  email: "priyubalu29@gmail.com",
  github: "https://github.com/PRIYANKA-BALASUBRAMANIAN",
  linkedin: "https://linkedin.com/in/your-profile", // EDITABLE: e.g. https://linkedin.com/in/priyanka-b
  resumePath: "/resume.pdf",
};

export const aboutContent = {
  paragraphs: [
    "I am currently an undergraduate student pursuing my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence at Karunya Institute of Technology and Sciences in Tamil Nadu, India. Across my coursework and personal projects, I maintain a consistent academic record with an 8.68 CGPA.",
    "My interest in technology began with a curiosity about how software systems process and organize information. As I explored programming in Python and Java, I became fascinated by Artificial Intelligence—specifically how algorithms can extract meaning from unstructured data, answer natural language questions, and analyze complex patterns.",
    "I actively develop my skills by building practical software applications. Rather than studying models in isolation, I focus on integrating machine learning pipelines with functional backends (FastAPI, Express) and clean user interfaces (React, Streamlit).",
    "As an undergraduate, I consider myself a dedicated learner. I enjoy diving into new tools, reading technical documentation, and iteratively refining my code to develop reliable, problem-focused solutions."
  ]
};

export const areasOfInterest = [
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI",
  "Natural Language Processing",
  "Retrieval-Augmented Generation (RAG)",
  "Full-Stack Development",
  "Software Engineering"
];

export const skillsData = [
  {
    category: "Programming",
    items: ["Java", "Python", "JavaScript"]
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"]
  },
  {
    category: "AI and ML",
    items: ["Machine Learning", "NLP", "Generative AI", "RAG"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Streamlit", "Postman"]
  }
];

export const educationData = {
  college: "Karunya Institute of Technology and Sciences",
  degree: "B.Tech — Computer Science and Engineering (Artificial Intelligence)",
  period: "2023 – 2027",
  cgpa: "8.68",
  location: "Coimbatore, Tamil Nadu, India",
  highlights: [
    "Specialization curriculum focused on AI, Knowledge Systems, and Deep Learning foundations",
    "Core Computer Science fundamentals: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks",
    "Current Cumulative Grade Point Average: 8.68 / 10.0"
  ]
};

export const projectsData = [
  {
    id: "ecopulse",
    title: "EcoPulse",
    subtitle: "Software Carbon Emission Analysis & Optimization",
    description:
      "A software carbon emission analysis project built to evaluate the environmental footprint of Python code. It uses Abstract Syntax Tree (AST) parsing to evaluate algorithmic intensity and CodeCarbon tracking to estimate computational emissions, offering suggestions through local LLMs to improve execution efficiency.",
    technologies: ["Python", "Streamlit", "AST analysis", "CodeCarbon", "Machine Learning", "local LLMs"],
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/ecopulse",
    details: [
      "Performs static code inspection via Python's AST module to detect resource-heavy loops and operations.",
      "Integrates CodeCarbon tracking logic to calculate estimated energy usage and carbon emission metrics.",
      "Delivers an interactive Streamlit user interface with refactoring guidance powered by local language models."
    ]
  },
  {
    id: "hybrid-rag-assistant",
    title: "Hybrid RAG Assistant",
    subtitle: "Multilingual Document Question-Answering Application",
    description:
      "A multilingual document question-answering application that allows users to upload documents and retrieve relevant, grounded information through natural-language questions. Combines OCR preprocessing, dense/sparse embeddings, and vector database indexing.",
    technologies: ["Python", "FastAPI", "Streamlit", "BGE-M3", "Qdrant", "PaddleOCR", "LLMs"],
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/hybrid-rag-assistant",
    details: [
      "Utilizes PaddleOCR for text extraction from scanned documents and multilingual PDFs.",
      "Computes semantic embeddings using BGE-M3 and indexes vectors in a Qdrant vector database.",
      "Exposes query endpoints via an asynchronous FastAPI backend and an interactive Streamlit UI."
    ]
  },
  {
    id: "log-threat-analytics",
    title: "Log Threat Analytics",
    subtitle: "Suspicious Pattern Detection & Security Analysis",
    description:
      "A log analysis application that identifies suspicious patterns and anomalies in server access logs using text processing, regular expressions, and NLP threat detection techniques.",
    technologies: ["Python", "spaCy", "Regex", "Streamlit"],
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/log-threat-analytics",
    details: [
      "Parses unstructured server access and authentication logs using robust regex patterns.",
      "Applies spaCy NLP pipelines to categorize log messages and identify anomalous request patterns.",
      "Visualizes event frequencies, IP anomalies, and alert flags via a lightweight Streamlit dashboard."
    ]
  },
  {
    id: "car-price-prediction",
    title: "Car Price Prediction",
    subtitle: "Supervised Regression Modeling for Vehicle Valuation",
    description:
      "A machine learning application predicting used vehicle prices based on mileage, year, make, and technical specifications, utilizing supervised linear regression and categorical encoding.",
    technologies: ["Python", "Machine Learning", "Linear Regression", "OneHotEncoder", "Streamlit"],
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/car-price-prediction",
    details: [
      "Cleans and preprocesses automotive dataset features using OneHotEncoder for categorical variables.",
      "Trains a supervised Linear Regression model evaluated against standard regression metrics.",
      "Provides an interactive Streamlit interface for instant price estimation on user-input features."
    ]
  },
  {
    id: "upside-down-diner",
    title: "Upside Down Diner",
    subtitle: "Full-Stack Restaurant Portal with Embedded AI Chatbot",
    description:
      "A full-stack web application for restaurant browsing, ordering workflows, and automated customer assistance through an integrated conversational chatbot.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "AI Chatbot"],
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/upside-down-diner",
    details: [
      "Built with a responsive React frontend communicating with Express and Node.js REST APIs.",
      "Manages menu items, category schemas, and user order states in MongoDB.",
      "Includes an embedded conversational assistant answering customer questions regarding menu items."
    ]
  }
];

export const internshipsData = [
  {
    role: "AI/ML Intern",
    company: "Edunet Foundation",
    duration: "Internship Period (e.g. 2024)",
    description:
      "Participated in hands-on Artificial Intelligence and Machine Learning training. Worked on practical exercises including data preprocessing, exploratory data analysis, and evaluating foundational machine learning models.",
    points: [
      "Trained and compared performance across supervised classification and regression algorithms.",
      "Performed data cleaning, missing value handling, and feature exploratory analysis on sample datasets.",
      "Gained practical experience implementing machine learning concepts using standard Python libraries."
    ]
  },
  {
    role: "Web Development Intern",
    company: "EI Systems",
    duration: "Internship Period (e.g. 2024)",
    description:
      "Worked on core web development assignments, focusing on structured HTML/CSS layouts, JavaScript programming, component architecture, and responsive user interfaces.",
    points: [
      "Developed responsive web page layouts tested across mobile and desktop viewports.",
      "Implemented client-side interactivity and clean asynchronous API requests.",
      "Practiced Git version control and structured codebase organization."
    ]
  }
];

export const certificationsData = [
  {
    title: "Oracle Certified Foundation Associate",
    issuer: "Oracle",
    description: "Validation of foundational cloud concepts, compute architecture, and database infrastructure."
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    description: "Simulation of real-world data analysis tasks, exploratory data investigation, and presentation of insights."
  },
  {
    title: "Python Essential Certifications",
    issuer: "Cisco / Python Institute",
    description: "Verification of fundamental Python programming knowledge, data structures, algorithms, and modular design."
  },
  {
    title: "CCNA Introduction and Networking Certifications",
    issuer: "Cisco Networking Academy",
    description: "Foundational networking principles, IPv4/IPv6 addressing, subnetting, and network protocols."
  }
];
