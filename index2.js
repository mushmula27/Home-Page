const dashaImg = document.querySelector(".first-section img");
const dasha2Img = document.querySelector(".second-section img");
const goranImg = document.querySelector(".third-section img");

function kitty1(offset, duration) {
  if (offset < duration) {
    //during
    const perc = offset / duration;
    dashaImg.style.opacity = `${0.3 + (1 - perc)}`;
    dashaImg.style.transform = "translateX(" + `${-7 * perc}` + "vw)";
    dashaImg.style.filter = "blur(" + `${4 * perc}` + "px)";
  } else {
    //after
    dashaImg.style.opacity = 0.3;
    dashaImg.style.filter = "blur(4px)";
  }
}

function kitty2(offset, duration) {
  if (offset < 0) {
    //before
  } else if (offset < duration) {
    //during
    const perc = offset / duration;
    dasha2Img.style.transform = "translateX(" + `${-85 * perc}` + "vw)";
  } else {
    //after
  }
}

function kitty3(offset, duration) {
  if (offset < 0) {
    //before
  } else if (offset < duration) {
    //during
    const perc = offset / duration;
    dasha2Img.style.filter = "blur(" + `${4 * perc}` + "px)";
    dashaImg.style.filter = "blur(" + `${4 + 2 * perc}` + "px)";
  } else {
    dashaImg.style.filter = "blur(" + `${6}` + "px)";
    //after
  }
}

new ParallaxProvider([
  {
    controller: kitty1,
    mountPoint: 0,
    duration: 500
  },
  {
    controller: kitty2,
    mountPoint: 0,
    duration: 1100
  },

  {
    controller: kitty3,
    mountPoint: 0,
    duration: 500
  }
]);
