import type { Track, CommitteeMember, ImportantDate, ConferenceConfig, TimelineMilestone, GECAStat, NewsItem, NavItem } from '../types';

export const latestNews: NewsItem[] = [
    { id: 1, text: "Paper submission is open until October 30, 2026!", isUrgent: true, link: "/presentation-guidelines" },
    { id: 2, text: "Special session on AI Ethics announced. Check the Schedule for details.", link: "/schedule" },
    { id: 3, text: "GECCS welcomes international delegates for ICAISG 2026. Register now!", link: "/registration" }
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
    { name: 'Event Timeline', path: '/timeline' },
    {
        name: 'Publications',
        dropdown: [
            { name: 'Publishing Partners', path: '/publishing-partners' },
            { name: 'Publish and Indexing', path: '/publish-indexing' }
        ]
    },
    { name: 'Guidelines', path: '/presentation-guidelines' },
    { name: 'Advisory Committee', path: '/committee' },
    { name: 'Tracks', path: '/tracks' },
    { name: 'Contact', path: '/contact' }
];

export const conferenceConfig: ConferenceConfig = {
    title: "ICAISG2026",
    fullName: "International Conference on Artificial Intelligence for Societal Growth",
    date: "August 2026",
    venue: "Government College Of Engineering, Aurangabad, Chh. Sambhajinagar",
    theme: "Artificial Intelligence for Societal Growth",
    heroImage: "/images/geca-building.jpg",
    logo: "/logos/geca-official-logo.png",
    description: "The International Conference on Artificial Intelligence for Societal Growth brings together thought leaders, researchers, policymakers, technologists, and social innovators from around the world to explore how AI can be leveraged to address the most pressing challenges of the time. Organized by Government College Of Engineering, Aurangabad, Chh. Sambhajinagar, Department of Electronics and Telecommunication Engg, Centre Of Excellence (Thinking Systems for Signal and Image Processing)."
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
        date: "Nov. 2025",
        label: "Committee Formation",
        title: "Formation of Committees",
        description: "Formation of various committees, viz. Advisory Committee, Technical Committee, Steering Committee, Publication Committee, etc. Coordinator: Convener/Co-Convener",
        status: "completed"
    },
    {
        id: 2,
        date: "Dec. 2025",
        label: "Call for Papers",
        title: "Call for Research Papers",
        description: "Call for research papers/articles through on-line portal within prescribed scope of research areas. Coordinator: Technical Committee",
        status: "active"
    },
    {
        id: 3,
        date: "Jan. 2026",
        label: "Abstract Submission",
        title: "Submission of Abstracts",
        description: "Submission of Abstracts. Coordinator: Technical Committee",
        status: "upcoming"
    },
    {
        id: 4,
        date: "March 2026",
        label: "Full Paper Submission",
        title: "Submission of Full Length Papers",
        description: "Submission of full length paper/research articles. Coordinator: Technical Committee",
        status: "upcoming"
    },
    {
        id: 5,
        date: "April 2026",
        label: "Review Process",
        title: "Double Blind Review",
        description: "Review Process (Double blind). Coordinator: Technical Committee",
        status: "upcoming"
    },
    {
        id: 6,
        date: "June 2026",
        label: "Acceptance Notification",
        title: "Communication of Acceptance",
        description: "Communication of Acceptance to Authors. Coordinator: Steering Committee",
        status: "upcoming"
    },
    {
        id: 7,
        date: "July 2026",
        label: "Camera Ready",
        title: "Camera Ready Submission",
        description: "Submission of camera ready papers.",
        status: "upcoming"
    },
    {
        id: 8,
        date: "Aug. 2026",
        label: "Conference Dates",
        title: "Conference Dates",
        description: "Conference dates.",
        status: "upcoming"
    },
    {
        id: 9,
        date: "Sept. 2026",
        label: "Publication",
        title: "Publication of Proceedings",
        description: "Publication of Proceedings/Book series. Coordinator: Publication Committee",
        status: "upcoming"
    }
];

export const importantDates: ImportantDate[] = [
    { id: 1, label: "Call for Papers", date: "Dec. 2025", status: "active" },
    { id: 2, label: "Abstract Submission", date: "Jan. 2026", status: "upcoming" },
    { id: 3, label: "Full Paper Submission", date: "March 2026", status: "upcoming" },
    { id: 4, label: "Review Process", date: "April 2026", status: "upcoming" },
    { id: 5, label: "Acceptance Notification", date: "June 2026", status: "upcoming" },
    { id: 6, label: "Camera Ready Submission", date: "July 2026", status: "upcoming" },
    { id: 7, label: "Conference Dates", date: "August 2026", status: "upcoming" }
];

