const dashaImg = document.querySelector(".first-section img");
const dasha2Img = document.querySelector(".second-section img");

function testCtrl(offset, duration) {
  const perc = offset / duration;
  if (offset < duration) {
    dashaImg.style.opacity = `${1 - perc}`;
  } else {
    dashaImg.style.opacity = 0;
  }
}

function test2Ctrl(offset, duration) {
  if (offset < 0) {
    dasha2Img.style.opacity = 1;
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
