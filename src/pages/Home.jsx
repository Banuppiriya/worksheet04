import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="section">
          <h2>About Us</h2>
          <p>This site offers full stack web development tutorials and resources.</p>
        </section>
        <section className="section">
          <h2>Services</h2>
          <p>We provide coding lessons, project support, and mentorship.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
