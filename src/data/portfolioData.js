/**
 * Portfolio Data — B. Priyanka
 * 
 * Accurately synced with Official Resume (100% verified data & exact GitHub links).
 */

export const personalInfo = {
  name: "B. Priyanka",
  role: "Computer Science and Engineering Undergraduate — Artificial Intelligence",
  degree: "B.Tech — Computer Science & Engineering (Artificial Intelligence)",
  college: "Karunya Institute of Technology and Sciences",
  graduationYear: "2027",
  cgpa: "8.68",
  location: "Ooty, Tamil Nadu, India",
  phone: "+91-8668104373",
  
  // Professional Summary from Resume
  introduction:
    "Computer Science and Engineering (Artificial Intelligence) undergraduate who builds and debugs full-stack applications across the front end (React.js), back end (Node.js, Express.js, FastAPI, Java Servlets/JDBC), REST APIs, JWT authentication and databases (MongoDB, MySQL). Skilled at tracing issues across browser, API and database layers, and at validating LLM output for correctness and hallucinations through RAG projects. Works in JavaScript, Python and Java.",

  // Contact Links
  email: "priyubalu29@gmail.com",
  github: "https://github.com/PRIYANKA-BALASUBRAMANIAN",
  linkedin: "https://www.linkedin.com/in/b-priyanka-4a8b972a2",
  resumePath: "/resume.pdf",
};

export const aboutContent = {
  paragraphs: [
    "I am an undergraduate student pursuing my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence at Karunya Institute of Technology and Sciences, Tamil Nadu (2023–2027), holding a consistent CGPA of 8.68/10.",
    "My engineering background spans full-stack application development and applied Artificial Intelligence. On the engineering side, I build and debug systems across React.js frontends, Node.js/Express.js and FastAPI backends, Java Servlets/JDBC, and database layers in MongoDB and MySQL.",
    "In Artificial Intelligence, I focus on building reliable systems, particularly validating Large Language Model outputs for correctness and reducing hallucinations through Retrieval-Augmented Generation (RAG) pipelines, multilingual embeddings (BGE-M3), and vector databases like Qdrant.",
    "I am comfortable working across JavaScript, Python, and Java, learning unfamiliar codebases, tracing bugs across system layers, and translating algorithmic logic into clean, functional production software."
  ]
};

export const areasOfInterest = [
  "Retrieval-Augmented Generation (RAG)",
  "Artificial Intelligence & Machine Learning",
  "Generative AI & LLMs",
  "Natural Language Processing (NLP)",
  "Full-Stack Web Development",
  "Backend & RESTful API Engineering",
  "Security & Threat Analytics"
];

