export type TeamMember = {
    name: string;
    role: string;
    bio: string;
    image?: string;
};

export const teamMembers: TeamMember[] = [
    {
        name: "Somesh Chaudhari",
        role: "Founder & CEO",
        bio: "Leads company vision, product strategy, and technology innovation while ensuring DigitioHub builds scalable and future-ready solutions for businesses.",
        image: "/team/somesh.webp",
    },
    {
        name: "Aditya Bhoye",
        role: "Co-Founder, Operations & Delivery",
        bio: "Manages project execution, client success, and operational efficiency to ensure timely and high-quality delivery across all projects.",
        image: "/team/aditya.webp",
    },
    {
        name: "Rupin Desai",
        role: "Head Software Developer",
        bio: "Leads core software architecture and development, ensuring scalable, secure, and high-performance technology solutions across all projects.",
        image: "/team/rupin.webp",
    },
    {
        name: "Mihir Nagda",
        role: "Full-Stack Developer",
        bio: "Builds scalable web applications from concept to deployment, combining clean architecture, performant APIs, and intuitive user experiences.",
        image: "/team/mihir.webp",
    },
    {
        name: "Janhavi Bandhane",
        role: "Full-Stack Developer",
        bio: "Transforms complex requirements into reliable digital solutions, focusing on seamless frontend interactions, efficient backend systems, and maintainable code.",
        image: "/team/janhavi.webp",
    },
    {
        name: "Harsh Kamble",
        role: "Full Stack Developer",
        bio: "Develops robust web applications with a focus on clean architecture, responsive design, and efficient backend systems to deliver seamless user experiences.",
        image: "/team/harsh.webp",
    },
    {
        name: "Sumit Kamble",
        role: "App Developer",
        bio: "Builds high-performance cross-platform mobile applications with clean architecture, responsive UI, and reliable integrations for production use.",
        image: "/team/sumit.webp",
    },
    {
        name: "Shilpesh Dodake",
        role: "Jr AI Engineer",
        bio: "Develops and implements AI-driven solutions, focusing on machine learning models, data analysis, and automation to enhance product capabilities.",
        image: "/team/shilpesh.webp",
    }
];
