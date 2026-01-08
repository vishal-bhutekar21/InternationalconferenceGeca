import { motion } from 'framer-motion';

const PublishingPartnersPage = () => {
    const categories = [
        {
            title: "Academic Partners",
            partners: [
                {
                    id: 3,
                    name: "GECCS",
                    logo: "/logos/geca-official-logo.png",
                    description: "Government College of Engineering, Chhatrapati Sambhajinagar (Aurangabad). Host institution and primary academic patron."
                },
                {
                    id: 4,
                    name: "DTE Maharashtra",
                    logo: "/logos/dte-logo.jpg",
                    description: "Directorate of Technical Education, Maharashtra State."
                },
                {
                    id: 11,
                    name: "Dr. BAMU",
                    logo: "/logos/bamu-logo.png",
                    description: "Dr. Babasaheb Ambedkar Marathwada University. Affiliating University."
                },
                {
                    id: 12,
                    name: "AICTE",
                    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png",
                    description: "All India Council for Technical Education. Statutory Body."
                }
            ]
        }
    ];

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-bg-light)' }}>
            <div className="container" style={{ paddingBottom: '5rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <div className="badge" style={{ marginBottom: '1rem' }}>COLLABORATIONS</div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--color-primary)' }}>Publishing <span style={{ color: 'var(--color-accent-orange)' }}>Partners</span></h1>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto' }}>
                        Partnering with world-class publishers and institutions to ensure global reach and academic excellence.
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                    {categories.map((cat, idx) => (
                        <div key={idx}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary)', whiteSpace: 'nowrap' }}>{cat.title}</h2>
                                <div style={{ height: '2px', width: '100%', backgroundColor: 'var(--color-accent-orange-light)', opacity: 0.3 }} />
                            </div>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '2.5rem',
                                justifyContent: 'center'
                            }} className="partners-flex-container">
                                {cat.partners.map((partner) => (
                                    <motion.div
                                        key={partner.id}
                                        whileHover={{ y: -10 }}
                                        style={{
                                            backgroundColor: 'white',
                                            padding: '2.5rem',
                                            borderRadius: '32px',
                                            boxShadow: 'var(--shadow-md)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            border: '1px solid rgba(0,0,0,0.03)',
                                            flex: '1 1 350px',
                                            maxWidth: '450px'
                                        }}
                                    >
                                        <div style={{
                                            width: '200px',
                                            height: '100px',
                                            backgroundColor: '#f8fafc',
                                            borderRadius: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '1rem',
                                            marginBottom: '1.5rem',
                                            overflow: 'hidden'
                                        }}>
                                            {/* Logo Placeholder logic */}
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/200x100?text=${partner.name}`;
                                                }}
                                            />
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.75rem' }}>{partner.name}</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{partner.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PublishingPartnersPage;
