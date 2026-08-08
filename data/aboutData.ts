export interface AboutData {
    title: string;
    subtitle: string;
    bio: string;
    cards: {
        title: string;
        desc: string;
        institute: string;
        year: string;
        badge?: string;
    }[];
    interests: string[];
}

export const personalAboutData: AboutData = {
    title: "About Me",
    subtitle: "Building modern full-stack web applications & smart IoT systems.",
    bio: "Results-driven Software Engineering Undergraduate with hands-on industry experience as a Full-Stack Developer Intern. Proficient in building scalable web applications using the MERN Stack, Next.js, and NestJS[cite: 1]. I specialize in modern backend architectures, secure JWT authentications, and bridging software with IoT hardware like ESP32[cite: 1].",
    cards: [
        {
            title: "Industry Experience",
            desc: "Full-Stack Software Engineering Intern",
            institute: "Wise Soft Lab",
            year: "Nov 2025 – April 2026",
            badge: "Internship"
        },
        {
            title: "Education & Degree",
            desc: "B.Sc. (Hons) in Software Engineering",
            institute: "National Institute of Business Management (NIBM)",
            year: "Expected Graduation: 2027",
            badge: "Academic"
        },
        {
            title: "Full-Stack Tech Stack",
            desc: "MERN Stack, Next.js & NestJS",
            institute: "TypeScript, Tailwind CSS, MongoDB, PostgreSQL",
            year: "Production-Level Development[cite: 1]",
            badge: "Core Stack"
        },
        {
            title: "IoT & Hardware Integration",
            desc: "Smart Automation & Monitoring Systems",
            institute: "ESP32, Arduino, Firebase",
            year: "Hardware-Software Solutions[cite: 1]",
            badge: "Maker Hub"
        },
    ],
    interests: [
        "Next.js & React",
        "NestJS Backend",
        "MERN Stack",
        "IoT (ESP32)",
        "Database Architecture",
        "API Integrations"
    ]
};