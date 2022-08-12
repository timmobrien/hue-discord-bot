require('dotenv').config();


const { discordBot } = require('./discord-bot');
const { lightSwitch, setLight } = require('./methods/put/light-swich');
const { colors, customColor } = require('./presets/presets');

discordBot()

// setLightCustom('orange')

// setLight(colors.blue)

// nightLights();

// normalLights();

// unitedGoalLights()


// parameters:
// object with the request method
