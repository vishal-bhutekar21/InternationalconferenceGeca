import { motion } from 'framer-motion';
import { FaArrowRight, FaUsers, FaMicrophone, FaFileAlt } from 'react-icons/fa';

const About = () => {
    const stats = [
        { icon: <FaMicrophone />, value: "30+", label: "Keynote Speakers" },
        { icon: <FaUsers />, value: "500+", label: "Global Attendees" },
        { icon: <FaFileAlt />, value: "100+", label: "Research Papers" }
    ];

    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-soft-blue)', padding: '8rem 0' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '5rem',
                    alignItems: 'center'
                }} className="about-main-flex">

                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 500px' }}
                    >
                        <div className="badge" style={{ marginBottom: '1.5rem', color: 'var(--color-accent-orange)', backgroundColor: 'rgba(249, 115, 22, 0.05)' }}>
                            About Conference
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '2rem', color: 'var(--color-primary)' }}>
                            Artificial Intelligence for <br />
                            <span style={{ color: 'var(--color-accent-orange)' }}>Societal Growth</span>
                        </h2>
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary)' }}>Preamble</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                As the world is at the crossroads of technological innovation and societal transformation, there is a collective responsibility— to harness the power of Artificial Intelligence (AI) for the advancement of society. The potential for AI to drive positive change across sectors is immense, from healthcare and education to governance, sustainability, and social equity.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                This conference brings together thought leaders, researchers, policymakers, technologists, and social innovators from around the world to explore how AI can be leveraged to address the most pressing challenges of the time. This will provide an unique opportunity to engage in critical dialogue, exchange ideas, and collaborate on solutions that ensure AI development, which shall be not only innovative but also ethical, inclusive, and beneficial to society.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                In the face of rapid technological progress, it is imperative that the focus on AI as a tool for social good, while considering its ethical implications, societal impact, and the importance of ensuring equitable access to its benefits. This event serves as a platform for deepening our understanding of how AI can be designed and applied in ways that align with human values and contribute to a more just and sustainable world.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                On this journey, let us remember that technology, at its best, serves humanity's greater good. The discussions and collaborations that take place, will shape the future of AI, and it is hoped that the insights shared during this conference will ignite action that empowers communities, nurtures growth, and promotes well-being for all.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '2rem', fontWeight: 600 }}>
                                Together, it is possible to unlock the transformative potential of AI and drive meaningful societal change.
                            </p>
                        </div>
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary)' }}>Objectives</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                The International Conference on AI for Societal Growth aims to create a global platform for advancing the responsible development and application of Artificial Intelligence to address critical societal needs. The conference seeks to unite researchers, practitioners, policymakers, industry leaders, and civil society to explore how AI can accelerate sustainable development, improve quality of life, and promote inclusive progress across communities worldwide.
                            </p>
                            <p style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-primary)' }}>The purpose of the conference is to:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.5rem' }}>
                                <li style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-orange)', fontWeight: 'bold' }}>•</span>
                                    Foster interdisciplinary collaboration that enables innovative AI solutions tailored to societal challenges such as healthcare, education, agriculture, public governance, environmental sustainability, and social equity.
                                </li>
                                <li style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-orange)', fontWeight: 'bold' }}>•</span>
                                    Advance ethical and human-centered AI frameworks that ensure transparency, fairness, accountability, and the protection of human rights.
                                </li>
                                <li style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-orange)', fontWeight: 'bold' }}>•</span>
                                    Promote knowledge exchange by sharing cutting-edge research, best practices, case studies, and emerging trends related to AI for public good.
                                </li>
                                <li style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-orange)', fontWeight: 'bold' }}>•</span>
                                    Empower policymakers and institutions with insights and strategies needed to design effective AI governance, regulation, and capacity-building initiatives.
                                </li>
                                <li style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-orange)', fontWeight: 'bold' }}>•</span>
                                    Encourage inclusive participation from diverse regions and sectors, ensuring that the benefits of AI are accessible and equitable for all societies.
                                </li>
                            </ul>
                            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                                The International Conference aims to provide a platform for researchers, academicians and industrial fraternity for exchange of ideas, fruitful interactions, derive implementable inferences. It also acts as an opportunity to disseminate innovative concepts useful for fostering sustainable societal growth.
                            </p>
                        </div>

                        {/* Stats Flex */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '2rem',
                            marginBottom: '3rem'
                        }} className="stats-flex-container">
                            {stats.map((stat, i) => (
                                <div key={i} style={{ flex: '1 1 120px' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="http://www.geca.ac.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-text"
                            style={{ padding: 0, color: 'var(--color-accent-orange)', fontWeight: 800, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                        >
                            Read more about GECCS <FaArrowRight size={14} />
                        </a>
                    </motion.div>

                    {/* Right content: Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            flex: '1 1 400px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1.5rem',
                            position: 'relative'
                        }}
                        className="about-image-flex"
                    >
                        {/* Main Tall Image */}
                        <div style={{
                            flex: '1 1 300px',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            height: '500px'
                        }}>
                            <img src="/images/geca-building.jpg" alt="GECCS Building" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Top Small Card (Networking) */}
                            <div style={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                backgroundColor: 'var(--color-accent-orange)',
                                padding: '1.5rem',
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.2)',
                                flex: '1'
                            }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <FaUsers />
                                </div>
                                <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Networking</h4>
                                <p style={{ opacity: 0.8, fontSize: '0.85rem' }}>Connect with global peers and researchers</p>
                            </div>

                            <div style={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                height: '240px'
                            }}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/93EFs6KStWQ?si=pU2iyIZ-4AkyzKJv&autoplay=1&mute=1&controls=0"
                                    title="Department of E&TC, GECA"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