export const tracks: Track[] = [
    {
        id: 1,
        title: "Motion & Tracking",
        description: "Advanced algorithms for tracking objects and analyzing motion patterns in video sequences.",
        icon: "FaWalking"
    },
    {
        id: 2,
        title: "Video Surveillance",
        description: "Intelligent monitoring systems for security and safety applications.",
        icon: "FaVideo"
    },
    {
        id: 3,
        title: "AI in Healthcare",
        description: "Artificial intelligence applications in medical diagnosis, treatment, and management.",
        icon: "FaStethoscope"
    },
    {
        id: 4,
        title: "Pattern Recognition",
        description: "Automated recognition of patterns and regularities in data.",
        icon: "FaFingerprint"
    },
    {
        id: 5,
        title: "Computer-Aided Diagnosis",
        description: "Systems that assist doctors in the interpretation of medical images.",
        icon: "FaUserMd"
    },
    {
        id: 6,
        title: "Machine Learning for Localization",
        description: "Techniques for determining position and orientation using machine learning.",
        icon: "FaMapMarkedAlt"
    },
    {
        id: 7,
        title: "Human Activity Detection and Recognition",
        description: "Advanced systems for detecting and recognizing human activities in various environments.",
        icon: "FaRunning"
    },
    {
        id: 8,
        title: "Human Computer Interaction",
        description: "Interfaces and interactions between humans and computers, focusing on usability and experience.",
        icon: "FaMouse"
    },
    {
        id: 9,
        title: "Medical Image Reconstruction",
        description: "Techniques for reconstructing high-quality medical images from raw data.",
        icon: "FaHeartbeat"
    },
    {
        id: 10,
        title: "Generative AI for Computer Vision",
        description: "Using generative models to create, enhance, and analyze visual data.",
        icon: "FaEye"
    },
    {
        id: 11,
        title: "Explainable AI",
        description: "Methods and techniques to make AI systems their actions understandable by humans.",
        icon: "FaLightbulb"
    },
    {
        id: 12,
        title: "Applied AI",
        description: "Practical applications of artificial intelligence in real-world scenarios.",
        icon: "FaCog"
    },
    {
        id: 13,
        title: "Natural Language Processing",
        description: "Computational techniques for analyzing and representing naturally occurring texts.",
        icon: "FaComments"
    }
];

