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
        image: "/team/somesh.jpeg",
    },
    {
        name: "Aditya Bhoye",
        role: "Co-Founder, Business & Growth",
        bio: "Handles partnerships, collaborations, and expansion strategies while building long-term relationships with clients and agencies.",
        image: "/team/aditya.jpeg",
    },
    {
        name: "Lalit Patil",
        role: "Co-Founder, Operations & Delivery",
        bio: "Manages project execution, client success, and operational efficiency to ensure timely and high-quality delivery across all projects.",
        image: "/team/lalit.jpg",
    },
    {
        name: "Rupin Desai",
        role: "Head Software Developer",
        bio: "Leads core software architecture and development, ensuring scalable, secure, and high-performance technology solutions across all projects.",
        image: "/team/rupin.jpeg",
    },
    {
        name: "Mihir Nagda",
        role: "Full Stack Software Developer",
        bio: "Drives end-to-end application development, building robust frontend and backend systems with seamless integrations.",
        image: "/team/mihir.jpg",
    },
    {
        name: "Sumit Kamble",
        role: "Flutter Developer",
        bio: "Builds high-performance cross-platform mobile applications with clean architecture, responsive UI, and reliable integrations for production use.",
        image: "/team/sumit.jpeg",
    },
    {
        name: "Rupa Gohil",
        role: "Graphic Designer",
        bio: "Shapes the visual identity and user experience, delivering impactful designs aligned with brand strategy and digital excellence.",
        image: "/team/rupa.jpeg",
    },
    {
        name: "Sukhendu Reddy",
        role: "Advisor & Investor",
        bio: "Provides strategic guidance on business growth, market positioning, and long-term value creation while supporting DigitioHub's expansion journey.",
        image: "/team/sukhi.jpeg",
    },
];
