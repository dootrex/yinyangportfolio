import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  function openNav() {
    setOpen(!open);
  }
  return (
    <header>
      <div className="navbar">
        <motion.div
          className="title"
          whileHover={{
            scale: 1.3,
            x: 10,
            y: 10,
          }}
        >
          <Link to="/">
            <motion.h1 whileHover={{ color: "rgb(235,64,52)" }}>AG</motion.h1>
          </Link>
        </motion.div>
        <div id="nav-icon" onClick={openNav} className={open ? "open" : ""}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="links">
          <motion.button
            whileHover={{
              scale: 1.3,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            transition={{ type: "tween" }}
          >
            <Link to="projects">Projects</Link>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.3,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            transition={{ type: "tween" }}
          >
            <Link to="about">About</Link>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.3,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            transition={{ type: "tween" }}
          >
            <Link to="contact">Contact</Link>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            transition={{
              ease: "easeInOut",
              duration: 0.3,
            }}
            initial={{ y: "-100vh" }}
            animate={{
              y: 0,
            }}
            exit={{
              y: "-100vh",
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <motion.button
              onClick={openNav}
              whileHover={{
                scale: 1.3,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{ type: "tween" }}
            >
              <Link to="projects">Projects</Link>
            </motion.button>
            <motion.button
              onClick={openNav}
              whileHover={{
                scale: 1.3,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{ type: "tween" }}
            >
              <Link to="about">About</Link>
            </motion.button>
            <motion.button
              onClick={openNav}
              whileHover={{
                scale: 1.3,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{ type: "tween" }}
            >
              <Link to="contact">Contact</Link>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
