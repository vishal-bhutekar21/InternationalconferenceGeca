import Tracks from '../components/Tracks';

const TracksPage = () => {
    return (
        <main style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg-soft-orange)', minHeight: '100vh' }}>
            <Tracks />
            <section className="section" style={{ backgroundColor: 'transparent' }}>
                <div className="container">
                    <div className="card-glass" style={{ padding: '3rem' }}>
                        <h2 style={{ marginBottom: '2rem' }}>Author Guidelines</h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)' }}>
                            <li>• Papers must be original and not submitted elsewhere.</li>
                            <li>• Follow the Springer/IEEE template for formatting.</li>
                            <li>• Maximum page limit: 8-10 pages including references.</li>
                            <li>• All submissions must be done through the official portal.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TracksPage;
