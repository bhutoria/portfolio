export const NAME = "Varun Bhutoria";

export const ROLE = "Full Stack Developer";

export const PROFILE_PHOTO = "/profile.png";

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/varun-bhutoria-b655b3302/",
  github: "https://github.com/bhutoria",
};

export const LANGUAGES = ["TypeScript", "JavaScript", "Python"];

export const TECHNOLOGIES = [
  "Langchain",
  "AWS",
  "GCP",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Postgres",
  "Tailwind",
  "Git",
  "Docker",
  "Kubernetes",
];

export type Experience = {
  icon: string;
  position: string;
  company: string;
  duration: string;
  technologies: string[];
  achievements: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    icon: "/trip-hive.png",
    position: "Full Stack AI Intern",
    company: "Trip Hive AI",
    duration: "Apr 2024 - Present",
    technologies: ["Next.js", "Crew AI", "AWS", "GCP", "Docker"],
    achievements: [
      "Developed and deployed a full-featured web application using NextJS.",
      "Integrated AI technologies to auto-generate personalized travel itineraries, enhancing user engagement and satisfaction.",
      "Implemented Mapbox for advanced mapping and navigation features, improving the application's usability and interactivity.",
      "Set up CI/CD pipelines for automated checks, and deployment, ensuring continuous integration and smooth deployment using AWS.",
    ],
  },
  {
    icon: "/anmol.png",
    position: "Campaign Manager",
    company: "Rajpal Food Products",
    duration: "Jan 2023 - Mar 2024",
    technologies: [],
    achievements: [
      "Spearheaded marketing efforts to increase brand awareness by 60%.",
      "Analyzed data to reduce Logistical costs by 30%.",
      "Worked closely with production and sales teams to align brand messaging.",
    ],
  },
  {
    icon: "/national.png",
    position: "Marketing Manager",
    company: "National Trading Co",
    duration: "Jan 2021 - Dec 2022",
    technologies: [],
    achievements: [
      "Designed and implemented systems which lead to 3x improve in operational efficiency.",
      "Marketed door to door which led to 2x increase in Sales.",
    ],
  },
  {
    icon: "/celestial.jpg",
    position: "Web Developer",
    company: "Celestial Exhibit",
    duration: "Oct 2019 - Dec 2020",
    technologies: ["PHP", "Laravel", "MySQL", "CSS", "JavaScript"],
    achievements: [
      "Pivoted exhibitions company's operations online during COVID through web development.",
      "Ensured smooth integration of payment gateways, registration systems.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  repo: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Coding Playgrounds",
    description:
      "A platform for learning and practicing coding through interactive coding environments similar to Replit.",
    technologies: [
      "AWS EKS",
      "AWS ECR",
      "Docker",
      "Next.js",
      "Tailwind",
      "Postgres",
    ],
    repo: "https://github.com/bhutoria/playgrounds-web",
  },
  {
    name: "Zapier Clone",
    description: "Automation tool similar to Zapier and n8n",
    technologies: ["Kafka", "Docker", "Node.js", "React", "MongoDB"],
    repo: "",
  },
];
