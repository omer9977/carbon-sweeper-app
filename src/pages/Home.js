import React, { useEffect } from 'react';
import '../css/welcome.css';
import '../css/home.css';


const Home = () => {
useEffect(() => {
  console.log("Home page loaded");
}, [])

  return (

    <div className="content">
      <div>
        <img className="custom-image" src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/VB4VMQHUZJO6HLU5YUVDW7ZXQI.jpg" alt="house" />
      </div>
      <div className="content">
        <div className="statsec">With our combined efforts it would take us <span style={{ color: "red" }}>148 years</span> to neutralize the yearly
          emission of <span style={{ color: "yellow" }}>British Petrolum</span>.
        </div>
      </div>
    </div>

  );
};

export default Home;
