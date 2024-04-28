import "./app.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DigitalCollectibles from "./components/DigitalCollectibles";
import CommunityPerks from "./components/CommunityPerks";
import SuperHeroWorld from "./components/SupperHeroWorld";
import RoadMaps from "./components/RoadMaps";
import FeatureCollections from "./components/featureCollections";
import NewsForJoin from "./components/NewsForJoin";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="container">
      <section className="main-section">
        <Header />
        <Hero/>
      </section>
      <div className="main-greadent-section container-top-spacing">
        <DigitalCollectibles/>
      </div>
      <div className="main-greadent-section">
        <CommunityPerks/>
      </div>
      <div className="main-greadent-section">
        <SuperHeroWorld/>
      </div>
      <div className="main-greadent-section">
        <RoadMaps/>
      </div>
      <div className="main-feacture-section">
        <FeatureCollections/>
      </div>
      <div className="main-greadent-section purple-greadent container-top-spacing2 ">
        <NewsForJoin/>
        <Footer/>
      </div>
     
    </main>
  );
}
