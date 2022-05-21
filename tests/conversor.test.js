const { assert } = require('chai');
const { createHex, createRgb } = require('../conversor');

describe("Rgb para Hex", () => {

  it("Rgb para Hex", () =>{
    const pretoRgb = "00,00,00";
    const brancoRgb = "255,255,255";

    const pretoHex = "#000000";
    const brancoHex = "#ffffff";

    const pretoToHex = createHex(pretoRgb);
    const brancoToHex = createHex(brancoRgb);

    assert.equal(pretoHex, pretoToHex);
    assert.equal(brancoHex, brancoToHex);
  })

  it("Hex para Rgb", () =>{
    const pretoHex = "#000000";
    const brancoHex = "#ffffff";

    const pretoRgb = "0,0,0";
    const brancoRgb = "255,255,255";    

    const pretoToRGB = createRgb(pretoHex);
    const brancoToRGB = createRgb(brancoHex);

    assert.equal(pretoRgb, pretoToRGB);
    assert.equal(brancoRgb, brancoToRGB);
  })
})