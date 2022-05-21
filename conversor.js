function rgbToHex(num) {
  hex = num.toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

function createHex(rgb) {
  let red = rgb.split(",")[0];
  let green = rgb.split(",")[1];
  let blue = rgb.split(",")[2];

  return "#" + rgbToHex(parseInt(red)) + rgbToHex(parseInt(green)) + rgbToHex(parseInt(blue));
}

function hexToRGB(hex) {
  let rgb = parseInt(hex, 16);

  return rgb.toString(10);
}

function createRgb(hex) {
  let replaceRGB = hex.replace("#", "");
  let Red = replaceRGB.substring(0, 2);
  let Green = replaceRGB.substring(2, 4);
  let Blue = replaceRGB.substring(4, 6);

  return parseInt(hexToRGB(Red)) + "," + parseInt(hexToRGB(Green)) + "," + parseInt(hexToRGB(Blue));
}

module.exports = {
  createHex,
  createRgb,
};
