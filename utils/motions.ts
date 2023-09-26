export const headMontionConfig = (delay: number = 0) => {
  return {
    initial: {
      y: 20,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
      },
    },
  };
};

export const leftMontionConfig = (delay: number = 0) => {
  return {
    initial: {
      x: 20,
      opacity: 0,
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
      },
    },
  };
};
