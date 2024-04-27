import Image from "next/image";
import "./app.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="container">
      <section className="main-section">
        <Header />
        <Hero/>
      </section>
    </main>
  );
}
