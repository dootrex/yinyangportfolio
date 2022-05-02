import React from "react";
import peaceAvatar from "../images/peace-avatar.png";
import yinYang from "../images/yin-yang.png";
import * as Icon from "react-feather";
import { motion } from "framer-motion";
import resume from "../images/resume.pdf";

export default function PageHome() {
  return (
    <div className="pageHome">
      <span className="mailLink">
        <motion.a href="mailto: avigill@hotmail.ca" whileHover={{ scale: 1.2 }}>
          <h3>Email</h3>
        </motion.a>
      </span>
      <span className="resume">
        <motion.a href={resume} whileHover={{ scale: 1.2 }}>
          <h3>Resume</h3>
        </motion.a>
      </span>
      <div className="iconLinks">
        <a href="https://www.linkedin.com/in/dootrex">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Icon.Linkedin />
          </motion.div>
        </a>
        <a href="https://www.github.com/dootrex">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Icon.Code />
          </motion.div>
        </a>
        <a href="https://www.medium.com/@amanindergill813">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Icon.BookOpen />
          </motion.div>
        </a>
      </div>
      <motion.div
        className="textBlock"
        initial={{ y: -50, x: -50 }}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.4,
          }}
        >
          <h1>Hi,</h1>
          <h3>I am Avi.</h3>
          <p>
            A Focused Full Stack Developer with strong foundations for web
            development and passion for developing scalable web applications and
            working across the full stack.
          </p>
        </motion.div>
      </motion.div>
      <div className="animatedImage">
        <motion.img
          src={yinYang}
          alt="yin yang"
          animate={{ rotate: 360 }}
          transition={{ yoyo: Infinity }}
        />
        <motion.img
          src={peaceAvatar}
          alt="full body image"
          initial={{ height: 0 }}
          animate={{ height: "130%" }}
          transition={{ delay: 0.8, duration: 0.4 }}
        />
      </div>
    </div>
  );
}
