import "./app.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DigitalCollectibles from "./components/DigitalCollectibles";
import CommunityPerks from "./components/CommunityPerks";

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
    </main>
  );
}
