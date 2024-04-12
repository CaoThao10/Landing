import React from "react";
import Heading from "../../header/Heading";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Criteria from "./components/Criteria";
import Reasonn from "./components/Reasonn";
import Price from "./components/Price";
import Contract from "./components/Contract";
import Advise from "./components/Advise";
import Question from "./components/Question";
import Contact from "./components/Contact";
import Footer1 from "../../footer/Footer1";
import Criteria1 from "./components/Criteria1";

const HomePage = () => {
  return (
    <>
      <Heading></Heading>
      <Banner></Banner>
      <Service></Service>
      {/* <Criteria></Criteria> */}
      <Criteria1></Criteria1>
      <Reasonn></Reasonn>
      <Price></Price>
      <Contract></Contract>
      <Advise></Advise>
      <Question></Question>
      <Contact></Contact>
      <Footer1></Footer1>
    </>
  );
};

export default HomePage;
