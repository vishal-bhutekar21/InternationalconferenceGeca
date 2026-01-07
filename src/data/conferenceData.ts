import type { Track, CommitteeMember, ImportantDate, ConferenceConfig, TimelineMilestone, GECAStat, NewsItem, NavItem } from '../types';

export const latestNews: NewsItem[] = [
    { id: 1, text: "Paper submission deadline extended to October 30, 2025!", isUrgent: true },
    { id: 2, text: "Special session on AI Ethics announced. Check the Schedule for details.", link: "/schedule" },
    { id: 3, text: "GECA welcomes international delegates for ICAISD 2025." }
];

export const navigationItems: NavItem[] = [
    { name: 'Home', path: '/' },
    {
        name: 'About',
        dropdown: [
            { name: 'Conference Overview', path: '/about' },
            { name: 'GECA Aurangabad', path: '/about#geca' },
            { name: 'Accommodation', path: '/accommodation' },
            { name: 'Venue & Travel', path: '/venue' }
        ]
    },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Tracks', path: '/tracks' },
    { name: 'Committee', path: '/committee' },
    { name: 'Registration', path: '/registration' },
    { name: 'Contact', path: '/contact' }
];

export const conferenceConfig: ConferenceConfig = {
    title: "ICAISD 2025",
    fullName: "2nd International Conference on Artificial Intelligence and Sustainable Development",
    date: "December 20-21, 2025",
    venue: "Government College of Engineering, Aurangabad",
    theme: "Sustainable Future through AI Innovation",
    heroImage: "/images/geca-building.jpg",
    logo: "/logos/geca-logo.jpg",
    description: "ICAISD 2025 aims to bring together leading academic scientists, researchers and research scholars to exchange and share their experiences and research results on all aspects of Artificial Intelligence and Sustainable Development."
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
        date: "August 15, 2025",
        title: "Paper Submission Deadline",
        description: "Last date to submit full papers for technical review.",
        status: "active",
        label: "Phase 01"
    },
    {
        id: 2,
        date: "September 15, 2025",
        title: "Acceptance Notification",
        description: "Authors receive decision on paper acceptance.",
        status: "upcoming",
        label: "Phase 02"
    },
    {
        id: 3,
        date: "September 30, 2025",
        title: "Camera Ready Submission",
        description: "Deadline for final manuscript and registration.",
        status: "upcoming",
        label: "Phase 03"
    },
    {
        id: 4,
        date: "October 15, 2025",
        title: "Registration Deadline",
        description: "Early bird fee closing date.",
        status: "upcoming",
        label: "Final Phase"
    },
    {
        id: 5,
        date: "December 20-21, 2025",
        title: "Conference Dates",
        description: "Technical sessions and keynote speeches at GECA.",
        status: "upcoming",
        label: "Main Event"
    }
];

export const importantDates: ImportantDate[] = [
    { id: 1, label: "Paper Submission", date: "Aug 15, 2025", status: "Open" },
    { id: 2, label: "Notification", date: "Sep 15, 2025", status: "Upcoming" },
    { id: 3, label: "Camera Ready", date: "Sep 30, 2025", status: "Upcoming" },
    { id: 4, label: "Registration", date: "Oct 15, 2025", status: "Upcoming" }
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
    {
        id: 1,
        name: "Dr. Sanjay S. Dambhare",
        designation: "Principal, GECA",
        institution: "Government College of Engineering, Aurangabad",
        category: "Patron",
        image: "/images/principal.jpg"
    },
    {
        id: 2,
        name: "Smt. Vrushali A. Chakkarwar",
        designation: "Associate Professor",
        institution: "GECA",
        category: "Technical",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Shri. Sudhirkumar G. Shikalpure",
        designation: "Assistant Professor",
        institution: "GECA",
        category: "Technical",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
];