export const committeeMembers: CommitteeMember[] = [
    // Patrons
    {
        id: 1,
        name: "Shri B. Venugopal Reddy, IAS",
        designation: "Patron",
        institution: "Add. Chief Secretary, H&TE, Mantralaya, Mumbai",
        category: "Patrons",
        image: "placeholder"
    },
    {
        id: 2,
        name: "Dr. Sanjay Deshmukh",
        designation: "Patron",
        institution: "Chairman, BOG, GEC Chh. Sambhajinagar",
        category: "Patrons",
        image: "placeholder"
    },
    {
        id: 3,
        name: "Dr. Vinod Mohitkar",
        designation: "Patron",
        institution: "DTE, Mumbai",
        category: "Patrons",
        image: "placeholder"
    },
    {
        id: 4,
        name: "Dr. K.B. Ladhane",
        designation: "Patron",
        institution: "JD, RO, TE, Chh. Sambhajinagar",
        category: "Patrons",
        image: "placeholder"
    },
    
    // International Advisory Committee
    {
        id: 10,
        name: "Dr. Matthias Zobel",
        designation: "Co-Founder, CEO",
        institution: "GAIMAZO GMBH, Germany",
        category: "International Advisory Committee",
        image: "placeholder"
    },
    {
        id: 11,
        name: "Gregor Matenaer",
        designation: "Co-Founder, CEO",
        institution: "GAIMAZO GMBH, Germany",
        category: "International Advisory Committee",
        image: "placeholder"
    },
    {
        id: 12,
        name: "Dr. Ujjwal Baid",
        designation: "Director, Research",
        institution: "Dept. of Biomedical Engg. Georgia Institute of Technology, Atlanta, Georgia, USA",
        category: "International Advisory Committee",
        image: "placeholder"
    },
    {
        id: 13,
        name: "Dr. Samiksha Pachade",
        designation: "Computer Vision Research Engineer",
        institution: "Akeso Eyecare, Shijingshan, Beijing, China",
        category: "International Advisory Committee",
        image: "placeholder"
    },
    {
        id: 14,
        name: "Dr. Bhakti Baheti",
        designation: "Assistant Professor",
        institution: "Dept. of Biomedical Engg. Georgia Institute of Technology, Atlanta, Georgia, USA",
        category: "International Advisory Committee",
        image: "placeholder"
    },
    {
        id: 15,
        name: "Dr. Vivek Kshirsagar",
        designation: "",
        institution: "",
        category: "International Advisory Committee",
        image: "placeholder"
    },
    {
        id: 16,
        name: "Dr. Govind Yadav",
        designation: "Post-Doctoral Fellow",
        institution: "National Tsing Hua University, Taiwan",
        category: "International Advisory Committee",
        image: "placeholder"
    },
    
    // National Advisory Committee
    {
        id: 20,
        name: "Dr. Sumantra Datta Roy",
        designation: "Professor",
        institution: "Electrical Engg. IIT Delhi",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    {
        id: 21,
        name: "Dr. Renu John",
        designation: "Professor",
        institution: "Biomedical Engg. IIT Hyderabad",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    {
        id: 22,
        name: "Shri Prashant Deshpande",
        designation: "CEO",
        institution: "MediAstra Pvt. Ltd",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    {
        id: 23,
        name: "Shri Prasad Kokil",
        designation: "MD",
        institution: "Sanjay Technoplast Pvt. Ltd.",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    {
        id: 24,
        name: "Shri Mukund Kulkarni",
        designation: "CEO",
        institution: "Global Expert Solutions",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    {
        id: 25,
        name: "Shri Suraj Dumne",
        designation: "MD",
        institution: "Anvita Enterprises",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    {
        id: 26,
        name: "Shri Suresh Shakkarwar",
        designation: "Ex-VP",
        institution: "Findability Sciences, India",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    {
        id: 27,
        name: "Dr. Yashwant Joshi",
        designation: "Ex-Director",
        institution: "WCE, Sangli",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    {
        id: 28,
        name: "Dr. Manesh Kokare",
        designation: "Director",
        institution: "SGGSIET, Nanded",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    {
        id: 29,
        name: "Dr. Prasanna Porwal",
        designation: "Senior Imaging Scientist",
        institution: "Roche Information Solutions India Pvt.Ltd. Pune",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    {
        id: 30,
        name: "Dr. Prashant Patil",
        designation: "Assistant Professor",
        institution: "IIT Guwahati, India",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    {
        id: 31,
        name: "Dr. Shruti Phutke",
        designation: "Data Scientist",
        institution: "Yamaha Motor Solutions Noida, India",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    {
        id: 32,
        name: "Shri Milind Kamble",
        designation: "Vice President",
        institution: "TCS, Mumbai",
        category: "National Advisory Committee",
        image: "placeholder"
    },
    
    // Organizing Committee
    {
        id: 40,
        name: "Dr. Sanjay Dambhare",
        designation: "General Chair",
        institution: "Principal, GEC Chh. Sambhajinagar",
        category: "Organizing Committee",
        image: "/images/principal.jpg"
    },
    {
        id: 41,
        name: "Dr. Sunil Hirekhan",
        designation: "Organizing Chair",
        institution: "GEC Chh. Sambhajinagar",
        category: "Organizing Committee",
        image: "/images/committee/Deans/hirekhansir.jpg"
    },
    {
        id: 42,
        name: "Dr. Anil Karwankar",
        designation: "Organizing Co-Chair",
        institution: "GEC Chh. Sambhajinagar",
        category: "Organizing Committee",
        image: "placeholder"
    },
    {
        id: 43,
        name: "Dr. Varsha Ratnaparkhe",
        designation: "Convener",
        institution: "Steering Committee, GEC Chh. Sambhajinagar",
        category: "Organizing Committee",
        image: "placeholder"
    },
    {
        id: 44,
        name: "Dr. Sushama Agrawal",
        designation: "Co-Convener",
        institution: "Publication Committee, GEC Chh. Sambhajinagar",
        category: "Organizing Committee",
        image: "/images/committee/Deans/agrawalmam.png"
    }
];

