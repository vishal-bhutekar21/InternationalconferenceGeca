import { FaEnvelope, FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8FAFC', padding: '2rem' }}>
            <div style={{ maxWidth: '1000px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1.2fr', backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}>
                {/* Visual Side */}
                <div style={{ backgroundColor: 'var(--color-accent-orange)', padding: '4rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundImage: 'linear-gradient(135deg, var(--color-accent-orange) 0%, #EA580C 100%)' }}>
                    <div className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', width: 'fit-content' }}>Registration Open</div>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: '2rem 0' }}>Welcome to the Future of AI.</h1>
                    <p style={{ opacity: 0.9, lineHeight: 1.8, marginBottom: '4rem' }}>
                        Join researchers, practitioners, and industry experts at the premier conference for artificial intelligence and sustainable development.
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', marginLeft: '10px' }}>
                            {[1, 2, 3].map(i => (
                                <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', backgroundColor: '#CBD5E1', marginLeft: '-15px', overflow: 'hidden' }}>
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>500+</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Attendees joined</div>
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto', fontSize: '0.75rem', fontWeight: 700, opacity: 0.7, letterSpacing: '0.1em' }}>
                        NOV 15-17, 2025 • AURANGABAD, INDIA
                    </div>
                </div>

                {/* Form Side */}
                <div style={{ padding: '4rem' }}>
                    <div style={{ textAlign: 'right', marginBottom: '4rem' }}>
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 700 }}>Back to Home →</NavLink>
                    </div>

                    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                        <div style={{ backgroundColor: '#FFF7ED', padding: '1rem', borderRadius: '12px', width: 'fit-content', marginBottom: '2rem' }}>
                            <FaLock color="var(--color-accent-orange)" size={24} />
                        </div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Sign in to Dashboard</h2>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Enter your credentials to access your conference dashboard.</p>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>Email Address</label>
                                <div style={{ position: 'relative' }}>
                                    <FaEnvelope style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                                    <input type="email" placeholder="name@university.edu" style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 3rem', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '0.95rem' }} />
                                </div>
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Password</label>
                                    <a href="#" style={{ fontSize: '0.8rem', color: 'var(--color-accent-orange)', fontWeight: 700, textDecoration: 'none' }}>Forgot Password?</a>
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <FaLock style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                                    <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 3rem', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '0.95rem' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                <input type="checkbox" id="remember" style={{ width: '18px', height: '18px', accentColor: 'var(--color-accent-orange)' }} />
                                <label htmlFor="remember" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Remember me for 30 days</label>
                            </div>

                            <button className="btn btn-orange" style={{ padding: '1rem', fontSize: '1rem' }}>Sign In</button>

                            <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                Don't have an account? <a href="#" style={{ color: 'var(--color-accent-orange)', fontWeight: 800, textDecoration: 'none' }}>Register for Conference</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
