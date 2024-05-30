import { Footer } from "../../components/Footer/Footer";
import "./LandingPage.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Landing() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/contacto");
    };

    const handleClick = () => {
        navigate("/work")
    }

  return (
    <main className="landing-container">
    <div className="background-land">
        <img className="image-land" 
        src='../../../public/imgs/Lina/Vector8.svg'/>
        <div className="first-section">
            <h1>CRAFTING FOR THE PEOPLE, <br/>
             DESIGNING WITH PURPOSE.</h1>
            <h4>Graphic Design | Brand Design | Web Design</h4>
            <div className="btn-container">
                <button className="btn-land" onClick={handleButtonClick}>
                    <span className="btn-txt">Let's work together</span>
                </button>
            </div>
        </div>
        <div className="pink-box">
            <div className="second-section">
                <div className="text">
                    <h4>Our team of experts can help you with...</h4>
                    <h2>BRAND DESIGN</h2>
                    <hr></hr>
                    <h2>WEB DESIGN</h2>
                    <hr></hr>
                    <h2>DIGITAL PRODUCTS</h2>
                </div>
            </div>
        </div>
        <img className="image2" 
        src='../../../public/imgs/Lina/yellow.png'/>
        <div className="third-section">
            <h4>ABOUT US</h4>
            <h2>WE BELIEVE IN DESIGNING FOR <br/>
            PEOPLE, NOT JUST FOR USERS.</h2>
            <p>Every design we create is crafted with <br/>
            individuals in mind, understanding their <br/>
            needs, desires, and aspirations. We are <br/>
            firm believers that every design should be <br/>
            anchored in a thoughtful strategy.</p>
        </div>
        <div className="scroll-container" onClick={handleClick}>
            <img src='../../../public/imgs/Lina/dosTazas.png'/>
            <img src='../../../public/imgs/Lina/dTazasApp.png'/>
        </div>
        <div className="scrollD-container" onClick={handleClick}>
        <img src='../../../public/imgs/Lina/dtdc.svg'/>
        <img src='../../../public/imgs/Lina/dtdcd.svg'/>
        <img src='../../../public/imgs/Lina/dtdc.svg'/>
        <img src='../../../public/imgs/Lina/dtdcd.svg'/>
        </div>
        <div className="white-box">
        </div>
        <div className="last-section">
            <h4>OUR WORK</h4>
            <p>We are storytellers, strategists, and<br/> 
              creators driven by the belief that <b>every<br/> 
              design should have a purpose.</b> Our <br/>
              mission is simple: to craft meaningful <br/> 
              experiences that resonate with people.
            </p>
        </div>
      </div>
      <Footer />
    </main>
    
  )
}