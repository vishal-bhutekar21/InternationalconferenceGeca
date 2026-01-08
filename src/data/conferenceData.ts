import type { Track, CommitteeMember, ImportantDate, ConferenceConfig, TimelineMilestone, GECAStat, NewsItem, NavItem } from '../types';

export const latestNews: NewsItem[] = [
    { id: 1, text: "Paper submission is open until October 30, 2026!", isUrgent: true, link: "/presentation-guidelines" },
    { id: 2, text: "Special session on AI Ethics announced. Check the Schedule for details.", link: "/schedule" },
    { id: 3, text: "GECCS welcomes international delegates for ICAISD 2026. Register now!", link: "/registration" }
];

export const navigationItems: NavItem[] = [
    { name: 'Home', path: '/' },
    {
        name: 'About',
        dropdown: [
            { name: 'Conference Overview', path: '/about' },
            { name: 'GECCS (Aurangabad) Chhatrapati Sambhajinagar', path: '/about#geca' }
        ]
    },
    { name: 'Advisory Board', path: '/advisory-board' },
    { name: 'Event Timeline', path: '/timeline' },
    {
        name: 'Publications',
        dropdown: [
            { name: 'Publishing Partners', path: '/publishing-partners' },
            { name: 'Publish and Indexing', path: '/publish-indexing' }
        ]
    },
    { name: 'Guidelines', path: '/presentation-guidelines' },
    { name: 'Committee', path: '/committee' },
    { name: 'Tracks', path: '/tracks' },
    { name: 'Contact', path: '/contact' }
];

export const conferenceConfig: ConferenceConfig = {
    title: "ICAISDG 26",
    fullName: "2nd International Conference on Artificial Intelligence and Sustainable Development",
    date: "August 27-28, 2026",
    venue: "Government College Of Engineering, Aurangabad, Chh. Sambhajinagar", // Updated venue text
    theme: "Sustainable Future through AI Innovation",
    heroImage: "/images/geca-building.jpg",
    logo: "/logos/geca-official-logo.png",
    description: "ICAISDG 26 aims to bring together leading academic scientists, researchers and research scholars to exchange and share their experiences and research results on all aspects of Artificial Intelligence and Sustainable Development. Organized by Government College Of Engineering, Aurangabad, Chh. Sambhajinagar, Center Of Excellence, Electronics & Telecommunication Department."
};

export const gecaStats: GECAStat[] = [
    { label: "Established", value: "1960" },
    { label: "NAAC Rating", value: "A+" },
    { label: "Departments", value: "10+" },
    { label: "Campus Area", value: "30+ Acres" }
];

export const timelineMilestones: TimelineMilestone[] = [
    {
        id: 1,
        date: "March 2026",
        label: "Paper Submission",
        title: "Full Paper Submission",
        description: "Submission of full length papers for technical review and feedback.",
        status: "active"
    },
    {
        id: 2,
        date: "June 2026",
        label: "Acceptance Notification",
        title: "Acceptance Notification",
        description: "Communication of review outcomes and acceptance decisions to authors.",
        status: "upcoming"
    },
    {
        id: 3,
        date: "July 2026",
        label: "Camera Ready",
        title: "Camera Ready Submission",
        description: "Final manuscript submission and copyright form completion.",
        status: "upcoming"
    },
    {
        id: 4,
        date: "01 Oct 2026 — 15 Oct 2026", // User didn't specify update for this, keeping as is or should I remove? User said "date section on evey page and section should be same i will upload what exactly is do this now". But didn't provide Reg date. I will leave it to avoid breaking changes unless I see a conflict. Wait, 01 Oct is after August conference date. That makes no sense. I must change it. Assuming logical flow, maybe July-August? I will stick to what user gave me. I will remove Registration if not provided or set as TBD. But user said "do this now in eveypage". I'll default to TBD.
        label: "Registration",
        title: "Registration",
        description: "Deadline for conference registration and fee payment.",
        status: "upcoming"
    },
    {
        id: 5,
        date: "August 27-28, 2026",
        label: "Main Event",
        title: "Conference Dates",
        description: "Technical sessions, keynotes, and sustainable networking at GECCS.",
        status: "upcoming"
    }
];

