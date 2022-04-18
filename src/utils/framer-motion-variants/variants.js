/*
Creating animation variants for framer motion.
**/
export const containerVariants = {
  hidden: {
    transform: "scale(0)",
    opacity: 0,
  },
  visible: {
    transform: "scale(1.0)",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200, // springyness
      mass: 0.4, // spring force
      damping: 8, // osselation
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    transform: "scale(0)",
    opacity: 0,
  },
};

export const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const svgVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1
    }
  }
}

export const loaderVariants = {
  animationOne: {
    x: [ -20, 20 ],
    y: [ 0, -30 ],
    transition: {
      x: {
        yoyo: Infinity,
        duration: .5,
      },
      y: {
        yoyo: Infinity,
        duration: .25,
        ease: "easeOut"
      }
    }
  }
}

export const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const buttonVariants = {
  hidden: {
    rotate: 20,
    scale: 1.1,
    opacity: 0,
  },
  visible: {
    transform: "rotate(50deg)",
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring" },
  },
  hover: {
    scale: 0.9, // keyframes
    transition: {
      boxShadow: "0px 0px 3px rgb(250, 250, 250)",
      textShadow: "0px 0px 3px rgb(250, 250, 250)",
      duration: 0.6,
      yoyo: Infinity,
    },
  },
};
