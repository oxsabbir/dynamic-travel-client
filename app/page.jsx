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
        <section>
          <Hero />
        </section>
        <Container>
          <section className=" py-10 container">
            <Destination />
          </section>
          <section className=" py-10 container">
            <Unleash />
          </section>
          <section id="about" className=" py-10 container">
            <About />
          </section>
          <section className=" py-10 container">
            <Discover />
          </section>
          <section className=" py-10 container 0">
            <Reviews />
          </section>
          <section className=" py-20 container">
            <Explore />
          </section>
        </Container>
      </main>
      <footer className=" pt-10  bg-offWhite">
        <Container>
          <Footer />
        </Container>
      </footer>
    </>
  );
}