export const skillsData = [
  {
    category: "Programming",
    items: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"]
  },
  {
    category: "Front-End",
    items: ["React.js", "HTML5", "CSS3", "JavaScript"]
  },
  {
    category: "Back-End & APIs",
    items: ["Node.js", "Express.js", "FastAPI", "Java (JSP, Servlets, JDBC)", "RESTful APIs", "JWT Authentication"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"]
  },
  {
    category: "AI/ML & Data",
    items: ["RAG", "LLMs", "NLP", "Machine Learning", "Prompt Engineering", "Generative AI", "Multilingual AI", "Data Analysis"]
  },
  {
    category: "Tools & Concepts",
    items: ["Git", "GitHub", "Debugging & Testing", "Data Structures & Algorithms", "Object-Oriented Programming", "DBMS"]
  }
];

export const educationData = [
  {
    college: "Karunya Institute of Technology and Sciences",
    degree: "B.Tech — Computer Science & Engineering (Artificial Intelligence)",
    period: "08/2023 – 06/2027",
    cgpa: "8.68 / 10",
    location: "Tamil Nadu, India",
    highlights: [
      "Specialization curriculum: Artificial Intelligence, Machine Learning, Knowledge Systems, and Deep Learning",
      "Core CS: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks",
      "Maintained academic excellence with an 8.68/10 CGPA"
    ]
  },
  {
    college: "Taras Shevchenko National University of Kyiv, Ukraine",
    degree: "Certified Online International NLP Module (COIL)",
    period: "02/2026 – 03/2026",
    cgpa: "Certified",
    location: "International Collaboration (COIL)",
    highlights: [
      "Specialized training in modern Natural Language Processing architectures and text representation",
      "Cross-institutional academic collaboration on applied computational linguistics"
    ]
  }
];

export const projectsData = [
  {
    id: "hybrid-rag-assistant",
    title: "Multilingual Multimodal AI Knowledge Assistant with Hybrid RAG",
    subtitle: "Document Question-Answering & Hallucination Safeguard System",
    description:
      "An end-to-end multilingual multimodal RAG system with a FastAPI service layer and Streamlit interface to process documents and images and generate evidence-grounded responses.",
    technologies: ["Python", "FastAPI", "Streamlit", "BGE-M3", "Qdrant", "PaddleOCR", "LLMs"],
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/hybrid-rag-",
    details: [
      "Built an end-to-end multilingual multimodal RAG system with a FastAPI service layer and Streamlit interface to process documents and images.",
      "Implemented multilingual embeddings, hybrid retrieval, vector search, and reranking for relevant information retrieval.",
      "Developed citation-based generation and hallucination safeguards to verify LLM answers against source evidence."
    ]
  },
  {
    id: "concert-booking-system",
    title: "Concert Booking System",
    subtitle: "Full-Stack Java Enterprise Application",
    description:
      "A full-stack concert booking application using Java, JSP, Servlets, JDBC and MySQL, implementing authentication and dynamic booking workflows.",
    technologies: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "Apache Tomcat", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/concert-booking-",
    details: [
      "Developed a full-stack concert booking application using Java, JSP, Servlets, JDBC and MySQL, implementing authentication and dynamic booking workflows.",
      "Built backend and database operations for user management, seat availability, booking and cancellation.",
      "Deployed on Apache Tomcat with a responsive HTML, CSS and JavaScript frontend; performed debugging and functional testing."
    ]
  },
  {
    id: "restaurant-management-system",
    title: "Full-Stack Restaurant Management System",
    subtitle: "Complete Web Application with JWT & Embedded AI Chatbot",
    description:
      "An end-to-end web application built with React.js frontend and Node.js/Express.js backend for restaurant orders, reservations, menu management, and an AI-powered customer assistant.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "AI Chatbot"],
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/RESTAURANT-MANAGEMENT-",
    details: [
      "Built an end-to-end web application (React.js front end, Node.js/Express.js back end) for orders, reservations and menu management.",
      "Designed RESTful APIs and MongoDB data models with JWT authentication, request validation and database indexing.",
      "Debugged and tested issues across UI, API, and database layers; integrated an AI-powered chatbot across frontend and backend."
    ]
  },
  {
    id: "real-time-log-threat-analytics",
    title: "Real-Time Log Threat Analytics & Detection Pipeline",
    subtitle: "Security Token Parsing, Entropy Analysis & Risk Policy Gateway",
    description:
      "A hybrid NLP security pipeline utilizing spaCy Named Entity Recognition and Regular Expressions to detect PII and high-risk threat indicators in server logs.",
    technologies: ["Python", "Streamlit", "spaCy", "Regular Expressions", "Plotly", "NLP"],
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/cyberthreat-ai-project-",
    details: [
      "Built a hybrid NLP security pipeline using spaCy NER and Regex to detect PII and high-risk tokens in security logs.",
      "Developed a real-time Streamlit/Plotly dashboard with Shannon entropy analysis and a Policy Gateway for automated risk enforcement."
    ]
  },
  {
    id: "ai-car-price-prediction",
    title: "AI Car Price Prediction",
    subtitle: "Machine Learning Regression Modeling for Automotive Valuation",
    description:
      "An end-to-end supervised machine learning application predicting car prices from automotive parameters using Linear Regression, OneHotEncoder, and Streamlit.",
    technologies: ["Python", "Machine Learning", "Linear Regression", "OneHotEncoder", "Streamlit"],
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/AI-CAR-PREDICTITON-",
    details: [
      "Engineered data preprocessing and categorical feature encoding using OneHotEncoder.",
      "Trained and tuned a supervised Linear Regression model evaluated against automotive dataset benchmarks.",
      "Packaged the trained model into a responsive Streamlit application for real-time price estimation."
    ]
  },
  {
    id: "ecopulse",
    title: "EcoPulse",
    subtitle: "Software Carbon Emission Analysis & Optimization",
    description:
      "A machine learning and static code analysis application for estimating software carbon footprints using Python AST parsing, CodeCarbon tracking, and local LLMs.",
    technologies: ["Python", "Streamlit", "AST analysis", "CodeCarbon", "Machine Learning", "local LLMs"],
    githubUrl: "https://github.com/PRIYANKA-BALASUBRAMANIAN/ecopulse",
    details: [
      "Performs static code inspection via Python's AST module to detect resource-heavy computational loops.",
      "Integrates CodeCarbon tracking logic to calculate estimated energy usage and carbon emission metrics.",
      "Delivers an interactive Streamlit user interface with refactoring guidance powered by local language models."
    ]
  }
];

export const internshipsData = [
  {
    role: "AI Intern",
    company: "Edunet Foundation (Microsoft Internship Program)",
    duration: "05/2025 – 06/2025",
    description:
      "Worked on AI-focused development tasks in a cloud-based environment, applying programming, debugging and analytical problem-solving.",
    points: [
      "Worked on AI-focused development tasks in a cloud-based environment, applying programming, debugging and analytical problem-solving.",
      "Collaborated with mentors to understand requirements, develop solutions, troubleshoot issues and improve implementation."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "EI Systems (in association with Robokwik)",
    duration: "05/2024 – 06/2024",
    description:
      "Developed a responsive multimedia web application using HTML, CSS and JavaScript, implementing user-facing functionality.",
    points: [
      "Developed a responsive multimedia web application using HTML, CSS and JavaScript, implementing user-facing functionality.",
      "Debugged and refined frontend components while collaborating within a software development workflow."
    ]
  },
  {
    role: "Data Analytics Job Simulation Participant",
    company: "Deloitte (via Forage)",
    duration: "01/2026",
    description:
      "Completed a structured data analytics simulation involving data interpretation, analysis and business reporting.",
    points: [
      "Completed a structured data analytics simulation involving data interpretation, analysis and business reporting.",
      "Applied exploratory data evaluation and communicated insights through structured client deliverables."
    ]
  }
];

export const certificationsData = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    description: "Foundational networking principles, IPv4/IPv6 addressing, subnetting, network architectures and protocols."
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    description: "VLANs, inter-VLAN routing, STP, EtherChannel, DHCPv4/SLAAC, and secure wireless LAN configurations."
  },
  {
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle",
    description: "Validation of foundational cloud concepts, compute architecture, networking, security, and database infrastructure."
  },
  {
    title: "Microsoft AI Internship Credential",
    issuer: "Edunet Foundation (Supported by Microsoft)",
    description: "Practical recognition of cloud-based AI development, machine learning problem solving, and solution deployment."
  },
  {
    title: "SnowPro Associate: Platform",
    issuer: "Snowflake",
    description: "Cloud data platform architecture, data loading/unloading, virtual warehouses, security, and query optimization."
  }
];
