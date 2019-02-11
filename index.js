const dashaImg = document.querySelector(".first-section img");
const dasha2Img = document.querySelector(".second-section img");

function testCtrl(offset, duration) {
  const perc = offset / duration;
  if (offset < duration) {
    let opacity = `${0.3 + (1 - perc)}`;
    dashaImg.style.opacity = opacity;
    let left = `${-7 * perc}`;
    dashaImg.style.left = left + "vw";
    dashaImg.style.filter = "blur(" + `${4 * perc}` + "px)";
  } else {
    dashaImg.style.opacity = 0.3;

    dashaImg.style.filter = "blur(4px)";
  }
}

function test2Ctrl(offset, duration) {
  if (offset < 0) {
    dasha2Img.style.opacity = 0;
  } else {
    dasha2Img.style.opacity = 1;
  }
}

new ParallaxProvider([
  {
    controller: testCtrl,
    mountPoint: 0,
    duration: 500
  },
  {
    controller: test2Ctrl,
    mountPoint: 0,
    duration: 500
  }
]);
