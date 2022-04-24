import React from "react";
import * as Icon from "react-feather";
import { motion } from "framer-motion";

export default function PageContact() {
  return (
    <section className="contact">
      <h1>Reach Out</h1>
      <motion.h3
        initial={{
          color: "black",
          textDecoration: "none",
        }}
        animate={{
          color: "red",
          scale: 1.1,
          textDecoration: "undeline",
        }}
        transition={{
          yoyo: Infinity,
        }}
      >
        <a href="mailto: avigill@hotmail.ca"> avigill@hotmail.ca</a>
      </motion.h3>
      <div className="iconLinks">
        <a href="https://www.linkedin.com/in/dootrex">
          <motion.div className="icon" whileHover={{ scale: 1.2 }}>
            <Icon.Linkedin />
          </motion.div>
        </a>
        <a href="https://www.github.com/dootrex">
          <motion.div className="icon" whileHover={{ scale: 1.2 }}>
            <Icon.Code />
          </motion.div>
        </a>
        <a href="https://www.medium.com/@amanindergill813">
          <motion.div className="icon" whileHover={{ scale: 1.2 }}>
            <Icon.BookOpen />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
