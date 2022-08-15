const { welcomeKoya, welcomeMEE6 } = require('./utils/functions');

const _1pxBase64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAATSURBVHjaYvj//z8DAAAA//8DAAj8Av7TpXVhAAAAAElFTkSuQmCC`

module.exports = class Welcome {
    constructor() {
        this.username = "Clyde#0000";
        this.guildName = "ServerName";
        this.textWelcome = "Bienvenid@"
        this.textMemberCount = "Eres el miembro #69";
        this.memberCount = 0;
        this.backgroundImage = _1pxBase64;
        this.backgroundOpacity = 0.8;
        this.avatar = "https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3";
        this.border = true;
        this.borderColor = "#ffffff";
        this.borderSize = 15;
        this.colorUsername = "#ffffff";
        this.colorMemberCount = "#ffffff";
        this.colorWelcome = "#ffffff";
        this.colorGuildName = "#ffffff";
        this.colorHashtag = "#ffffff";
        this.colorBackground = "#000000";
        this.style = "koya";
    }

    setWelcomeMessage(text = this.textWelcome, options = {color: this.colorWelcome}) {
        this.textWelcome = text;
        this.colorWelcome = options.color;
        return this;
    }

    setUsername(username = this.username, options = {color: this.colorUsername}) {
        this.username = username;
        this.colorUsername = options.color;
        return this;
    }

    setMemberCount(memberCount = this.textMemberCount, options = {color: this.colorMemberCount}) {
        this.textMemberCount = memberCount;
        this.colorMemberCount = options.color;
        return this;
    }

    setAvatar(avatar) {
        this.avatar = avatar;
        return this;
    }

    setBorder(border = this.border, options = {color: this.borderColor, size: this.borderSize}) {
        this.border = border;
        this.borderColor = options.color;
        this.borderSize = options.size;
        return this;
    }

    setBackgroundUrl(background = this.backgroundImage, options = {opacity: this.backgroundOpacity}) {
        this.backgroundImage = background;
        this.backgroundOpacity = isNaN(options.opacity) ? this.backgroundOpacity : options.opacity;
        return this;
    }

    setStyle(style = this.style) {
        let validStyles = ["niby", "mee6", "koya"];
        if(!validStyles.includes(style.toLowerCase()) || typeof style !== "string") {
            style = "koya";
        }
        this.style = style.toLowerCase();
        return this;
    }

    async build() {
        //if (!this.avatar) throw new Error("Tienes que especificar un avatar de usuario!");


        switch (this.style.toLowerCase()) {
            case "koya":{
                return await welcomeKoya(this)
            }

            case "mee6":{
                return await welcomeMEE6(this)
            }
        
            default:
                break;
        }
    }
}