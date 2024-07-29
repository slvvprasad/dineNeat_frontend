import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/abouthero.png";
import Footer from "../components/Footer";
import Developers from "../components/Developers";
// import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar/>
      <Hero
      cName="hero-mid" heroImg={AboutImg} title="About" text="Dine n Eat acts as a platform for a customer who wants to visit a restaurant or a cafeteria or some other food court and enjoy the meal at their joy with PRE-BENCH-BOOKING.We are trying to achieve its goal in accomplishing the customer's satisfaction while visiting to the food places. Dine n Eat is the platform for providing the best food services in a different way to reach out all types of customers." btnClass="hide"/>
      <Developers/>
      <Footer/>
    </>
  );
}

export default About;
