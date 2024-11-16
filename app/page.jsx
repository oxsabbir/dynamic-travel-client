import Nav from "@/app/components/Header/Nav";
import Hero from "@/app/components/LandingPage/Hero";
import Destination from "@/app/components/LandingPage/Destination";
import Unleash from "@/app/components/LandingPage/Unleash";
import About from "@/app/components/LandingPage/About";
import Discover from "@/app/components/LandingPage/Discover";
import Reviews from "@/app/components/LandingPage/Reviews";
import Explore from "@/app/components/LandingPage/Explore";
import Footer from "@/app/components/LandingPage/Footer";
import Container from "./components/Extra/Container";

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
