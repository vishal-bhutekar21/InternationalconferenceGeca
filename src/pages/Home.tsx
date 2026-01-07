import Hero from '../components/Hero';
import HomeDatesSection from '../components/HomeDatesSection';
import About from '../components/About';
import Tracks from '../components/Tracks';
import Partners from '../components/Partners';
import Legacy from '../components/Legacy';
import StayUpdated from '../components/StayUpdated';
import Guidelines from '../components/Guidelines';
import Patrons from '../components/Patrons';
import Venue from '../components/Venue';

const Home = () => {
    return (
        <main>
            <Hero />
            <HomeDatesSection />
            <Legacy />
            <About />
            <Tracks />
            <section id="geccs" className="section" style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h1 style={{ fontSize: '10rem', fontWeight: 900, color: 'var(--color-accent-orange)', lineHeight: 0.8, opacity: 0.1, position: 'absolute', pointerEvents: 'none' }}>GECCS</h1>
                            <div style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
                                <div className="badge" style={{ marginBottom: '1.5rem' }}>HOST INSTITUTION</div>
                                <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem' }}>State-of-the-art <span style={{ color: 'var(--color-accent-orange)' }}>Computing</span> Ecosystem</h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                                    The Department of AI & Data Science at Government College of Engineering Aurangabad is a pioneer in technical education. Our campus provides high-performance computing labs, advanced research centers, and a vibrant community of innovators.
                                </p>
                                <div style={{ display: 'flex', gap: '3rem' }}>
                                    <div>
                                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>15+</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>RESEARCH LABS</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>500+</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>PUBLICATIONS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', position: 'relative' }}>
                            <img src="/images/geca-building.jpg" alt="GECCS Excellence" style={{ width: '100%', display: 'block' }} />
                            <div style={{ position: 'absolute', top: '2rem', right: '2rem', backgroundColor: 'white', padding: '1rem 2rem', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
                                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>ESTABLISHED</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-accent-orange)' }}>1960</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Guidelines />
            <Patrons />
            <Venue />
            <StayUpdated />
            <Partners />
        </main>
    );
};

export default Home;
