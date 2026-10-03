export const skillGroups = [
  { title: 'Programming languages', skills: ['Java (Basic)', 'JavaScript'] },
  { title: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vite', 'Responsive Web Design'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Socket.IO'] },
  { title: 'Databases', skills: ['MongoDB', 'MySQL', 'SQL'] },
  { title: 'AI / LLM · project use & ongoing learning', skills: ['Generative AI', 'LLM Application Development', 'Gemini API', 'RAG Concepts', 'Vector Databases', 'Pinecone', 'AI Chatbot Development', 'Prompt-based AI Applications'] },
  { title: 'Tools & platforms', skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render'] },
]

export const summary = 'Computer Science graduate with hands-on experience building web applications using JavaScript, React.js, Node.js, Express.js, MongoDB, and SQL. Developed full-stack projects in e-commerce and AI-powered applications. Interested in Full Stack and MERN Stack development, LLM applications, and Generative AI. A quick learner and problem solver who enjoys learning new technologies and building practical, user-focused solutions.'

export const projects = [
  {
    name: 'Trisha AI',
    type: 'AI-powered conversational assistant',
    description: 'A ChatGPT-style assistant built with a React and Vite frontend and a Node.js and Express backend.',
    resumeDescription: 'AI assistant with JWT login, saved conversations, Gemini API, Socket.IO, Pinecone-based retrieval, and document and image attachments.',
    image: '/trisha-ai-preview.png',
    imageAlt: 'Screenshot of the Trisha AI deployed chat interface.',
    mediaLabel: 'TRISHA AI / LIVE APP CAPTURE',
    technologies: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Gemini API', 'Pinecone', 'JWT', 'REST APIs'],
    features: [
      'User registration, login, and JWT authentication',
      'AI conversations, chat history, memory, and message edit/regenerate',
      'Real-time communication with Socket.IO and MongoDB conversation storage',
      'Gemini API with RAG and Pinecone vector search',
      'PDF, DOCX, TXT, and image attachments with AI document understanding',
    ],
    demo: 'https://chatgpt-prjct-1-cohrat-2.onrender.com/',
    github: 'https://github.com/PranshuUrmaliya2004/Chatgpt-prjct-1-cohrat',
    featured: true,
  },
  {
    name: 'ShopNex',
    type: 'MERN stack e-commerce website',
    description: 'A full-stack clothing store with product browsing, shopping flows, and administration features.',
    resumeDescription: 'MERN clothing store with product browsing, cart, authentication, admin and order management, and a checkout payment-method interface.',
    image: '/shopnex-preview.png',
    imageAlt: 'Screenshot of the ShopNex clothing storefront.',
    mediaLabel: 'SHOPNEX / LIVE APP CAPTURE',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'REST APIs'],
    features: [
      'Product browsing, product details, and shopping cart',
      'User authentication, admin functionality, and order management',
      'Checkout flow with a payment-method interface',
      'Responsive shopping interface',
    ],
    demo: 'https://shopnex-frontend.vercel.app/',
    github: 'https://github.com/PranshuUrmaliya2004/E-Commerce--website',
    featured: true,
  },
  {
    name: 'Quick Converter',
    type: 'Currency and unit conversion web app',
    description: 'A simple, interactive web application for converting currency and unit values.',
    resumeDescription: 'Interactive currency and unit converter built with HTML, CSS, JavaScript, and API integration.',
    mediaLabel: 'QUICK CONVERTER / PROJECT VISUAL',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    features: ['Interactive conversion interface', 'Currency and unit conversion', 'API integration'],
    visual: 'converter',
  },
]

export const internships = [
  {
    title: 'SQL Internship',
    organization: '',
    date: '10 days',
    description: 'Practical learning in SQL queries, database concepts, data retrieval, filtering, sorting, and basic database operations.',
  },
  {
    title: 'IT / Computer Software Internship',
    organization: 'Arist Automation',
    date: '24 June 2024 - 04 July 2024',
    description: 'Focused on MySQL fundamentals, database concepts, SQL queries, and practical database learning.',
  },
]

export const education = [
  {
    title: 'Bachelor of Technology, Computer Science and Engineering',
    organization: 'Sagar Institute of Research & Technology - Excellence (SIRT), Bhopal',
    date: 'University: Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)',
  },
  {
    title: 'Higher Secondary (12th), MP Board',
    organization: '81.6% · Physics 81 · Chemistry 81 · Mathematics 88',
    date: '2022',
  },
  {
    title: 'Secondary (10th), MP Board',
    organization: '86.5%',
    date: '2020',
  },
]

export const certifications = [
  {
    title: 'GenAI Data Analytics Job Simulation',
    organization: 'Tata / Forage',
    date: 'September 2025',
    description: 'Practical job simulation covering Generative AI and data analytics.',
  },
  {
    title: 'IT / Computer Software Internship Certificate',
    organization: 'Arist Automation',
    date: '24 June 2024 - 04 July 2024',
    description: 'MySQL and computer software internship certificate.',
  },
]

export const githubUrl = 'https://github.com/PranshuUrmaliya2004'
export const linkedInUrl = 'https://linkedin.com/in/pranshu-urmaliya-7046b328'
export const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT
