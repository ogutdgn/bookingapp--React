import React from 'react';
import Featured from '../../components/Featured/Featured';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MailList from '../../components/MailList/MailList';
import Navbar from '../../components/Navbar/Navbar';
import PropertyList from '../../components/PropertyList/PropertyList';
import "./Home.css";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property name</h1>
          <PropertyList/>
          <h1 className="homeTitle">Home guests love</h1>
          <FeaturedProperties/>

          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home