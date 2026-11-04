/**
 * ============================================================================
 * JAFAR ABUBAKAR — PERSONAL BRAND CONTENT CONFIGURATION
 * ============================================================================
 * This file is the single source of truth for all text, links, experience,
 * projects, skills, and contact configuration across the website.
 *
 * HOW TO UPDATE:
 * 1. To add your direct email address: update `contact.email` below (e.g. "jafar@example.com").
 * 2. To add a new public project: append a new item to the `projects` array below.
 * 3. To swap your portrait photo: replace `/public/images/jafar-abubakar.jpg`.
 */

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: "Operating Venture" | "AI & Automation" | "Machine Learning" | "AgriTech & Ventures";
  visibility: "Public" | "Private / Undisclosed" | "Exploration & Architecture";
  role?: string;
  status: string;
  summary: string;
  details: string[];
  tags: string[];
  link?: {
    label: string;
    url: string;
  };
  logo?: string;
  featured?: boolean;
}

export interface ResponsibilityItem {
  number: string;
  title: string;
  description: string;
  domain: string;
}

export interface VisionPillar {
  index: string;
  title: string;
  horizon: string;
  thesis: string;
  focusAreas: string[];
}

export const siteContent = {
  meta: {
    name: "Jafar Abubakar",
    role: "AI Engineer & Entrepreneur",
    tagline: "Building intelligent technology that creates real-world value.",
    description:
      "Jafar Abubakar is an AI engineer and entrepreneur exploring how artificial intelligence, software engineering, and workflow automation can solve real-world problems, transform business operations, and build enduring technology companies.",
    siteUrl: "https://jafarabubakar.com", // Update with your final production domain when deployed
    locale: "en_US",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Ventures & Work", href: "#projects" },
    { label: "Capabilities", href: "#expertise" },
    { label: "Vision", href: "#vision" },
    { label: "Connect", href: "#contact" },
  ],

  hero: {
    eyebrow: "Jafar Abubakar — AI Engineer & Entrepreneur",
    headline: "Building intelligent technology that creates real-world value.",
    introduction:
      "I'm Jafar Abubakar, an AI engineer and entrepreneur exploring how artificial intelligence and technology can solve meaningful problems, transform businesses, and create opportunities for the future.",
    descriptors: [
      {
        label: "AI Engineering",
        detail: "Python, Machine Learning & Applied AI Systems",
      },
      {
        label: "Business Automation",
        detail: "APIs, Intelligent Workflows & Operational Infrastructure",
      },
      {
        label: "Entrepreneurship",
        detail: "Problem-First Ventures in Business & Agriculture",
      },
    ],
    currentRoleBadge: {
      title: "Chief Technology Officer (CTO)",
      organization: "Scholarship Gate SG",
      url: "https://scholarshipgatesg.com",
    },
    portrait: {
      src: "/images/jafar-abubakar.jpg",
      fullSrc: "/images/jafar-abubakar-full.jpg",
      alt: "Jafar Abubakar — AI Engineer and Entrepreneur",
      caption: "Jafar Abubakar · AI Engineer & CTO at Scholarship Gate SG",
    },
    ctas: {
      primary: {
        label: "Explore Selected Work",
        href: "#projects",
      },
      secondary: {
        label: "Start a Conversation",
        href: "#contact",
      },
    },
  },

  about: {
    sectionNumber: "01",
    sectionLabel: "Biography & Perspective",
    headline: "Technically grounded in artificial intelligence. Focused on practical business impact.",
    leadParagraph:
      "My work sits at the intersection of artificial intelligence engineering and real-world business execution. Rather than treating technology as an abstract academic exercise, I focus on how intelligent systems, APIs, and automation can remove operational bottlenecks and create measurable utility.",
    narrative: [
      "As an undergraduate student studying Artificial Intelligence, I am building a rigorous foundation in Python, machine learning, and modern AI tooling. Alongside my studies, I apply these technical capabilities directly in an operating business environment—bridging the gap between theoretical computing and day-to-day commercial operations.",
      "In my role as Chief Technology Officer at Scholarship Gate SG, an operating scholarship agency, I oversee technical development, digital infrastructure, AI integration, and workflow automation. Designing systems that match prospective students with suitable university opportunities and streamline internal operations has shaped how I think about software: technology is most valuable when it solves a concrete problem reliably.",
      "Speaking four languages—Hausa natively, English and Chinese fluently, and conversational Arabic—allows me to navigate diverse technical, academic, and commercial environments across cultures. Looking ahead, my long-term ambition is to build enduring technology companies, particularly in business operations and agriculture, where intelligent software can unlock new efficiency and opportunity.",
    ],
    keyPillars: [
      {
        label: "Academic Foundation",
        value: "Undergraduate Studies in Artificial Intelligence",
        note: "Focused on machine learning, Python engineering, and applied AI systems.",
      },
      {
        label: "Operating Role",
        value: "CTO at Scholarship Gate SG",
        note: "Leading digital infrastructure, AI workflows, and targeting systems in an active agency.",
      },
      {
        label: "Global Communication",
        value: "Multilingual Fluency Across 4 Languages",
        note: "Native Hausa, Fluent English, Fluent Chinese (中文), and Conversational Arabic.",
      },
      {
        label: "Long-Term Direction",
        value: "Company Building in Business & AgriTech",
        note: "Committed to founding practical, technology-driven ventures that solve foundational problems.",
      },
    ],
  },

  experience: {
    sectionNumber: "02",
    sectionLabel: "Operating Experience",
    headline: "Applying AI and software architecture inside a live business environment.",
    featuredRole: {
      company: "Scholarship Gate SG",
      position: "Chief Technology Officer (CTO)",
      type: "Operating Scholarship Agency · Executive Technical Leadership",
      website: "https://scholarshipgatesg.com",
      logo: "/images/scholarship-gate-logo.jpg",
      summary:
        "Scholarship Gate SG is a scholarship agency leveraging technology and AI to help identify relevant scholarship opportunities, connect students with suitable universities, and improve operational efficiency.",
      contextNote:
        "Responsible for the agency's end-to-end technical direction, translating operational challenges into automated digital workflows and intelligent matching systems.",
      responsibilities: [
        {
          number: "01",
          title: "Technical Development",
          domain: "Software & Systems",
          description:
            "Designing, building, and maintaining the core digital tools and web systems that support client-facing and internal agency operations.",
        },
        {
          number: "02",
          title: "AI Integration",
          domain: "Applied Intelligence",
          description:
            "Deploying practical artificial intelligence tools into daily business workflows to assist with information synthesis, screening, and operational execution.",
        },
        {
          number: "03",
          title: "Student & University Targeting Systems",
          domain: "Opportunity Matching",
          description:
            "Structuring data-driven processes to identify relevant scholarship programs, connect students with suitable universities, and reach prospective applicants effectively.",
        },
        {
          number: "04",
          title: "Workflow Automation",
          domain: "Operational Efficiency",
          description:
            "Automating repetitive administrative, communication, and document-handling tasks so the team can focus on high-value student advisory.",
        },
        {
          number: "05",
          title: "Digital Infrastructure",
          domain: "Platform Reliability",
          description:
            "Managing the technical stack, API integrations, and digital presence that keep the organization's operations organized, secure, and scalable.",
        },
      ] as ResponsibilityItem[],
    },
  },

  projects: {
    sectionNumber: "03",
    sectionLabel: "Projects & Ventures",
    headline: "Selected ventures, technical systems, and ongoing build tracks.",
    subheadline:
      "I prioritize building functional systems with real operational utility. Some internal business automation systems and early venture prototypes remain private due to commercial confidentiality; public initiatives and active build tracks are documented below.",
    categories: [
      "All",
      "Operating Venture",
      "AI & Automation",
      "Machine Learning",
      "AgriTech & Ventures",
    ] as const,
    items: [
      {
        id: "scholarship-gate-sg",
        index: "01",
        title: "Scholarship Gate SG",
        subtitle: "AI-Enabled Scholarship Discovery, University Matching & Agency Operations",
        category: "Operating Venture",
        visibility: "Public",
        role: "Chief Technology Officer (CTO)",
        status: "Active Operating Venture",
        logo: "/images/scholarship-gate-logo.jpg",
        featured: true,
        summary:
          "An operating scholarship agency that identifies suitable scholarship opportunities, connects students with relevant universities, targets prospective students, and improves day-to-day business operations through AI tools and workflow automation.",
        details: [
          "Architected the digital infrastructure and web platform supporting international scholarship discovery and student intake.",
          "Integrated AI tools and automated workflows to streamline opportunity identification and prospective student targeting.",
          "Built internal operational pipelines that connect student profiles with relevant university programs and reduce manual processing overhead.",
        ],
        tags: [
          "AI Integration",
          "Workflow Automation",
          "Digital Infrastructure",
          "Targeting Systems",
          "EdTech Operations",
        ],
        link: {
          label: "Visit scholarshipgatesg.com",
          url: "https://scholarshipgatesg.com",
        },
      },
      {
        id: "business-automation-systems",
        index: "02",
        title: "Internal Business & Workflow Automation Systems",
        subtitle: "API-Driven Operational Pipelines & Intelligent Process Automation",
        category: "AI & Automation",
        visibility: "Private / Undisclosed",
        status: "Private Operational Systems",
        summary:
          "Custom automation workflows and API integrations developed for internal business operations. Designed to eliminate repetitive manual coordination, structure incoming inquiries, and connect modern AI models with operational tools.",
        details: [
          "Programmatic orchestration using Python and REST APIs to bridge communication and data-handling workflows.",
          "Applied AI tooling for structured document processing, operational synthesis, and automated task routing.",
          "Maintained as private internal infrastructure to protect proprietary business workflows.",
        ],
        tags: ["Python", "REST APIs", "AI Automation", "AI Tools", "Business Operations"],
      },
      {
        id: "applied-ml-ai-engineering",
        index: "03",
        title: "Applied Machine Learning & AI Engineering Lab",
        subtitle: "Foundational Models, Predictive Pipelines & Experimental Software",
        category: "Machine Learning",
        visibility: "Exploration & Architecture",
        status: "Ongoing Technical Development",
        summary:
          "Ongoing engineering exploration and model experimentation grounded in my Artificial Intelligence curriculum and independent technical research—focused on translating machine learning concepts into deployable software components.",
        details: [
          "Developing Python-based machine learning pipelines, data processing workflows, and API-connected AI applications.",
          "Evaluating emerging AI models and developer tools for practical reliability in resource-conscious business environments.",
          "Structured as a continuous engineering track; selected open-source modules are published to GitHub as they mature.",
        ],
        tags: ["Python", "Machine Learning", "APIs", "Applied AI"],
        link: {
          label: "View GitHub Profile",
          url: "https://github.com/Abujaphar01",
        },
      },
      {
        id: "agritech-venture-thesis",
        index: "04",
        title: "Agricultural Technology & Supply-Chain Intelligence",
        subtitle: "Future Venture Track — AI & Data Systems for Modern Agriculture",
        category: "AgriTech & Ventures",
        visibility: "Exploration & Architecture",
        status: "Long-Term Venture Focus",
        summary:
          "A dedicated exploration track examining how artificial intelligence, accessible mobile interfaces, and data-driven automation can address productivity, market access, and operational challenges in agriculture.",
        details: [
          "Investigating practical AI applications for crop intelligence, agricultural advisory, and agribusiness workflow coordination.",
          "Focused on designing resilient, accessible technology tailored to real-world agricultural producers and supply chains.",
          "Open to research dialogue, domain mentorship, and early-stage collaboration with agricultural and technology leaders.",
        ],
        tags: ["Agricultural Technology", "AI Entrepreneurship", "Real-World Solutions", "Venture Research"],
      },
    ] as ProjectItem[],
  },

  expertise: {
    sectionNumber: "04",
    sectionLabel: "Skills & Capabilities",
    headline: "A disciplined combination of technical execution, commercial judgment, and cross-cultural fluency.",
    subheadline:
      "Capabilities are presented transparently without arbitrary percentage bars—reflecting what I actively build with, how I work with teams, and the languages in which I operate.",
    technical: [
      {
        name: "Python",
        category: "Core Language",
        description:
          "Primary language for backend scripting, data processing, machine learning experimentation, and workflow automation.",
      },
      {
        name: "Machine Learning",
        category: "AI Foundation",
        description:
          "Academic and practical grounding in supervised and unsupervised learning, model evaluation, and data-driven pattern recognition.",
      },
      {
        name: "APIs & System Integration",
        category: "Architecture",
        description:
          "Connecting software services, third-party platforms, and AI models via RESTful APIs to create unified operational pipelines.",
      },
      {
        name: "Artificial Intelligence Tools",
        category: "Applied AI",
        description:
          "Selecting, prompting, and embedding modern LLM and generative AI systems into practical business and research workflows.",
      },
      {
        name: "AI Automation",
        category: "Operations",
        description:
          "Designing end-to-end automated processes that reduce manual overhead in outreach, targeting, data organization, and operations.",
      },
      {
        name: "Technology-Driven Business Solutions",
        category: "Commercial Application",
        description:
          "Translating business bottlenecks into pragmatic technical specifications and reliable digital infrastructure.",
      },
    ],
    professional: [
      {
        name: "Problem-Solving",
        description:
          "Breaking down ambiguous operational or technical challenges into structured, solvable engineering steps.",
      },
      {
        name: "Entrepreneurial Thinking",
        description:
          "Evaluating technology through the lens of customer utility, operational efficiency, and long-term business value.",
      },
      {
        name: "Leadership",
        description:
          "Directing technical priorities and digital infrastructure as CTO at Scholarship Gate SG with clarity and accountability.",
      },
      {
        name: "Communication",
        description:
          "Articulating complex technical concepts clearly to non-technical stakeholders, partners, and clients across four languages.",
      },
      {
        name: "Learning & Adaptability",
        description:
          "Rapidly assimilating new AI frameworks, software tools, and domain requirements in fast-moving environments.",
      },
      {
        name: "Optimism",
        description:
          "Approaching difficult problems and long-term venture building with constructive energy, resilience, and forward momentum.",
      },
    ],
    languages: [
      {
        language: "Hausa",
        nativeScript: "Harshen Hausa",
        proficiency: "Native",
        context: "Mother tongue; deep cultural and commercial fluency.",
      },
      {
        language: "English",
        nativeScript: "English",
        proficiency: "Fluent",
        context: "Primary language for software engineering, business leadership, and international collaboration.",
      },
      {
        language: "Chinese",
        nativeScript: "中文 (普通话)",
        proficiency: "Fluent",
        context: "Academic, technical, and cross-border institutional communication.",
      },
      {
        language: "Arabic",
        nativeScript: "العربية",
        proficiency: "Conversational",
        context: "Everyday dialogue and regional cross-cultural engagement.",
      },
    ],
  },

  vision: {
    sectionNumber: "05",
    sectionLabel: "Vision & Long-Term Interests",
    headline: "Where I am looking next: building enduring technology companies in business and agriculture.",
    intro:
      "While my immediate focus is deepening my engineering foundation in Artificial Intelligence and scaling technical operations at Scholarship Gate SG, my long-term trajectory is centered on company building. I am interested in sectors where practical intelligence can transform foundational industries.",
    pillars: [
      {
        index: "I",
        title: "Applied Artificial Intelligence",
        horizon: "Core Technical Discipline",
        thesis:
          "Moving beyond surface-level novelty to build AI systems that are dependable, context-aware, and deeply integrated into how organizations make decisions and execute work.",
        focusAreas: ["Intelligent Agents & Workflows", "Applied Machine Learning", "Reliable API Architectures"],
      },
      {
        index: "II",
        title: "Business Transformation & Automation",
        horizon: "Immediate Commercial Impact",
        thesis:
          "Many growing businesses are constrained not by lack of ambition, but by manual, fragmented processes. I focus on designing automation architecture that compounds team productivity.",
        focusAreas: ["Operational Process Design", "AI-Assisted Targeting & CRM", "Digital Infrastructure"],
      },
      {
        index: "III",
        title: "Agricultural Innovation (AgriTech)",
        horizon: "Long-Term Venture Ambition",
        thesis:
          "Agriculture remains one of the most vital yet technologically underserved sectors. Leveraging AI, data intelligence, and accessible software to modernize agricultural production and value chains is a central long-term ambition.",
        focusAreas: ["Data-Driven Agribusiness", "Supply Chain Efficiency", "Accessible Producer Technology"],
      },
      {
        index: "IV",
        title: "Technology Entrepreneurship",
        horizon: "Founder Trajectory",
        thesis:
          "Building valuable companies requires both technical depth and commercial discipline. I am committed to the long-term craft of identifying real-world problems and building durable ventures around them.",
        focusAreas: ["Problem-First Ventures", "Cross-Border Ecosystems", "Sustainable Company Building"],
      },
    ] as VisionPillar[],
  },

  contact: {
    sectionNumber: "06",
    sectionLabel: "Initiate a Conversation",
    headline: "Open to meaningful collaborations, automation inquiries, and long-term connections.",
    introduction:
      "Whether you are a business owner exploring AI automation, a founder or investor interested in emerging technology ventures, a recruiter seeking technically grounded AI talent, or a mentor willing to share perspective—I welcome thoughtful conversation.",
    /**
     * ========================================================================
     * EMAIL, WHATSAPP & FORM BACKEND CONFIGURATION
     * ========================================================================
     */
    email: "abujaphar01@gmail.com",
    whatsapp: {
      url: "https://wa.me/2347048105795",
      display: "+234 704 810 5795",
    },
    formspreeEndpoint: "", // <-- OPTIONAL: Add a Formspree/Web3Forms URL for direct server submission

    welcomeTopics: [
      {
        title: "Business & AI Automation Inquiries",
        description: "Exploring workflow automation, AI integration, or digital infrastructure for your organization.",
      },
      {
        title: "Startup & Venture Collaborations",
        description: "Co-building, technical partnership, or early-stage discussions in AI, business tech, and AgriTech.",
      },
      {
        title: "Mentorship & Executive Connections",
        description: "Connecting with experienced founders, engineers, and industry leaders for perspective and growth.",
      },
      {
        title: "Engineering & Internship Opportunities",
        description: "Roles and projects requiring a technically grounded AI engineer with real operational experience.",
      },
    ],

    socials: [
      {
        platform: "LinkedIn",
        handle: "Jafar Abubakar",
        url: "https://www.linkedin.com/in/jafar-abubakar-51b42927a/",
        description: "Primary channel for professional correspondence, business inquiries, and executive networking.",
        primary: true,
      },
      {
        platform: "GitHub",
        handle: "@Abujaphar01",
        url: "https://github.com/Abujaphar01",
        description: "Code repositories, Python scripts, AI engineering experiments, and technical work.",
        primary: false,
      },
      {
        platform: "Scholarship Gate SG",
        handle: "scholarshipgatesg.com",
        url: "https://scholarshipgatesg.com",
        description: "Official platform where I serve as Chief Technology Officer (CTO).",
        primary: false,
      },
    ],
  },
};
