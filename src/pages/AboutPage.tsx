import About from '../components/About';
import GECA from '../components/GECA';
import Timeline from '../components/Timeline';
import ConferenceTasks from '../components/ConferenceTasks';
import PublishedIndexing from '../components/PublishedIndexing';
import PresentationGuidelines from '../components/PresentationGuidelines';

const AboutPage = () => {
    return (
        <main style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
            <About />
            <Timeline />
            <ConferenceTasks />
            <PublishedIndexing />
            <PresentationGuidelines />
            <GECA />
        </main>
    );
};

export default AboutPage;
