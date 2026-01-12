import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaChevronDown, FaSearch, FaCreditCard, FaUniversity, FaQrcode, FaArrowRight, FaFileUpload, FaCloudUploadAlt, FaInfoCircle, FaCheck } from 'react-icons/fa';

const RegistrationPage = () => {
    const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeStep, setActiveStep] = useState(1);

    const delegates = [
        {
            role: "Paper Author (Student)",
            sub: "Includes Paper Presentation & Publication",
            priceINR: "₹4,500",
            priceUSD: "$160",
            features: [
                "Technical Paper Presentation",
                "Publication in Proceedings",
                "Conference Kit & Certificate",
                "Networking Lunch (2 Days)",
                "Full Access to All Tracks"
            ],
            btnLabel: "Select Paper Reg",
            color: "var(--color-accent-orange)",
            type: "author"
        },
        {
            role: "Paper Author (Faculty)",
            sub: "Industrialists & Faculty Members",
            priceINR: "₹6,500",
            priceUSD: "$220",
            features: [
                "Everything in Student Plan",
                "Journal Publication Support",
                "Priority in Schedule",
                "Gala Dinner Invite"
            ],
            btnLabel: "Select Paper Reg",
            color: "var(--color-accent-orange)",
            popular: true,
            type: "author"
        },
        {
            role: "Attendee Only",
            sub: "For students & professionals attending only",
            priceINR: "₹2,500",
            priceUSD: "$100",
            features: [
                "Access to Workshops & Sessions",
                "Delegate Certificate",
                "Conference Kit",
                "Networking Lunch"
            ],
            btnLabel: "Select Attendee",
            color: "#64748B",
            type: "attendee"
        }
    ];

    const steps = [
        { id: 1, title: "Category & Fee", icon: "1" },
        { id: 2, title: "Payment", icon: "2" },
        { id: 3, title: "Submission", icon: "3" }
    ];

    const faqs = [
        { q: "Is Camera Ready Submission included in Paper Registration?", a: "Yes, the Paper Registration category covers both the registration fee and the process for Camera Ready paper submission. You will need to upload your final paper after payment." },
        { q: "How do I pay via SBI Payment Gateway?", a: "In Step 2 of the registration process, select 'Online Payment'. You will be redirected to the SBI Secure Gateway. After successful payment, the system will automatically move you to the final submission step." },
        { q: "What should I do after payment?", a: "Once payment is confirmed, proceed to Step 3 where you'll fill the final registration form. For authors, this includes uploading the Camera Ready manuscript, similarity report, and copyright form." },
        { q: "Are group discounts available?", a: "Yes, for groups of 5 or more participants from the same institution, a 15% discount is applicable. Please contact the organizing committee for a discount code before paying." }
    ];

    const handleStepChange = (step: number) => {
        setActiveStep(step);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--color-bg-soft-slate)', minHeight: '100vh', paddingBottom: '6rem' }}>
            {/* Header / Hero */}
            <section className="section" style={{ padding: '4rem 0 2rem', backgroundColor: 'white', borderBottom: '1px solid var(--color-border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="badge" style={{ marginBottom: '1.5rem' }}>ICAISG 2026 PORTAL</div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, marginBottom: '1rem', color: 'var(--color-primary)' }}>
                        Conference <span style={{ color: 'var(--color-accent-orange)' }}>Registration</span>
                    </h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                        Follow the 3-step process to complete your registration and paper submission.
                    </p>

                    {/* Progress Indicator */}
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        position: 'relative',
                        padding: '0 2rem'
                    }}>
                        <div style={{ position: 'absolute', top: '25px', left: '10%', right: '10%', height: '2px', backgroundColor: '#E2E8F0', zIndex: 0 }}></div>
                        <div style={{ position: 'absolute', top: '25px', left: '10%', width: `${(activeStep - 1) * 40}%`, height: '2px', backgroundColor: 'var(--color-accent-orange)', zIndex: 0, transition: '0.5s' }}></div>

                        {steps.map(step => (
                            <div key={step.id} style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                                <div
                                    onClick={() => step.id < activeStep && handleStepChange(step.id)}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        backgroundColor: activeStep >= step.id ? 'var(--color-accent-orange)' : 'white',
                                        color: activeStep >= step.id ? 'white' : 'var(--color-text-muted)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 800,
                                        margin: '0 auto 0.75rem',
                                        border: '2px solid',
                                        borderColor: activeStep >= step.id ? 'var(--color-accent-orange)' : '#E2E8F0',
                                        cursor: step.id < activeStep ? 'pointer' : 'default',
                                        transition: '0.3s'
                                    }}
                                >
                                    {activeStep > step.id ? <FaCheck /> : step.icon}
                                </div>
                                <span style={{
                                    fontSize: '0.85rem',
                                    fontWeight: activeStep >= step.id ? 800 : 500,
                                    color: activeStep >= step.id ? 'var(--color-primary)' : 'var(--color-text-muted)'
                                }}>{step.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <AnimatePresence mode="wait">
                        {/* STEP 1: Categories */}
                        {activeStep === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Select Your Category</h2>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                        <button onClick={() => setCurrency('INR')} className={`btn ${currency === 'INR' ? 'btn-orange' : 'btn-outline'}`} style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>INR (Indian)</button>
                                        <button onClick={() => setCurrency('USD')} className={`btn ${currency === 'USD' ? 'btn-orange' : 'btn-outline'}`} style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>USD (Foreign)</button>
                                    </div>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '2rem',
                                    justifyContent: 'center',
                                    maxWidth: '1200px',
                                    margin: '0 auto'
                                }} className="delegates-flex-container">
                                    {delegates.map((d, i) => (
                                        <div
                                            key={i}
                                            className="card-glass"
                                            style={{
                                                padding: '3rem 2rem',
                                                border: d.popular ? '2px solid var(--color-accent-orange)' : '1px solid var(--color-border)',
                                                position: 'relative',
                                                flex: '1 1 300px',
                                                maxWidth: '380px',
                                                display: 'flex',
                                                flexDirection: 'column'
                                            }}
                                        >
                                            {d.popular && (
                                                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--color-accent-orange)', color: 'white', padding: '0.25rem 1rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 800 }}>RECOMMENDED</div>
                                            )}
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>{d.role}</h3>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{d.sub}</p>
                                            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '2rem' }}>
                                                {currency === 'INR' ? d.priceINR : d.priceUSD}
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', flexGrow: 1 }}>
                                                {d.features.map((f, j) => (
                                                    <div key={j} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                                                        <FaCheckCircle color="var(--color-accent-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                        <span>{f}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <button
                                                onClick={() => handleStepChange(2)}
                                                className={`btn ${d.popular ? 'btn-orange' : 'btn-outline'}`}
                                                style={{ width: '100%', padding: '1rem', marginTop: 'auto' }}
                                            >
                                                {d.btnLabel}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: Payment */}
                        {activeStep === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                style={{ maxWidth: '1000px', margin: '0 auto' }}
                            >
                                <h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}>Configure Payment</h2>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '3rem',
                                    justifyContent: 'center'
                                }} className="payment-flex-container">
                                    {/* Online Payment via SBI */}
                                    <div className="card-glass" style={{ padding: '3rem', flex: '1 1 400px', maxWidth: '500px' }}>
                                        <div style={{ color: 'var(--color-accent-orange)', fontSize: '2.5rem', marginBottom: '1.5rem' }}><FaCreditCard /></div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Online Payment</h3>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                                            Pay securely using **SBI Collect** Payment Gateway. Supports Net Banking, Credit Cards, Debit Cards, and UPI.
                                        </p>
                                        <div style={{ backgroundColor: '#F0F9FF', borderLeft: '4px solid #0EA5E9', padding: '1rem', marginBottom: '2.5rem' }}>
                                            <p style={{ fontSize: '0.85rem', color: '#0369A1' }}>
                                                <strong>Note:</strong> You will be redirected to SBI secure page. Please save the payment receipt (PDF) for the next step.
                                            </p>
                                        </div>
                                        <button className="btn btn-orange" style={{ width: '100%', padding: '1.25rem' }}>
                                            Pay Online via SBI Gateway
                                        </button>
                                        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Secure 256-bit SSL Encrypted Payment</p>
                                        </div>
                                    </div>

                                    {/* Offline / Bank Transfer */}
                                    <div className="card-glass" style={{ padding: '3rem', flex: '1 1 400px', maxWidth: '500px' }}>
                                        <div style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1.5rem' }}><FaUniversity /></div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>NEFT / IMPS Transfer</h3>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                                            Transfer directly to the college bank account. Once transferred, you'll need the **UTR Number** for registration.
                                        </p>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                                <span style={{ color: 'var(--color-text-muted)' }}>Bank Name:</span>
                                                <span style={{ fontWeight: 700 }}>State Bank of India</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                                <span style={{ color: 'var(--color-text-muted)' }}>A/C Name:</span>
                                                <span style={{ fontWeight: 700 }}>Principal, GECCS</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                                <span style={{ color: 'var(--color-text-muted)' }}>A/C Number:</span>
                                                <span style={{ fontWeight: 700, fontFamily: 'monospace' }}>123XXXXX098</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                                <span style={{ color: 'var(--color-text-muted)' }}>IFSC Code:</span>
                                                <span style={{ fontWeight: 700, fontFamily: 'monospace' }}>SBIN0001234</span>
                                            </div>
                                        </div>

                                        <button onClick={() => handleStepChange(3)} className="btn btn-outline" style={{ width: '100%', padding: '1.25rem' }}>
                                            I have paid, Proceed to Form
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: Submission & Camera Ready */}
                        {activeStep === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                style={{ maxWidth: '900px', margin: '0 auto' }}
                            >
                                <div className="card-glass" style={{ padding: '4rem' }}>
                                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Registration & Camera Ready Form</h2>

                                    <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                        {/* Basic Info */}
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '1.5rem'
                                        }} className="form-grid-flex">
                                            <div className="form-group" style={{ flex: '1 1 300px' }}>
                                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name *</label>
                                                <input type="text" placeholder="As it should appear on certificate" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0' }} />
                                            </div>
                                            <div className="form-group" style={{ flex: '1 1 300px' }}>
                                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address *</label>
                                                <input type="email" placeholder="active-email@example.com" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0' }} />
                                            </div>
                                        </div>

                                        {/* Paper Details (authors only) */}
                                        <div style={{ padding: '2rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px dashed #CBD5E1' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                                <FaFileUpload color="var(--color-accent-orange)" />
                                                <h4 style={{ fontWeight: 800 }}>Camera Ready Submission (Authors Only)</h4>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                                <div className="form-group">
                                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Paper ID *</label>
                                                    <input type="text" placeholder="e.g. ICAISG-2026-045" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0', backgroundColor: 'white' }} />
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '1.5rem'
                                                }} className="upload-grid-flex">
                                                    <div className="form-group" style={{ flex: '1 1 250px' }}>
                                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Camera Ready Paper (PDF) *</label>
                                                        <div style={{ padding: '1.5rem', border: '2px dashed #E2E8F0', borderRadius: '12px', textAlign: 'center', backgroundColor: 'white' }}>
                                                            <FaCloudUploadAlt size={30} color="#94A3B8" />
                                                            <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.5rem' }}>Click or drag PDF here</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-group" style={{ flex: '1 1 250px' }}>
                                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Similarity Report (PDF) *</label>
                                                        <div style={{ padding: '1.5rem', border: '2px dashed #E2E8F0', borderRadius: '12px', textAlign: 'center', backgroundColor: 'white' }}>
                                                            <FaCloudUploadAlt size={30} color="#94A3B8" />
                                                            <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.5rem' }}>Must be below 20%</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Payment Proof */}
                                        <div className="form-group">
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Payment Reference (UTR/Transaction ID) *</label>
                                            <input type="text" placeholder="Enter the 12-digit UTR or Transaction code" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0' }} />
                                        </div>

                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', backgroundColor: '#FFF7ED', padding: '1rem', borderRadius: '12px' }}>
                                            <FaInfoCircle color="#F97316" style={{ marginTop: '2px' }} />
                                            <p style={{ fontSize: '0.85rem', color: '#9A3412', lineHeight: 1.5 }}>
                                                Registration is only confirmed after verification of the payment reference. This usually takes 2-3 working days. For authors, the technical committee will also verify the Camera Ready manuscript.
                                            </p>
                                        </div>

                                        <button type="submit" className="btn btn-orange" style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem' }}>
                                            Finish Registration & Submit Documentation
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* FAQ Section at bottom */}
                    {activeStep === 1 && (
                        <div style={{ marginTop: '6rem' }}>
                            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Registration FAQ</h2>
                                <p style={{ color: 'var(--color-text-muted)' }}>Quick answers to common questions about our portal.</p>
                            </div>
                            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {faqs.map((faq, i) => (
                                    <div key={i} className="card-glass" style={{ padding: 0, overflow: 'hidden' }}>
                                        <button
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}
                                        >
                                            <span style={{ fontWeight: 700, fontSize: '1.05rem', textAlign: 'left' }}>{faq.q}</span>
                                            <FaChevronDown style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: '0.3s' }} color="#94A3B8" />
                                        </button>
                                        {openFaq === i && (
                                            <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{faq.a}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default RegistrationPage;
