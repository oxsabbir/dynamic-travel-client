import Nav from "@/app/components/Header/Nav";
import Hero from "@/app/components/LandingPages/Hero";
import Destination from "@/app/components/LandingPages/Destination";
import Unleash from "@/app/components/LandingPages/Unleash";
import About from "@/app/components/LandingPages/About";
import Discover from "@/app/components/LandingPages/Discover";
import Reviews from "@/app/components/LandingPages/Reviews";
import Explore from "@/app/components/LandingPages/Explore";
import Footer from "@/app/components/LandingPages/Footer";
import Container from "./components/Extras/Container";

export default function Home() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Hero />
        <Container>
          <Destination />
          <Unleash />
          <About />
          <Discover />
          <Reviews />
          <Explore />
        </Container>
      </main>
      <Footer />
    </>
  );
}
