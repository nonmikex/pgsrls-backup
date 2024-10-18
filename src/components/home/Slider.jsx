import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { slides } from "../../constants/slides";
import { icon } from "../../constants/constants";
import { variants } from "../../constants/variants";
import "../../css/slider.css";

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const slideIndex = ((page % slides.length) + slides.length) % slides.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 10000);

    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className="slider-container h-screen">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={slides[slideIndex].image}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ opacity: { duration: 1 } }}
          className="w-full h-[100vh] object-cover object-center absolute"
        />
        <motion.div
          key={`content-${page}`}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="bg-transparent"
          transition={{ opacity: { duration: 1 } }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            color: "#fff",
          }}
        >
          {slides[slideIndex].content}
        </motion.div>
      </AnimatePresence>
      <div
        className="controls"
        style={{
          position: "absolute",
          top: "50%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          transform: "translateY(-50%)",
        }}
      >
        <button
          className="prev"
          onClick={() => paginate(-1)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img src={icon.Prev} alt="Previous" />
        </button>
        <button
          className="next"
          onClick={() => paginate(1)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img src={icon.Next} alt="Next" />
        </button>
      </div>
      <div
        className="indicators"
        style={{
          position: "absolute",
          bottom: "2rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {slides.map((_, i) => (
          <div
            key={i}
            className={`indicator ${i === slideIndex ? "active" : ""}`}
            style={{
              width: "0.5rem",
              height: "0.5rem",
              borderRadius: "50%",
              backgroundColor: i === slideIndex ? "#fff" : "#ffffff40",
              margin: "0 0.35rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onClick={() => setPage([i, 0])}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
