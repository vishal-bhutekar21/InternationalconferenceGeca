import { FaEnvelope } from 'react-icons/fa';

const StayUpdated = () => {
    return (
        <section style={{ backgroundColor: 'var(--color-accent-orange)', padding: '6rem 0', color: 'white' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                    fontSize: '1.5rem'
                }}>
                    <FaEnvelope />
                </div>
                <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem', color: 'white' }}>Stay Updated</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'white', opacity: 0.9, fontSize: '1.1rem' }}>
                    Subscribe to our newsletter to receive the latest updates about paper submission deadlines, speaker announcements, and schedule changes.
                </p>

                <div style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    display: 'flex',
                    gap: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    padding: '0.5rem',
                    borderRadius: '50px'
                }}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        style={{
                            flex: 1,
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            border: 'none',
                            outline: 'none',
                            fontSize: '1rem'
                        }}
                    />
                    <button className="btn" style={{
                        backgroundColor: '#1E293B',
                        color: 'white',
                        padding: '1rem 2.5rem',
                        borderRadius: '50px',
                        border: 'none',
                        fontWeight: 700
                    }}>
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StayUpdated;
