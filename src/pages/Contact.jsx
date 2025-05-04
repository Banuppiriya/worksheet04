import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Header />
      <main className="main">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />

          <label>Email:</label>
          <input type="email" placeholder="Your Email" />

          <label>Message:</label>
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
