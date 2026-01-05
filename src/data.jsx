import { Code, Database, Brain, Server, Layout, Terminal } from 'lucide-react';

export const personalDetails = {
  name: "Imashi Dissanayake",
  title: "Data Science Undergraduate ",
  email: "imashidiss@gmail.com",
  // Updated Links
  github: "https://github.com/ImashiDiss", 
  linkedin: "https://www.linkedin.com/in/imashi-dissanayake-bb3b07339/",
  phone: "94775266672",
  about: "I am Imashi Dissanayake, a motivated undergraduate pursuing a BSc (Hons) in Information Technology, specializing in Data Science, with a GPA of 3.4 at SLIIT. I am passionate about transforming data into actionable insights and have hands-on experience in data analytics, business analytics, visualization, and reporting using tools like Python, SQL, Tableau, Power BI, and Excel.",
};

export const skills = [
  {
    category: "Data Analytics & Business Analytics:",
    icon: <Brain className="w-6 h-6" />,
    items: ["Python (pandas, NumPy, matplotlib, seaborn)", "SQL", "Excel", "Power BI", "Predictive Modeling", "Customer Segmentation", "Data Visualization", "Statistical Analysis"]
  },
  {
    category: "Databases & Tools",
    icon: <Layout className="w-6 h-6" />,
    items: ["MySQL", "MongoDB", "Git & GitHub", "VS Code", "Android Studio", "Eclipse", "Jupyter Notebook", "RStudio"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Server className="w-6 h-6" />,
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "Hadoop/Spark"]
  },
 
];

export const projects = [
  {
    id: 1,
    title: "Agentic AI Fashion Trend Predictor",
    description: "Full-stack AI system predicting global fashion trends using social media data, OpenAI GPT-4o, and Google Gemini APIs.",
    tags: ["FastAPI", "React", "PostgreSQL", "GenAI"],
    // Add your actual repo link here
    github: "https://github.com/ImashiDiss/fashion-backend.git", 
  },
  {
    id: 2,
    title: "RetailIQ - Sales Prediction",
    description: "End-to-end predictive modeling system for retail sales using LightGBM with automated cleaning and customer segmentation.",
    tags: ["Python", "Machine Learning", "LightGBM", "Data Engineering"],
    github: " https://github.com/ImashiDiss/fdm_mini_project_2025",
  },
  
  {
    id: 3,
    title: "Supermarket Aisle Navigation System",
    description: "MERN stack inventory management dashboard allowing managers to track product data efficiently.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/ImashiDiss/fashion-backend.git",
  }
    
];

export const certifications = [
  {
    title: "Data Engineering on AWS - Foundations",
    issuer: "Amazon Web Services (AWS)",
    type: "Certification"
  },
  {
    title: "AWS SimuLearn - Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    type: "Certification"
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa, Sri Lanka",
    type: "Certification"
  },
  {
    title: "ICT Skills Training Program",
    issuer: "University of Peradeniya",
    type: "Certification"
  },
  {
    title: "Finalist (Ranked 14th) - SLIIT Xtreme 4.0",
    issuer: "IEEEXtreme Hackathon 2025",
    type: "Achievement"
  }
  
];
