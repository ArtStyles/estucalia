import HeroSection from './components/home/HeroSection';
import CompanyInfo from './components/home/CompanyInfo';
import AplicationSection from './components/home/AplicationSection';
import FinishesSection from './components/home/FinishesSection';
import InspirationSection from './components/home/InspirationSection';
import NewsSection from './components/home/NewsSection';
import ProjectHelpSection from './components/contacto/ProjectHelpSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <CompanyInfo />
      <ProjectHelpSection />
      <AplicationSection />
      <FinishesSection />
      <InspirationSection />
      <NewsSection />
    </main>
  );
}