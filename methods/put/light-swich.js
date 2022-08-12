const fetch = require('node-fetch');
require('dotenv').config();

const lightSwitch = async (data, light) => {
    
    const url = `http://${process.env.HUE_IP}/api/${process.env.HUE_USERNAME}/lights/${light}/state`

    console.log("LIGHT SWITCH DATA",data)
    const requestOptions = {
        method: 'PUT',
        headers:{
            'accept':'application/json'
        },
        body: JSON.stringify(data)

    }

    try {
        await fetch(url, requestOptions)
    } catch (err) {
       console.log(err) 
    }
}

async function setLight (color) {
    try {
       await lightSwitch(color, 3)
        
    } catch (error) {
        console.log(error)
    }
}




module.exports = {lightSwitch, setLight}