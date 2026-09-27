export interface Certification {
  id: number;
  title: string;
  issuer: string;
  partner?: string;
  duration: string;
  category: "Featured" | "Cloud" | "Business" | "AI";
  status: string;
  image: string;
  credential: string;
  featured: boolean;
  description: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Advanced Certification in Full Stack Data Science & AI",
    issuer: "IIT Guwahati",
    partner: "AlmaBetter",
    duration: "Dec 2024 – Jun 2025",
    category: "Featured",
    status: "Verified",
    image: "/certifications/iit-guwahati.jpg",
    credential: "#",
    featured: true,
    description:
      "Industry-oriented program covering Python, SQL, Machine Learning, Deep Learning, Generative AI, Data Engineering, MLOps, Cloud Computing and Full Stack Development.",
  },

  {
    id: 2,
    title: "AWS Academy Cloud Virtual Internship",
    issuer: "AWS Academy",
    partner: "EduSkills × AICTE",
    duration: "Oct 2025 – Dec 2025",
    category: "Cloud",
    status: "Completed",
    image: "/certifications/aws-academy.jpg",
    credential: "#",
    featured: false,
    description:
      "Completed a 10-week cloud internship focused on AWS Cloud fundamentals, infrastructure, networking and deployment.",
  },

  {
    id: 3,
    title: "Business Analyst Virtual Internship",
    issuer: "Celonis",
    partner: "EduSkills × AICTE",
    duration: "Apr 2026 – Jun 2026",
    category: "Business",
    status: "Completed",
    image: "/certifications/celonis.jpg",
    credential: "#",
    featured: false,
    description:
      "Worked on business analysis and process mining concepts using enterprise workflow optimization methodologies.",
  },

  {
    id: 4,
    title: "Generative AI, Deep Learning & Language Models Virtual Internship",
    issuer: "EduSkills Academy",
    partner: "AICTE National Internship Portal",
    duration: "Jun 2026 – Aug 2026",
    category: "AI",
    status: "Completed",
    image: "/certifications/generative-ai-internship.svg",
    credential: "",
    featured: false,
    description:
      "Completed an 8-week virtual internship focused on Generative AI, Deep Learning and Language Models through EduSkills Academy and the AICTE National Internship Portal.",
  },
];
