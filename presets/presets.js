const ColorConverter = require("cie-rgb-color-converter");
const LightPut = require("../classes/LightClass");


// Convert colors to pre-set value

const dayLightXY = ColorConverter.rgbToXy(255, 255, 204)
const blueLightXY = ColorConverter.rgbToXy(0, 102, 255)
const redLightXY = ColorConverter.rgbToXy(255, 0, 0)
const greenLightXY = ColorConverter.rgbToXy(0, 204, 0)

const day = new LightPut(true, dayLightXY)
const green = new LightPut(true, greenLightXY)
const red = new LightPut(true, redLightXY)
const blue = new LightPut(true, blueLightXY)




// const nightLight = new LightPut(true, 7928, 93, 224)

const colors = {green, red, day, blue}

module.exports = { colors }