const {Welcome} = require("../index");
const {writeFileSync} = require('fs')

let style = "mee6";
let username = "dewstouh#1088";
let welcomeMessage = "BIENVENID@"
let avatarUrl = "https://cdn.discordapp.com/avatars/282942681980862474/7ff4f4ae92af5feb0d258a71cdb0b060.png?size=4096"
let backgroundUrl = "https://camo.githubusercontent.com/1d75944226d21a0d1c4cfa3ab38d2608bb5d8880bfe8cba67ffeba8e9466d7fe/68747470733a2f2f692e696d6775722e636f6d2f39426b343358502e706e67";
let backgroundOpacity = 0.8;
let memberCountMessage = "Eres el número #54 del Servidor! Asegúrate de leer las #reglas!";
let borderColor = "#ffffff";
let borderSize = 15; 

//mee6
new Welcome()
.setWelcomeMessage(welcomeMessage, {color: "#ffffff"})
.setUsername(username, {color: "#ffffff"})
.setMemberCount(memberCountMessage, {color: "#ffffff"})
.setAvatar(avatarUrl)
.setBackgroundUrl(backgroundUrl, {opacity: backgroundOpacity})
.setBorder(false, {color: borderColor, size: borderSize})
.setStyle(style)
.build().then((image) => {
    writeFileSync(`./outputs/${style}-${username}.png`, image);
})


