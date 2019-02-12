const dashaImg = document.querySelector(".first-section img");
const dasha2Img = document.querySelector(".second-section img");

function kitty1(offset, duration) {
  const perc = offset / duration;
  const target_opacity = 0.3;
  const target_blur = 4;
  if (offset < duration) {
    let opacity = `${target_opacity + (1 - perc)}`;
    dashaImg.style.opacity = opacity;

    let translate = `${-7 * perc}`;
    dashaImg.style.transform = "translateX(" + translate + "vw)";

    dashaImg.style.filter = "blur(" + `${target_blur * perc}` + "px)";
  } else {
    dashaImg.style.opacity = target_opacity;
    dashaImg.style.filter = "blur(" + `${target_blur}` + "px)";
  }
}

function kitty2(offset, duration) {
  const perc = offset / duration;
  if (offset < duration) {
    dasha2Img.style.opacity = 1;

    let translate = `${-100 * perc}`;
    dasha2Img.style.transform = "translateX(" + translate + "%)";
  } else {
    dasha2Img.style.opacity = 1;
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
    mountPoint: -100,
    duration: 600
  }
]);
