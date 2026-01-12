import { motion } from 'framer-motion';

interface BoardMember {
    name: string;
    designation: string;
    institution: string;
    country?: string;
    image?: string;
}

const AdvisoryBoard = () => {
    const internationalBoard: BoardMember[] = [
        {
            name: 'Dr. Matthias Zobel',
            designation: 'Co-Founder, CEO',
            institution: 'GAIMAZO GMBH, Germany',
            country: 'Germany'
        },
        {
            name: 'Gregor Matenaer',
            designation: 'Co-Founder, CEO',
            institution: 'GAIMAZO GMBH, Germany',
            country: 'Germany'
        },
        {
            name: 'Dr. Ujjwal Baid',
            designation: 'Director, Research',
            institution: 'Dept. of Biomedical Engg. Georgia Institute of Technology, Atlanta, Georgia, USA',
            country: 'USA'
        },
        {
            name: 'Dr. Samiksha Pachade',
            designation: 'Computer Vision Research Engineer',
            institution: 'Akeso Eyecare, Shijingshan, Beijing, China',
            country: 'China'
        },
        {
            name: 'Dr. Bhakti Baheti',
            designation: 'Assistant Professor',
            institution: 'Dept. of Biomedical Engg. Georgia Institute of Technology, Atlanta, Georgia, USA',
            country: 'USA'
        },
        {
            name: 'Dr. Vivek Kshirsagar',
            designation: '',
            institution: '',
            country: ''
        },
        {
            name: 'Dr. Govind Yadav',
            designation: 'Post-Doctoral Fellow',
            institution: 'National Tsing Hua University, Taiwan',
            country: 'Taiwan'
        }
    ];

    const nationalBoard: BoardMember[] = [
        {
            name: 'Dr. Sumantra Datta Roy',
            designation: 'Professor',
            institution: 'Electrical Engg. IIT Delhi',
            country: 'India'
        },
        {
            name: 'Dr. Renu John',
            designation: 'Professor',
            institution: 'Biomedical Engg. IIT Hyderabad',
            country: 'India'
        },
        {
            name: 'Shri Prashant Deshpande',
            designation: 'CEO',
            institution: 'MediAstra Pvt. Ltd',
            country: 'India'
        },
        {
            name: 'Shri Prasad Kokil',
            designation: 'MD',
            institution: 'Sanjay Technoplast Pvt. Ltd.',
            country: 'India'
        },
        {
            name: 'Shri Mukund Kulkarni',
            designation: 'CEO',
            institution: 'Global Expert Solutions',
            country: 'India'
        },
        {
            name: 'Shri Suraj Dumne',
            designation: 'MD',
            institution: 'Anvita Enterprises',
            country: 'India'
        },
        {
            name: 'Shri Suresh Shakkarwar',
            designation: 'Ex-VP',
            institution: 'Findability Sciences, India',
            country: 'India'
        },
        {
            name: 'Dr. Yashwant Joshi',
            designation: 'Ex-Director',
            institution: 'WCE, Sangli',
            country: 'India'
        },
        {
            name: 'Dr. Manesh Kokare',
            designation: 'Director',
            institution: 'SGGSIET, Nanded',
            country: 'India'
        },
        {
            name: 'Dr. Prasanna Porwal',
            designation: 'Senior Imaging Scientist',
            institution: 'Roche Information Solutions India Pvt.Ltd. Pune',
            country: 'India'
        },
        {
            name: 'Dr. Prashant Patil',
            designation: 'Assistant Professor',
            institution: 'IIT Guwahati, India',
            country: 'India'
        },
        {
            name: 'Dr. Shruti Phutke',
            designation: 'Data Scientist',
            institution: 'Yamaha Motor Solutions Noida, India',
            country: 'India'
        },
        {
            name: 'Shri Milind Kamble',
            designation: 'Vice President',
            institution: 'TCS, Mumbai',
            country: 'India'
        }
    ];

    const renderBoard = (members: BoardMember[], title: string) => (
        <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
                {title}
            </h3>
            <div className="grid-responsive grid-3-col" style={{ gap: '2rem' }}>
                {members.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        style={{
                            backgroundColor: 'var(--color-white)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--color-border)',
                            boxShadow: 'var(--shadow-sm)',
                            textAlign: 'center',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {/* Placeholder for member image */}
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-bg-light)',
                            border: '3px solid var(--color-accent-orange)',
                            margin: '0 auto 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            color: 'var(--color-accent-orange)',
                            fontWeight: 800
                        }}>
                            {member.name.charAt(0)}
                        </div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                            {member.name}
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-accent-orange)', fontWeight: 600, marginBottom: '0.5rem' }}>
                            {member.designation}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                            {member.institution}
                        </p>
                        {member.country && (
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                                {member.country}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg-light)', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="badge">CONFERENCE ADVISORS</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '1rem', marginBottom: '1rem' }}>
                        Advisory <span style={{ color: 'var(--color-accent-orange)' }}>Board</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                        Distinguished experts guiding the conference towards excellence in AI and sustainable development research.
                    </p>
                </div>

                {renderBoard(internationalBoard, 'International Advisory Board')}
                {renderBoard(nationalBoard, 'National Advisory Board')}
            </div>
        </section>
    );
};

export default AdvisoryBoard;