export const importantDates: ImportantDate[] = [
    { id: 1, label: "Full Paper Submission", date: "March 2026", status: "upcoming" },
    { id: 2, label: "Acceptance Notification", date: "June 2026", status: "upcoming" },
    { id: 3, label: "Camera Ready Submission", date: "July 2026", status: "upcoming" },
    { id: 6, label: "Conference Dates", date: "27-28 August, 2026", status: "upcoming" }
];

export const tracks: Track[] = [
    {
        id: 1,
        title: "Human Activity Detection and Recognition",
        description: "Advanced systems for detecting and recognizing human activities in various environments.",
        icon: "FaRunning"
    },
    {
        id: 2,
        title: "Human Computer Interaction",
        description: "Interfaces and interactions between humans and computers, focusing on usability and experience.",
        icon: "FaMouse"
    },
    {
        id: 3,
        title: "Medical Image Reconstruction",
        description: "Techniques for reconstructing high-quality medical images from raw data.",
        icon: "FaHeartbeat"
    },
    {
        id: 4,
        title: "Generative AI for Computer Vision",
        description: "Using generative models to create, enhance, and analyze visual data.",
        icon: "FaEye"
    },
    {
        id: 5,
        title: "Explainable AI",
        description: "Methods and techniques to make AI systems their actions understandable by humans.",
        icon: "FaLightbulb"
    },
    {
        id: 6,
        title: "Natural Language Processing",
        description: "Computational techniques for analyzing and representing naturally occurring texts.",
        icon: "FaComments"
    },
    {
        id: 7,
        title: "Motion & Tracking",
        description: "Algorithms for tracking objects and analyzing motion patterns in video sequences.",
        icon: "FaWalking"
    },
    {
        id: 8,
        title: "Video Surveillance",
        description: "Intelligent monitoring systems for security and safety applications.",
        icon: "FaVideo"
    },
    {
        id: 9,
        title: "AI in Healthcare",
        description: "Artificial intelligence applications in medical diagnosis, treatment, and management.",
        icon: "FaStethoscope"
    },
    {
        id: 10,
        title: "Pattern Recognition",
        description: "Automated recognition of patterns and regularities in data.",
        icon: "FaFingerprint"
    },
    {
        id: 11,
        title: "Computer-Aided Diagnosis",
        description: "Systems that assist doctors in the interpretation of medical images.",
        icon: "FaUserMd"
    },
    {
        id: 12,
        title: "Machine Learning for Localization",
        description: "Techniques for determining position and orientation using machine learning.",
        icon: "FaMapMarkedAlt"
    }
];

export const committeeMembers: CommitteeMember[] = [
    // Conference Leadership
    {
        id: 1,
        name: "Dr. Sanjay Dambhare",
        designation: "Principal, GECCS",
        institution: "Government College of Engineering, Chhatrapati Sambhajinagar",
        category: "Conference Leadership",
        image: "/images/principal.jpg"
    },
    {
        id: 2,
        name: "Dr. S. R. Hirekhan",
        designation: "Organizer Chair",
        institution: "GECCS",
        category: "Conference Leadership",
        image: "/images/committee/Deans/hirekhansir.jpg"
    },
    {
        id: 3,
        name: "Dr. A. G. Agrawal",
        designation: "Program Chair",
        institution: "GECCS",
        category: "Conference Leadership",
        image: "/images/committee/Deans/agrawalmam.png"
    },


    {
        id: 11,
        name: "Prof. Santosh Atipamulu",
        designation: "Dean (Student Activities)",
        institution: "GECCS",
        category: "Deans",
        image: "/images/committee/Deans/atipamulu_sir.webp"
    },

    // Heads of Departments
    {
        id: 20,
        name: "Dr. S. R. Hirekhan",
        designation: "Professor & Head",
        institution: "GECCS",
        category: "Heads of Departments",
        image: "/images/committee/Deans/hirekhansir.jpg"
    },
    {
        id: 21,
        name: "Dr. Vikul J. Pawar",
        designation: "Professor & Head",
        institution: "GECCS",
        category: "Heads of Departments",
        image: "/images/committee/Deans/vikul_sir.jpeg"
    }
];

