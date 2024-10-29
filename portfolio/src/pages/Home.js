import React from "react";
import { LinkedIn, GitHub } from "@mui/icons-material";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Sumedh!</h2>
        <div className="prompt">
          <p>
            Currently pursuing Master's in Computer Science from Stevens Institute
            of Technology with a passion in Web Development
          </p>
          <a href="https://www.linkedin.com/in/sumedh-badnore"><LinkedIn /></a>
          <a href="https://github.com/sumedhbadnore"><GitHub /></a>
          
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Languages </h2>
            <span>
              {" "}
              Java, C++, Python, JavaScript, TypeScript, HTML5/CSS3, Node.js, C#{" "}
            </span>
          </li>
          <li className="item">
            <h2> Libraries and Framworks </h2>
            <span>
              {" "}
              Node.js, Flask, Express.js, React, Angular, Bootstrap,
              Scikit-Learn, Pandas, Keras, PyTorch{" "}
            </span>
          </li>
          <li className="item">
            <h2> Tools and Technology </h2>
            <span>
              {" "}
              Git, GitHub, AWS, Google Cloud, MATLAB, Postman, Microsoft Office,
              Agile (Scrum){" "}
            </span>
          </li>
          <li className="item">
            <h2> Database Management </h2>
            <span> MongoDB, SQL, NoSQL, Firebase </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
