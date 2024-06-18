function rgbToHex(r, g, b) {
  //////////////////////////////////////// 217,273,298
// while (r > 255) {r = 255 }
// while (r < 0) {r = 0}
// while (g > 255) {g = 255}
// while (g < 0) {g = 0}
// while (b > 255) {b = 255}
// while (b < 0) {b = 0}

Math.max(r, 255)
Math.max(g, 255)
Math.max(b, 255)

 console.log(r, g, b)
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  }
  console.log(rgbToHex(-1 , 300 , -20))