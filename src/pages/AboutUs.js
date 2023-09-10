import React from 'react';
import ricofresh from '../ricofresh.jpg';


export default function AboutUs() {
  return (
    <div style={{maxWidth: 700, margin: '0 auto'}}>
      <h1 style={{ textAlign: 'center' }}>About Us</h1>
      <div style={{textAlign: 'center'}}>
      <img  src={ricofresh}/>

      </div>

      <p>
        Welcome to our eCommerce site! At Ricomart, we're passionate about providing you with a seamless online shopping experience. With a commitment to quality, convenience, and customer satisfaction, we've built a platform that brings you a vast selection of products right to your fingertips.
      </p>
      <p>
        Our journey began with a vision to connect people with the products they love, offering everything from the latest fashion trends to cutting-edge electronics. We take pride in our user-friendly interface, secure payment options, and efficient delivery services. Whether you're a fashion-forward trendsetter, a tech enthusiast, or simply looking for everyday essentials, we're here to cater to your needs. Thank you for choosing us as your trusted online shopping destination!
      </p>
    </div>
  );
}
