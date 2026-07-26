export const personalInfo = {
  name: "Danilo Álvarez Jiménez",
  email: "alvarezjimenezdanilo@gmail.com",
  github: "https://github.com/AJDanilo",
  linkedin: "https://www.linkedin.com/in/danilo-a-j-43144938a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  resume: "/Rishikesh_S_Software_Engineer_Resume.pdf", //Me falta añadir mi resume, o decir que no lo queiro colocar
  profilePicture: "/profile.jpg",
  heroDescription:
    "Hello: I essentially consider myself a very curious person and an artist. That's why I decided to become an economist, because history, philosophy, and numbers, from my point of view, require a strong artistic intelligence. Economic models and economic thinking are pure creativity. On this website, I want you to get to know a bit more about me, so I'm sharing not only my professional background, but also some of my writings and art.",
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
      "I carried out a project, seeking a reduction in the consumption of a cleaning supply",
 
    ],
    stack: [
      "Advanced Excel",
      "Power BI",
      "Python in Excel",
    
    ],
  },

];

export const education = [
  {
    institution: "Universidad del Valle",
    location: "Cali, Colombia",
    degree: "Economist",
    period: "Aug 2020 - Mar 2026",
    achievements: [
      "Served as a member of the academic committee of the ECONS economics student group.",
      "Organized technical workshops and student events.",

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
    name: "Concurso de cuento corto",
    issuer: "Universidad del Valle",
    date: "Nov 2016",
    type: "National",
    position: "First Runner-up",
  },

];
