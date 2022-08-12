
const chroma = require('chroma-js');
const { setLight } = require('../methods/put/light-swich');
const ColorConverter = require("cie-rgb-color-converter");
const LightClass = require('../classes/LightClass');


function rgbFromNameString(colorName) {
    try {
        const colorObj = chroma(colorName)
        return colorObj._rgb
        
    } catch (error) {
        console.log('not a valid color')
        return undefined;
    }
  
}

function customColorData (colorName) {

    if (!colorName) return;

    const rgbArr = rgbFromNameString(colorName);
   
    const customXY = ColorConverter.rgbToXy(rgbArr[0], rgbArr[1], rgbArr[2])

    return customXY;
    
}

// Custom color function
async function customColor(colorString) {
    
    const badString = `${colorString} is not a valid choice. Pick a different colour, and don't use any spaces`
    const successString = `Done! Light has been set to ${colorString}`


    try {
        // Send the string, rgb array returned
        const colorRGB = rgbFromNameString(colorString)
        // Check that the color given was valid
        if(!colorRGB) return badString;
        // Send the rgb array, returns as X & Y colour format
        const colorXY = customColorData(colorRGB);
        // Use constructor function to create object
        const customColorObj = new LightClass(true, colorXY);
        // Call the setLight function 
        await setLight(customColorObj)

        return successString;

    } catch (err) {
        console.log(err)
    }

}

module.exports = {rgbFromNameString, customColor}