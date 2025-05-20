import NavBar from "../components/Navbar";
import QuoteBtn from "../components/QuoteBtn";
import "../styles/Home.css";
import QuoteForm from "../components/quoteForm";
import { useState, useEffect } from "react";

function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const toggleNavMenu = () => {
    setIsNavOpen(!isNavOpen);
  }

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isFormOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [isFormOpen]);

  return (
    <div className="hero" id="home">
      <div className="hero-backdrop-clicker" onClick={()=>setIsNavOpen(false)}></div>
      <NavBar isNavOpen={isNavOpen} toggleNavMenu={toggleNavMenu} containerClasssName="navbar-container" navItemsClassName="navItems" hamburgerClassName="Hamburger" logoSrc="/img/logo_gold.png"/>

      <div className="hero-content" onClick={()=>setIsNavOpen(false)}>
        <div className="hero-header">
          <h1>ZOEFIRST</h1>
          <h1>CONTRACTORS</h1>
        </div>
        <p>THE ONE STOP HOME IMPROVEMENT SPECIALIST</p>

        <div className="hero-quote-btn-container">
          <QuoteBtn toggleForm={toggleForm} />
        </div>
      </div>

      {isFormOpen ? <QuoteForm toggleForm={toggleForm} /> : null}
    </div>
  );
}

export default HomePage;
