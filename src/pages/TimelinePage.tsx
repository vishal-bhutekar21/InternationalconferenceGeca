import Timeline from '../components/Timeline';
import ImportantDates from '../components/ImportantDates';

const TimelinePage = () => {
    return (
        <main style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
            <Timeline />
            <ImportantDates />
        </main>
    );
};

export default TimelinePage;
