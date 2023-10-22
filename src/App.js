import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import profile from "./images/mypic.png";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="container">
<header class='d-flex flex-row justify-content-between App-header'>
                <div>
                    <h1>Preethi</h1>
                    <p>Web developer</p>
                </div>
                <img src={profile}/>
            </header>
         <section className="section About" id="about">
          <h2>About Me</h2>
          <p>
          Passionate web developer with expertise in React, HTML, and CSS, dedicated to crafting seamless user experiences.
           Proven track record of delivering high-quality solutions through collaborative problem-solving.
           Committed to pushing the boundaries of web development and contributing to impactful projects.</p>
        </section>
        <section className="section Projects" id="projects">
          <h2>Projects</h2>
          <div className="Project">
            <h3>Project 1</h3>
            <p>Controlling computer applications using Arduino </p>
          </div>
          <div className="Project">
            <h3>Project 2</h3>
            <p>Smart attendance system Using Raspberry pi</p>
          </div>
          <div className="Project">
            <h3>Project 3</h3>
            <p>Landing page using HTML,CSS</p>
          </div>
          <div className="Project">
            <h3>Project 4</h3>
            <p>To do list using HTML,CSS,JS</p>
          </div>
          {/* Add more projects as needed */}
        </section>
        <section className="Skills" id="skills">
          <h2>Skills</h2>
          <p>Proficient in front-end development with strong command over React, HTML, and CSS.
             Well-versed in back-end technologies, including Node.js, for comprehensive web solutions.
             Adept at collaborative problem-solving, ensuring high-quality and innovative results in every project.</p>
          {/* Add more skills as needed */}
        </section>
        <section className="section Contact" id="contact">
          <h2>Contact</h2>
          <p>Email: indumaddi9@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/preethi-maddi-387084294/" target="_blank" rel="noopener noreferrer">linkedin</a></p>
          <p>GitHub: <a href="https://github.com/PREETHIMADDI" target="_blank" rel="noopener noreferrer">github</a></p>
          <p>Number: 8519942045</p>
        </section>
      </div>
    </div>
  );
}

export default App;