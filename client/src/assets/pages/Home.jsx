import React from "react";
import Slider from "../components/Slider/Slider";
import Facility from "../components/Static/Facility/Facility";
import ShortIntro from "../components/Static/ShortIntro/ShortIntro";
import WhyChoose from "../components/Static/WhyChoose/WhyChoose";
import ContactMessage from "../components/Static/ConatctMessage/ContactMessage";
import PatentReviews from "../components/Static/PatentReviews/PatentReviews";

const Home = () => {
  return (
    <>
      {/* // slider  */}
      <Slider />
      {/* faciliyt  */}
      <Facility />
      {/* short hospital intro */}
      <ShortIntro />
      {/* why choose page */}
      <WhyChoose />
      {/* testimonial */}
      <PatentReviews />
      {/* conatct  */}
      <ContactMessage />
    </>
  );
};

export default Home;