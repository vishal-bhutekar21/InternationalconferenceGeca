import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaChevronDown, FaSearch, FaCreditCard, FaUniversity, FaQrcode } from 'react-icons/fa';

const RegistrationPage = () => {
    const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const delegates = [
        {
            role: "Student / Scholar",
            sub: "For UG/PG students and PhD scholars",
            priceINR: "₹4,000",
            priceUSD: "$150",
            savedINR: "SAVE ₹1000 TILL JAN 15",
            savedUSD: "SAVE $50 TILL JAN 15",
            features: ["Access to all technical sessions", "Official Conference Kit", "Certificate of Participation", "Networking Lunch (2 Days)"],
            btnLabel: "Register as Student",
            color: "#64748B"
        },
        {
            role: "Academician / Faculty",
            sub: "For professors and faculty members",
            priceINR: "₹6,000",
            priceUSD: "$200",
            savedINR: "SAVE ₹1500 TILL JAN 15",
            savedUSD: "SAVE $50 TILL JAN 15",
            features: ["All Student Benefits", "Presentation Slot Priority", "Gala Dinner Invite", "Proceedings Publication"],
            btnLabel: "Register as Faculty",
            color: "var(--color-accent-orange)",
            popular: true
        },
        {
            role: "Industry Delegate",
            sub: "For corporate professionals",
            priceINR: "₹8,000",
            priceUSD: "$300",
            savedINR: "SAVE ₹2000 TILL JAN 15",
            savedUSD: "SAVE $100 TILL JAN 15",
            features: ["All Academic Benefits", "VIP Seating", "Company Logo on Website", "Exclusive Networking Access"],
            btnLabel: "Register as Industry",
            color: "#1E293B"
        }
    ];

    const faqs = [
        { q: "Can I cancel my registration?", a: "Cancellations are allowed until Nov 15th with a 20% processing fee. After that, no refunds will be processed." },
        { q: "Is accommodation included in the fee?", a: "Registration fees only cover the conference sessions, kit, and meals during sessions. Please check the 'Accommodation' page for special rates." },
        { q: "Can I register on the spot?", a: "Yes, but spot registration is subject to availability and will be charged at higher rates without early-bird benefits." },
        { q: "How do I get an invoice?", a: "Invoices are automatically generated and sent to your registered email after payment verification." }
    ];

    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--color-bg-light)', minHeight: '100vh', paddingBottom: '6rem' }}>
            {/* Hero Section */}
            <section className="section" style={{ padding: '4rem 0 2rem', backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-block', backgroundColor: 'var(--color-orange-soft)', color: 'var(--color-accent-orange)', padding: '0.5rem 1.25rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
                        ● OPEN FOR REGISTRATION
                    </div>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>
                        Secure Your <span style={{ color: 'var(--color-accent-orange)' }}>Spot</span>
                    </h1>
                    <p style={{ maxWidth: '750px', margin: '0 auto 3rem', color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.6 }}>
                        Join us at the premier conference for Engineering in Aurangabad. Choose the category that best fits your professional role. <span style={{ color: 'var(--color-accent-orange)', fontWeight: 700 }}>Early bird pricing ends Jan 15, 2025.</span>
                    </p>

                    {/* Currency Toggle */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5rem' }}>
                        <div style={{ backgroundColor: 'white', padding: '0.4rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'inline-flex', gap: '0.4rem', border: '1px solid #E2E8F0' }}>
                            <button
                                onClick={() => setCurrency('INR')}
                                style={{
                                    padding: '0.75rem 2rem', borderRadius: '12px', border: 'none',
                                    backgroundColor: currency === 'INR' ? '#F97316' : 'transparent',
                                    color: currency === 'INR' ? 'white' : '#64748B',
                                    fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', transition: '0.3s'
                                }}
                            >
                                Indian Delegates (INR)
                            </button>
                            <button
                                onClick={() => setCurrency('USD')}
                                style={{
                                    padding: '0.75rem 2rem', borderRadius: '12px', border: 'none',
                                    backgroundColor: currency === 'USD' ? '#F97316' : 'transparent',
                                    color: currency === 'USD' ? 'white' : '#64748B',
                                    fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', transition: '0.3s'
                                }}
                            >
                                Foreign Delegates (USD)
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', padding: '0 1rem' }}>
                        {delegates.map((d, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                style={{
                                    backgroundColor: 'white', padding: '3.5rem 2.5rem', borderRadius: '32px', textAlign: 'left',
                                    position: 'relative', border: d.popular ? '3px solid #F97316' : '1px solid #E2E8F0',
                                    boxShadow: d.popular ? '0 30px 60px rgba(249, 115, 22, 0.15)' : '0 10px 30px rgba(0,0,0,0.05)'
                                }}
                            >
                                {d.popular && (
                                    <div style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#F97316', color: 'white', padding: '0.4rem 1.5rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.05em' }}>
                                        MOST POPULAR
                                    </div>
                                )}
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{d.role}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{d.sub}</p>

                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-primary)' }}>{currency === 'INR' ? d.priceINR : d.priceUSD}</span>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#94A3B8' }}>/ person</span>
                                </div>

                                <div style={{ backgroundColor: '#FFF7ED', color: '#C2410C', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800, display: 'inline-block', marginBottom: '2.5rem' }}>
                                    {currency === 'INR' ? d.savedINR : d.savedUSD}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
                                    {d.features.map((f, j) => (
                                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#475569' }}>
                                            <FaCheckCircle color={d.color === '#F97316' ? '#F97316' : '#94A3B8'} size={18} />
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <button style={{
                                    width: '100%', padding: '1.25rem', borderRadius: '16px',
                                    backgroundColor: d.popular ? '#F97316' : '#F8FAFC',
                                    color: d.popular ? 'white' : 'var(--color-primary)',
                                    fontWeight: 700, cursor: 'pointer', transition: '0.3s',
                                    border: d.popular ? 'none' : '1px solid #E2E8F0'
                                }}>
                                    {d.btnLabel}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payment & FAQ */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                        {/* Payment Details Card */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#FFF7ED', color: '#F97316', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <FaCreditCard />
                                </div>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800 }}>Payment Details</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                                Please use the following details for NEFT/IMPS/RTGS transfers. Keep the transaction ID handy for the registration form.
                            </p>

                            <div style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '32px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Account Name</div>
                                        <div style={{ backgroundColor: '#FFF7ED', padding: '1rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary)', fontFamily: 'monospace' }}>Principal, Govt College of Engineering</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Bank Name</div>
                                        <div style={{ backgroundColor: '#FFF7ED', padding: '1rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary)', fontFamily: 'monospace' }}>State Bank of India</div>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Account Number</div>
                                        <div style={{ backgroundColor: '#FFF7ED', padding: '1rem', borderRadius: '8px', fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary)', fontFamily: 'monospace' }}>1234 5678 9012</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.5rem' }}>IFSC Code</div>
                                        <div style={{ backgroundColor: '#FFF7ED', padding: '1rem', borderRadius: '8px', fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary)', fontFamily: 'monospace' }}>SBIN0001234</div>
                                    </div>
                                </div>
                                <div style={{ borderTop: '1px dashed #E2E8F0', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div style={{ opacity: 0.3, fontSize: '1.5rem' }}><FaCreditCard /></div>
                                        <div style={{ opacity: 0.3, fontSize: '1.5rem' }}><FaUniversity /></div>
                                        <div style={{ opacity: 0.3, fontSize: '1.5rem' }}><FaQrcode /></div>
                                    </div>
                                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94A3B8' }}>Secure Payment Gateway</span>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Accordion */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#FFF7ED', color: '#F97316', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <FaSearch />
                                </div>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800 }}>Frequently Asked Questions</h3>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {faqs.map((faq, i) => (
                                    <div key={i} style={{ backgroundColor: 'white', borderRadius: '20px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                                        <button
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            style={{
                                                width: '100%', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between',
                                                alignItems: 'center', border: 'none', backgroundColor: 'transparent', cursor: 'pointer',
                                                textAlign: 'left'
                                            }}
                                        >
                                            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary)' }}>{faq.q}</span>
                                            <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }}>
                                                <FaChevronDown color="#94A3B8" />
                                            </motion.div>
                                        </button>
                                        <AnimatePresence>
                                            {openFaq === i && (
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={{ height: 'auto' }}
                                                    exit={{ height: 0 }}
                                                    style={{ overflow: 'hidden' }}
                                                >
                                                    <div style={{ padding: '0 2rem 2rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RegistrationPage;
