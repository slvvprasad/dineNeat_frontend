import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/chef services img.png";
import Footer from "../components/Footer";
// import Footer from "../components/Footer";
import Cities from "../components/Cities";

function Service() {
  return (
    <>
      <Navbar/>
      <Hero cName="hero-mid" heroImg={AboutImg} title="Service" btnClass="hide"/>
      <Cities/>
      <Footer/>
    </>
  );
}

export default Service;
