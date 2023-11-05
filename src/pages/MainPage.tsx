import WelcomeSection from '../features/WelcomeSection/WelcomeSection';
import NatureConceptSection from '../features/NatureConceptSection/NatureConceptSection';
import CatalogHouses from '../features/CatalogHouses/CatalogHouses';
import HomeDesigns from '../features/HomeDesigns/HomeDesigns';
import CarSection from '../features/CarSection/CarSection';

const MainPage = () => {
  return (
    <>
      <WelcomeSection />
      <NatureConceptSection />
      <CatalogHouses />
      <HomeDesigns />
      <CarSection />
    </>
  );
};

export default MainPage;
