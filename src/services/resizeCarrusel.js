export const getCenterSlidePercentage = (itemWidth, carouselWidth, op = 0) => {
  let gutterFraction = obtainGutter(carouselWidth, op);
  const numVisibleItems = Math.floor(carouselWidth / itemWidth);
  const gutterWidth = Math.floor(carouselWidth * gutterFraction);
  const slideWidth = itemWidth + gutterWidth / numVisibleItems;
  const centerSlidePercentage = (itemWidth / slideWidth) * 100;
  return centerSlidePercentage;
};

const obtainGutter = (width, op) => {
  if (op === 0) {
    if (width >= 200 && width <= 300) {
      return 0.3;
    }
    if (width >= 300 && width < 400) {
      return 1;
    }
    if (width >= 400 && width < 500) {
      return 0.9;
    }
    if (width >= 500 && width < 600) {
      return 1;
    }
    if (width >= 600 && width < 700) {
      return 2;
    }
    if (width >= 700 && width < 800) {
      return 2.5;
    }
    if (width >= 800 && width < 900) {
      return 3;
    }
    if (width >= 900 && width < 1200) {
      return 4;
    }
    if (width >= 1200 && width < 1350) {
      return 5;
    }
    if (width >= 1350 && width < 2000) {
      return 7;
    }
    if (width >= 2000 && width <= 3000) {
      return 10;
    }
  } else if (op === 1) {
    if (width >= 200 && width <= 300) {
      return 0.01;
    }
    if (width >= 300 && width < 400) {
      return 0.15;
    }
    if (width >= 400 && width < 500) {
      return 0.18;
    }
    if (width >= 500 && width < 600) {
      return 0.2;
    }
    if (width >= 600 && width < 700) {
      return 0.7;
    }
    if (width >= 700 && width < 768) {
      return 0.9;
    }
    if (width >= 768 && width < 800) {
      return 0.09;
    }
    if (width >= 800 && width < 900) {
      return 0.19;
    }
    if (width >= 900 && width < 1200) {
      return 0.289;
    }
    if (width >= 1200 && width < 1350) {
      return 1;
    }
    if (width >= 1350 && width < 1800) {
      return 1.1;
    }
    if (width >= 1800 && width < 2000) {
      return 1.8;
    }
    if (width >= 2000 && width < 2400) {
      return 2;
    }
    if (width >= 2400 && width < 3000) {
      return 2.8;
    }
    if (width >= 3000) {
      return 3.8;
    }
  }
};
