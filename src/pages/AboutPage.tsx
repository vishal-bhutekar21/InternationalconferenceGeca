import About from '../components/About';
import GECA from '../components/GECA';

const AboutPage = () => {
    return (
        <main style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
            <About />
            <GECA />
        </main>
    );
};

export default AboutPage;
