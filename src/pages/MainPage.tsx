import WelcomeSection from '../features/WelcomeSection/WelcomeSection';
import NatureConceptSection from '../features/NatureConceptSection/NatureConceptSection';
import ProjectsCatalog from '../features/ProjectsCatalog/ProjectsCatalog';
import HomeInteriors from '../features/HomeInteriors/HomeInteriors';
import CarSection from '../features/CarSection/CarSection';
import LocationSection from '../features/LocationSection/LocationSection';
import PropertyDetailsSection from '../features/PropertyDetailsSection/PropertyDetailsSection';
import Footer from '../features/Footer/Footer';

const MainPage = () => {
  return (
    <>
      <WelcomeSection />
      <NatureConceptSection />
      <ProjectsCatalog />
      <HomeInteriors />
      <CarSection />
      <LocationSection />
      <PropertyDetailsSection />
      <Footer />
    </>
  );
};

export default MainPage;
