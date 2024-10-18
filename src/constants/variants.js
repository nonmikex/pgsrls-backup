import ScrollReveal from "scrollreveal";

export const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const sr = ScrollReveal();

export const revealFromTop = () => {
  sr.reveal(".reveal-top", {
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: false,
    interval: 200,
  });
};

export const revealFromBottom = () => {
  sr.reveal(".reveal-bottom", {
    origin: "bottom",
    distance: "50px",
    opacity: 0,
    duration: 2000,
    reset: false,
    interval: 200,
  });
};

export const revealFromLeft = () => {
  sr.reveal(".reveal-left", {
    origin: "left",
    distance: "100px",
    duration: 2000,
    reset: false,
    interval: 200,
  });
};

export const revealFromRight = () => {
  sr.reveal(".reveal-right", {
    origin: "right",
    distance: "100px",
    duration: 2000,
    reset: false,
    interval: 200,
  });
};

export const revealFadeIn = () => {
  sr.reveal(".reveal-fade", {
    opacity: 0,
    duration: 2000,
    reset: false,
  });
};
