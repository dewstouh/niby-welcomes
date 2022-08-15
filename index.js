const {readdirSync} = require('fs');
const {registerFont} = require('canvas');

readdirSync(`${__dirname}/assets/fonts/`).forEach((font) => {
    registerFont(`${__dirname}/assets/fonts/${font}`, { family: `${font.split("-")[1].replace(/.otf/, "").replace(/.ttf/, "")}` });
})


module.exports = {
    Welcome: require('./src/bienvenida')
    
}