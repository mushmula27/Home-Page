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
  console.log(offset + " is offset 1");
}

function kitty2(offset, duration) {
  const perc = offset / duration;
  if (offset < duration) {
    dasha2Img.style.opacity = 1;

    let translate = `${-200 * perc}`;
    dasha2Img.style.transform = "translateX(" + translate + "%)";
  } else {
    dasha2Img.style.opacity = 1;
  }
  console.log(offset + " is offset 2");
}

// The below function should blur the two images and move dasha2Img to the left

function kitty3(offset, duration) {
  const perc = offset / duration;
  const target_blur1 = 6;
  const target_blur2 = 4;
  if (offset < duration) {
    dashaImg.style.filter = "blur(" + `${target_blur1 * perc}` + "px)";
    dasha2Img.style.filter = "blur(" + `${target_blur2 * perc}` + "px)";

    // let translate = `${-100 * perc}`;
    // dasha2Img.style.transform = "translateX(" + translate + "%)";
    // this line should move the image but instead makes it blur
    //as it is coming into view with the screen
  } else {
    dashaImg.style.filter = "blur(" + `${target_blur1}` + "px)";
    dasha2Img.style.filter = "blur(" + `${target_blur2}` + "px)";
  }
  console.log(offset + " is offset 3");
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
    duration: 1100
  },

  {
    controller: kitty3,
    mountPoint: -600,
    duration: 500
  }
]);
