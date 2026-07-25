export const personalInfo = {
  name: "Danilo A.J.",
  email: "rkesh2003@gmail.com",
  github: "https://github.com/rkeshs",
  linkedin: "https://www.linkedin.com/in/rishikeshs/",
  resume: "/Rishikesh_S_Software_Engineer_Resume.pdf",
  profilePicture: "/profile.jpg",
  heroDescription:
    "Soy economista",
};

export const workExperience = [
  {
    company: "Kenvue",
    location: "Yumbo, Colombia",
    position: "Process Engineering Intern ",
    period: "Sep 2025 - Mar 2026",
    achievements: [

      "I provided support in the analysis of input savings reports and production processes at the plant.",
      "I automated the analysis of parameter indicators and cycle times, achieving automated reports.",
      " I carried out a project, seeking a reduction in the consumption of a cleaning supply",
 
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Bun",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
      "AWS Lambda",
      "Stripe Connect",
      "Trigger.dev",
      "Remotion",
      "Tinybird",
      "Vitest",
      "Playwright",
      "GitHub Actions",
      "Sentry",
      "PostHog",
    ],
  },
  {
    company: "DevCrew",
    location: "Coimbatore, India",
    position: "Freelance Software Developer",
    period: "Mar 2023 - Mar 2024",
    achievements: [
      "Built responsive React interfaces and JavaScript features across client projects.",
      "Improved load times and data-fetching efficiency by optimizing frontend code.",
    ],
    stack: ["JavaScript", "React", "HTML & CSS", "REST APIs"],
  },
];

export const education = [
  {
    institution: "Sri Krishna College of Engineering and Technology",
    location: "Coimbatore, India",
    degree: "Bachelor of Technology in Information Technology",
    period: "Jun 2021 - Jun 2025",
    achievements: [
      "Served as President of the Department of Information Technology.",
      "Represented the institution as a G20 student delegate.",
      "Organized technical workshops and student events.",
      "Represented the college at national and international hackathons, earning multiple awards.",
    ],
  },
];
export const skills = [
  {
    label: "Languages",
    items: ["Spanish (native speaker)", "English (Advanced)", "French (Advanced)"],
  },
  {
    label: "Software",
    items: ["R-Studio", "Advanced Excel", "Power BI", "Python", "Latex"],
  },

];

export const selectedWork = [
  {
    title: "Automated media workflows",
    context: "Production automation",
    summary:
      "An event-driven production pipeline that combines AI APIs, voice generation, distributed video rendering, and scheduled publishing.",
    stack: ["TypeScript", "Remotion", "Trigger.dev", "AWS Lambda", "AI APIs", "Text-to-Speech"],
    description: [
      "Orchestrated long-running jobs across Trigger.dev and AWS Lambda for AI generation, voice synthesis, Remotion rendering, cleanup, progress tracking, and publishing.",
      "Integrated AI APIs and text-to-speech services behind validated, typed contracts so assets could be generated and rendered consistently.",
      "Added test-render tools, deployment workflows, monitoring, retries, and recovery tooling for failed or partial jobs.",
    ],
  },
  {
    title: "Employee insurance registration",
    context: "Regulated workflows",
    summary:
      "A production registration system that turns complex employee data and insurer rules into traceable submissions across multiple delivery channels.",
    stack: ["TypeScript", "React", "PostgreSQL", "Provider APIs", "PDF & CSV", "Playwright"],
    description: [
      "Designed connected workflows for employer forms, internal review tools, and provider-specific submission paths while keeping registration rules consistent across applications.",
      "Built a shared pipeline for API, PDF, and CSV providers with validation, document generation, delivery records, and status handling.",
      "Added German and English journeys, submission history, retry-safe delivery, artifact regeneration, and operator recovery tools for failed or partial submissions.",
    ],
  },
  {
    title: "Online store and payments",
    context: "Commerce platform",
    summary:
      "A production commerce platform that handles store setup, connected payments, secure fulfillment, and seller operations for digital products.",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tinybird"],
    description: [
      "Built configurable store themes, the public storefront, seller administration, and secure support tools.",
      "Designed Stripe Connect checkout and retry-safe fulfillment to protect delivery during retries and interrupted purchases.",
      "Added product analytics, feature flags, secure impersonation controls, and end-to-end test coverage in CI.",
    ],
  },
];

export const awards = [
  {
    name: "Prodigi Cognizant Hackathon",
    issuer: "Cognizant",
    date: "Feb 2023",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Cisco Thingqbator Hackathon",
    issuer: "Cisco",
    date: "Jan 2023",
    type: "National",
    position: "First Runner-up",
  },
  {
    name: "IEEE YESIST12 Hackathon",
    issuer: "IEEE",
    date: "Sep 2022",
    type: "International",
    position: "Second Place",
  },
];
