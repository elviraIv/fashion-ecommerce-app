import React from "react";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLatter from "../components/NewsLatter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Anouncement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLatter />
      <Footer />
    </div>
  );
};

export default Home;
