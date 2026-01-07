import type { Track, CommitteeMember, ImportantDate, ConferenceConfig, TimelineMilestone, GECAStat, NewsItem, NavItem } from '../types';

export const latestNews: NewsItem[] = [
    { id: 1, text: "Paper submission deadline extended to October 30, 2026!", isUrgent: true },
    { id: 2, text: "Special session on AI Ethics announced. Check the Schedule for details.", link: "/schedule" },
    { id: 3, text: "GECCS welcomes international delegates for ICAISD 2026." }
];

export const navigationItems: NavItem[] = [
    { name: 'Home', path: '/' },
    {
        name: 'About',
        dropdown: [
            { name: 'Conference Overview', path: '/about' },
            { name: 'GECCS (Aurangabad) Chhatrapati Sambhajinagar', path: '/about#geca' },
            { name: 'Venue & Travel', path: '/venue' },
            { name: 'Advisory Board', path: '/advisory-board' }
        ]
    },
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
    title: "ICAISD 2026",
    fullName: "2nd International Conference on Artificial Intelligence and Sustainable Development",
    date: "December 20-21, 2026",
    venue: "Centre of Excellence, E&TC, Govt. College of Engineering, Chhatrapati Sambhajinagar",
    theme: "Sustainable Future through AI Innovation",
    heroImage: "/images/geca-building.jpg",
    logo: "/logos/geca-official-logo.png",
    description: "ICAISD 2026 aims to bring together leading academic scientists, researchers and research scholars to exchange and share their experiences and research results on all aspects of Artificial Intelligence and Sustainable Development."
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
        date: "01 May 2026 — 15 Aug 2026",
        title: "Paper Submission",
        description: "Submission of full length papers for technical review and feedback.",
        status: "active",
        label: "Schedule"
    },
    {
        id: 2,
        date: "16 Aug 2026 — 15 Sep 2026",
        title: "Acceptance Notification",
        description: "Communication of review outcomes and acceptance decisions to authors.",
        status: "upcoming",
        label: "Schedule"
    },
    {
        id: 3,
        date: "16 Sep 2026 — 30 Sep 2026",
        title: "Camera Ready",
        description: "Final manuscript submission and copyright form completion.",
        status: "upcoming",
        label: "Schedule"
    },
    {
        id: 4,
        date: "01 Oct 2026 — 15 Oct 2026",
        title: "Registration",
        description: "Deadline for conference registration and fee payment.",
        status: "upcoming",
        label: "Schedule"
    },
    {
        id: 5,
        date: "20 Dec 2026 — 21 Dec 2026",
        title: "Main Event",
        description: "Technical sessions, keynotes, and sustainable networking at GECCS.",
        status: "upcoming",
        label: "Schedule"
    }
];

export const importantDates: ImportantDate[] = [
    { id: 1, label: "Paper Submission", date: "Aug 15, 2026", status: "Open" },
    { id: 2, label: "Notification", date: "Sep 15, 2026", status: "Upcoming" },
    { id: 3, label: "Camera Ready", date: "Sep 30, 2026", status: "Upcoming" },
    { id: 4, label: "Registration", date: "Oct 15, 2026", status: "Upcoming" }
];

export const tracks: Track[] = [
    {
        id: 1,
        title: "AI in Sustainable Energy",
        description: "Smart grids, renewable energy forecasting, and AI-driven efficiency in power systems.",
        icon: "FaLeaf"
    },
    {
        id: 2,
        title: "Machine Learning & Big Data",
        description: "Advanced algorithms, predictive modeling, and data-driven decision making.",
        icon: "FaDatabase"
    },
    {
        id: 3,
        title: "Robotics & Automation",
        description: "Intelligent systems, autonomous vehicles, and industrial automation for sustainability.",
        icon: "FaRobot"
    },
    {
        id: 4,
        title: "Smart Cities & Infrastructure",
        description: "IoT integration, urban planning, and sustainable building technologies.",
        icon: "FaCity"
    },
    {
        id: 5,
        title: "Natural Language Processing",
        description: "Communication systems, multilingual AI, and cognitive computing.",
        icon: "FaLanguage"
    },
    {
        id: 6,
        title: "Biomedical Engineering",
        description: "AI in healthcare, medical imaging, and sustainable health solutions.",
        icon: "FaHeartbeat"
    },
    {
        id: 7,
        title: "Circular Economy & Waste",
        description: "AI for waste management, resource optimization, and green supply chains.",
        icon: "FaRecycle"
    },
    {
        id: 8,
        title: "Climate Change Modeling",
        description: "Environmental monitoring, disaster prediction, and mitigation strategies.",
        icon: "FaCloudSun"
    },
    {
        id: 9,
        title: "Ethical AI & Governance",
        description: "Policy frameworks, transparency, and responsible AI deployment.",
        icon: "FaBalanceScale"
    }
];

export const committeeMembers: CommitteeMember[] = [
    // Conference Committee / Patrons
    {
        id: 1,
        name: "Dr. A. S. Bhalchandra",
        designation: "Principal, GECCS",
        institution: "Government College of Engineering, Chhatrapati Sambhajinagar",
        category: "Patrons",
        image: "/images/committee/deans/principal_sir.jpeg"
    },
    {
        id: 2,
        name: "Dr. S. R. Hirekhan",
        designation: "Head of Dept, E&TC",
        institution: "GECCS",
        category: "Patrons",
        image: "/images/committee/hods/dr_sr_hirekhan_updated.jpg"
    },

    // Deans
    {
        id: 10,
        name: "Dr. V. P. Kshirsagar",
        designation: "Dean (Quality Assurance)",
        institution: "GECCS",
        category: "Deans",
        image: "/images/committee/deans/vikul_sir.jpeg"
    },
    {
        id: 11,
        name: "Prof. Santosh Atipamulu",
        designation: "Dean (Student Activities)",
        institution: "GECCS",
        category: "Deans",
        image: "/images/committee/deans/santosh_atipamulu.jpg"
    },

    // Heads of Departments
    {
        id: 20,
        name: "Dr. S. R. Hirekhan",
        designation: "Professor & Head",
        institution: "GECCS",
        category: "Heads of Departments",
        image: "/images/committee/hods/dr_sr_hirekhan_updated.jpg"
    },
    {
        id: 21,
        name: "Dr. Vikul J. Pawar",
        designation: "Professor & Head",
        institution: "GECCS",
        category: "Heads of Departments",
        image: "/images/committee/hods/dr_vikul_j_pawar_updated.jpg?v=1"
    },

    // Development Team
    // {
    //     id: 40,
    //     name: "Gangaprasad Urekar",
    //     designation: "Web Developer",
    //     institution: "GECCS",
    //     category: "Development Team",
    //     image: "/images/committee/development-team/gangaprasad_urekar.jpg"
    // },
    // {
    //     id: 41,
    //     name: "Vishal Bhutekar",
    //     designation: "Web Developer",
    //     institution: "GECCS",
    //     category: "Development Team",
    //     image: "/images/committee/development-team/vishal_bhutekar.jpg"
    // },
    // {
    //     id: 42,
    //     name: "Keval Gawali",
    //     designation: "Web Developer",
    //     institution: "GECCS",
    //     category: "Development Team",
    //     image: "/images/committee/development-team/keval_gawali.jpg"
    // },
    // {
    //     id: 43,
    //     name: "Rushikesh Gaikwad",
    //     designation: "Web Developer",
    //     institution: "GECCS",
    //     category: "Development Team",
    //     image: "/images/committee/development-team/rushi_gaikawad.jpg"
    // }
];

