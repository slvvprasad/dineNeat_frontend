// import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import herobanner from "../assets/herobanner.png";
import Cities from "../components/Cities";
import Developers from "../components/Developers";
// import Trip from "../components/Trip";


function Home() {
  return (
    <>
     <Navbar/>
      <Hero
      cName="hero"
    //   heroImg="https://c0.wallpaperflare.com/preview/559/870/338/meal-background-dish-vegetarian-thumbnail.jpg"
      heroImg={herobanner}
      title="Book Your Dine & Save Your Time"
      text="Book your favourite place prior to your visit"
      buttonText="Book Now"
      url="/"
      btnClass="show"
      />
      <Cities/>
      {/* <Developers/> */}
      <Footer/>
    </>
  );
}

export default Home;
