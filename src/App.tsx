import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import NewsTicker from './components/NewsTicker';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import TracksPage from './pages/TracksPage';
import TimelinePage from './pages/TimelinePage';
import CommitteePage from './pages/CommitteePage';
import VenuePage from './pages/VenuePage';
import ProceedingsPage from './pages/ProceedingsPage';
import ContactPage from './pages/ContactPage';
import RegistrationPage from './pages/RegistrationPage';
import SpeakersPage from './pages/SpeakersPage';
import GalleryPage from './pages/GalleryPage';
import LoginPage from './pages/LoginPage';
import AccommodationPage from './pages/AccommodationPage';
import PresentationSchedule from './pages/PresentationSchedule';
import GuidelinesPage from './pages/GuidelinesPage';
import PublishIndexingPage from './pages/PublishIndexingPage';
import PublishingPartnersPage from './pages/PublishingPartnersPage';
import PresentationGuidelinesPage from './pages/PresentationGuidelinesPage';
import AdvisoryBoardPage from './pages/AdvisoryBoardPage';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <NewsTicker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tracks" element={<TracksPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/committee" element={<CommitteePage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/venue" element={<VenuePage />} />
        <Route path="/proceedings" element={<ProceedingsPage />} />
        <Route path="/publish-indexing" element={<PublishIndexingPage />} />
        <Route path="/publishing-partners" element={<PublishingPartnersPage />} />
        <Route path="/presentation-guidelines" element={<PresentationGuidelinesPage />} />
        <Route path="/advisory-board" element={<AdvisoryBoardPage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
        <Route path="/presentation-schedule" element={<PresentationSchedule />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
