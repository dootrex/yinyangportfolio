import React from "react";
import peaceAvatar from "../images/peace-avatar.png";
import yinYang from "../images/yin-yang.png";
import { motion } from "framer-motion";

export default function PageHome() {
  return (
    <div className="pageHome">
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
            A full stack developer who focuses on writing clean, efficient and
            high-quality code.
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
