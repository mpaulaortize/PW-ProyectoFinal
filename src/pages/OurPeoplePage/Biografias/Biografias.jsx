import React from "react";
import "./Biografia.css";

function Biografia() {
  return (
    <div className="general-div-bio">
      <div className="top-container">
        <div className="container-maria">
          <h4 className="nombres">Maria Paula Ortiz</h4>
          <h4 className="specializations">
            Marketing | Advertising | UX/UI Design
          </h4>
          <p>
            Maria Paula, a talented UX UI Jr. Designer, enhances brands through
            graphic design and web interface creation. As President of the
            Advertising Student Association, she significantly boosts social
            media engagement. Founder of Yellow Point Studio, she excels in
            creative direction and visual identity. Studying UX UI Design and
            Marketing/Publicity, Maria Paula is proficient in Figma, Adobe
            Creative Suite, and driven by a strong work ethic.
          </p>
        </div>

        <div className="container-sofia">
          <h4 className="nombres">Sofia Cabrera</h4>
          <h4 className="specializations">UX | UI Design</h4>
          <p>
            My name is Sofia Cabrera, interactive media design student, in my
            university career I have been involved in various projects, creating
            an extensive portfolio and gaining experience in the field. I have
            led personal projects in UI and UX such as the design of the website
            of a company, Radio Sanyo. Finally, I have worked with small
            businesses managing their social networks
          </p>
        </div>
      </div>

      <div className="bottom-container">
        <div className="container-caro">
          <h4 className="nombres">Carolina Velásquez</h4>
          <h4 className="specializations">UX | UI Design</h4>
          <p>
            Carolina, a UX/UI designer and Interactive Media Design student,
            excels as an academic monitor, creates compelling flyers, and serves
            as a community manager. She embraces freelance projects and
            collaborative settings, showcasing creativity and teamwork.
          </p>
        </div>

        <div className="container-lina">
          <h4 className="nombres">Lina Manjarrez</h4>
          <h4 className="specializations">UX | UI Design</h4>
          <p>
            Lina Manjarrez is a talented interactive media designer studying at
            Universidad Icesi. Passionate about design trends and continuous
            learning, she has experience in UI and UX design, contributing to
            projects for the Valle del Lili Foundation and Banco W.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Biografia;
