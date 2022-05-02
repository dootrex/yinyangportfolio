import React from "react";
import stocky from "../images/stocky.png";
import emaily from "../images/emaily.png";
import movie from "../images/movie-mania.png";
import pthree from "../images/pthree.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PageProjects() {
  return (
    <motion.section
      className="projects"
      initial={{ y: -20, x: -20 }}
      animate={{ x: 0, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <div className="projectCard">
        <img src={pthree} alt=" pthree Project" />
        <div className="projectText">
          <h1>PThree</h1>
          <p>
            A stock trading platform where users is granted 10,000 virtual coins
            to invest in stocks from multiple exchanges. Can be used as a
            learning platform for learning how to invest.
          </p>
          <hr />
          <div className="languages">
            <span>#ReactJS</span> <span>#NodeJS</span> <span>#Bootstrap</span>
            <span>#MongoDB</span> <span>#AlphaVantageAPI</span>
          </div>
          <div className="codeLinks">
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
            >
              <h3>Live</h3>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
            >
              <h3>Code</h3>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
            >
              <Link to="/stocky">
                <h3>Info</h3>
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="projectCard">
        <img src={stocky} alt=" Stocky Project" />
        <div className="projectText">
          <h1>Stocky</h1>
          <p>
            A stock trading platform where users is granted 10,000 virtual coins
            to invest in stocks from multiple exchanges. Can be used as a
            learning platform for learning how to invest.
          </p>
          <hr />
          <div className="languages">
            <span>#ReactJS</span> <span>#NodeJS</span> <span>#Bootstrap</span>
            <span>#MongoDB</span> <span>#AlphaVantageAPI</span>
          </div>
          <div className="codeLinks">
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
            >
              <h3>Live</h3>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
            >
              <h3>Code</h3>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
            >
              <Link to="/stocky">
                <h3>Info</h3>
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="projectCard">
        <img src={emaily} alt=" Emaily Project" />
        <div className="projectText">
          <h1>PollKing</h1>
          <p>
            A survey app built to send surveys over email or via a link for
            public voting. The app was creted with a scalable AWS serverless
            backend with DynamoDB and S3 bucket for storage, Cognito for
            authorization and ReSTful API Gateway.
          </p>

          <div className="languages">
            <span>#ReactJS</span> <span>#AWS</span> <span>#NodeJS</span>
            <span>#Sendgrid</span> <span>#DynamoDB</span> <span>#SCSS</span>
          </div>
          <div className="codeLinks">
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
            >
              <h3>Live</h3>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
            >
              <h3>Code</h3>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
            >
              <Link to="/emaily">
                <h3>Info</h3>
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="projectCard">
        <img src={movie} alt="Movie Mania Project" />
        <div className="projectText">
          <h1>Movie-Mania</h1>
          <p>
            An interface for MovieDB API, where one can search movies or browse
            for movies based on genre, release date or language. A replica
            project was also created using Angular for frontend.
          </p>
          <hr />
          <div className="languages">
            <span>#ReactJS</span> <span>#Angular</span> <span>#SCSS</span>
            <span>#MovieDB</span> <span>#Bootstrap</span> <span>#Redux</span>
          </div>
          <div className="codeLinks">
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
            >
              <h3>Live</h3>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
            >
              <h3>Code</h3>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
            >
              <Link to="/emaily">
                <h3>Info</h3>
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
