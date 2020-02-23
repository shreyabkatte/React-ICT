import React from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Banner from "../components/Banner";
import Band from "../components/Band";
import VilleRose from "../img/about.jpg"

const Home = () => {
  return (
    <div>
      <Header />
      <Tabs />
      <Banner />
      <Band />
      <section className="about-section spad">
		    <div className="container" style={{display:"flex",justifyContent : "center"}}>
			    <div className="row" style={{display:"flex",width :"60%"}}>
            <div className="col-md-6 about-content" style={{marginRight :20}}>
              <h2>Toulouse, la ville rose</h2>
              <p>In the heart of the South-West of France, Toulouse is an urban area that boasts multiple attributes that seduce students, engineers, entrepreneurs and travellers alike. It combines a strong economic outlook, stunningly beautiful heritage, a rich culture, high-quality gastronomy… Knowledgeable and also vibrant, this is all thanks to a sun-kissed climate and a local temperament that is always inclined to celebrate and create joy. To ensure you don’t miss a thing, dare to explore the city we like to call the Ville Rose. What awaits you? Adventure! The adventure of aviation, of Space and of science, but also your own adventure, one which will be filled with heart stopping moments.</p>
              <a href="readmore.html" className="s-readmore">Readmore <i className="fa fa-angle-double-right"></i></a>
            </div>
				    <div className="col-md-6 about-img" style={{marginLeft :20}}>
					    <img src={VilleRose} alt=""/>
				    </div>
			    </div>
		    </div>
	    </section>
      {/* Services section */}
	    <section className="services-section spad">
		    <div className="container" style={{display: "flex" ,  justifyContent: "center"}}>
					<div className="service-box">
						<h4 className="vision vision-header">Our Vision</h4>
						<k className="vision">“Connect and collaborate with those interested in India and its diverse cultures </k>
						<k className="vision"> Support Indian community in Toulouse</k>
						<k className="vision">Help integrate Indians into French culture – make everyone feel home !!”</k>
					</div>
				 </div>
      </section>
      {/* Services section end  */}
    </div>
  );
};

export default Home;
