import React from "react";
import stocky from "../images/stockyImage.png";
import emaily from "../images/emailyImage.png";
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
        <img src={stocky} alt=" Stocky Project Image" />
        <div className="projectText">
          <h1>
            A stock trading platform build on NodeJS backend with React frontend
            and MongoDB storage.
          </h1>
          <hr />
          <div className="languages">
            <span>#react</span> <span>#NodeJS</span>
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
        <img src={emaily} alt=" Emaily Project Image" />
        <div className="projectText">
          <h1>
            A stock trading platform build on NodeJS backend with React frontend
            and MongoDB storage.
          </h1>
          <hr />
          <div className="languages">
            <span>#react</span> <span>#redux</span>
            <span>#Sengrid</span> <span>#MongoDB</span>
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
        <img src={stocky} alt=" Stocky Project Image" />
        <div className="projectText">
          <h1>
            A stock trading platform build on NodeJS backend with React frontend
            and MongoDB storage.
          </h1>
          <hr />
          <div className="languages">
            <span>#react</span> <span>#NodeJS</span>
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
