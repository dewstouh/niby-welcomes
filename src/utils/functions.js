const Canvas = require('canvas');

const applyText = (canvas, text, defaultFontSize, width, font) => {
    const ctx = canvas.getContext("2d");
    do {
        ctx.font = `${(defaultFontSize -= 1)}px ${font}`;
    } while (ctx.measureText(text).width > width);
    return ctx.font;
}

module.exports = {


    /**
    * [KOYA] Crea la imagen de bienvenida
    * @param {object} data El objeto a pasar para la generación de la imagen
    * @returns El buffer de la imagen
    */
    async welcomeKoya(data) {
        return new Promise(async (resolve, reject) => {
            try {
                let canvas = Canvas.createCanvas(1024, 500);
                let ctx = canvas.getContext("2d");

                let fondo = await Canvas.loadImage(data.backgroundImage);

                ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);
                ctx.globalAlpha = 0.5;
                ctx.fillStyle = `rgba(0,0,0, ${data.backgroundOpacity})`;
                ctx.fillRect(0, 0,canvas.width, canvas.height);
                ctx.globalAlpha = 1;

                if (data.border) {

                    ctx.lineWidth = data.borderSize;
                    ctx.shadowColor = "black";
                    ctx.shadowBlur = 5;

                    ctx.shadowColor = "black";
                    ctx.shadowBlur = 10;

                    ctx.shadowColor = "black";
                    ctx.shadowBlur = 15;
                    ctx.strokeStyle = data.borderColor
                    ctx.strokeRect(0, 0, canvas.width, canvas.height)
                }


                ctx.save();

                //crear cicurlo para avatar
                ctx.beginPath();
                ctx.arc(512, canvas.height / 2 - 125 + 50, 125, 0, Math.PI * 2, true); //position of img
                ctx.lineWidth = 15;
                ctx.strokeStyle = data.borderColor
                ctx.stroke();
                ctx.closePath();
                ctx.clip();
                ctx.lineWidth = 15;
                ctx.shadowColor = "black";
                ctx.shadowBlur = 5;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 10;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 15;
                ctx.strokeStyle = data.borderColor

                //create a circular "mask"
                ctx.beginPath();
                ctx.arc(512, canvas.height / 2 - 125 + 50, 125, 0, Math.PI * 2, true); //position of img
                ctx.closePath();
                ctx.clip();
                ctx.lineWidth = 15;
                ctx.shadowColor = "black";
                ctx.shadowBlur = 5;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 10;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 15;
                ctx.strokeStyle = data.borderColor
                //define the user avatar
                const avatar = await Canvas.loadImage(data.avatar);

                //draw the avatar
                ctx.drawImage(avatar, canvas.width / 2 - 125, canvas.height / 2 - 125 - 75, 250, 250);
                ctx.restore();
                //TEXTO BIENVENIDA
                ctx.fillStyle = `${data.colorWelcome}`;
                ctx.textAlign = "center";
                ctx.font = '80px "Uni Sans"';
                ctx.shadowColor = "black";
                ctx.shadowBlur = 5;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 10;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 15;

                ctx.fillText(data.textWelcome, canvas.width / 2, canvas.height / 2 + 64 + 68)
                //TEXTO USUARIO
                ctx.fillStyle = `${data.colorUsername}`;
                ctx.textAlign = "center";
                ctx.font = '50px "Uni Sans"';
                ctx.shadowColor = "black";
                ctx.shadowBlur = 5;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 10;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 15;

                ctx.fillText(`${data.username}`, canvas.width / 2, canvas.height / 2 + 110 + 68)
                //CONTADOR DE MIEMBRO
                ctx.fillStyle = `${data.colorMemberCount}`;
                ctx.textAlign = "center";
                ctx.font = '24px "Uni Sans"';
                ctx.shadowColor = "black";
                ctx.shadowBlur = 5;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 10;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 15;

                ctx.fillText(data.textMemberCount, canvas.width / 2, canvas.height - 24)
                //get it as a discord attachment
                return resolve(canvas.toBuffer());
            } catch (e) { reject(e) }

        })
    },

    /**
    * [MEE6] Crea la imagen de bienvenida
    * @param {object} data El objeto a pasar para la generación de la imagen
    * @returns El buffer de la imagen
    */
    async welcomeMEE6(data) {
        return new Promise(async (resolve, reject) => {
            try {
                let canvas = Canvas.createCanvas(1109, 466);
                let ctx = canvas.getContext("2d");
                //fondo
                let fondo = await Canvas.loadImage(data.backgroundImage);

                let bgRes = {
                    width: 1083,
                    height: 453
                }

                let shadowRes = {
                    width: 997,
                    height: 370
                }

                ctx.drawImage(fondo, 13, 6, bgRes.width, bgRes.height);
                ctx.globalAlpha = 0.5;
                ctx.fillStyle = `rgba(0,0,0, ${data.backgroundOpacity})`;
                ctx.fillRect(56, 47, shadowRes.width, shadowRes.height);
                ctx.globalAlpha = 1;

                if (data.border) {

                    ctx.lineWidth = data.borderSize;
                    ctx.shadowColor = "black";
                    ctx.shadowBlur = 5;

                    ctx.shadowColor = "black";
                    ctx.shadowBlur = 10;

                    ctx.shadowColor = "black";
                    ctx.shadowBlur = 15;
                    ctx.strokeStyle = data.borderColor
                    ctx.strokeRect(13, 6, bgRes.width, bgRes.height)
                }


                ctx.save();

                //crear cicurlo para avatar
                ctx.beginPath();
                ctx.arc(554, 180, 101, 0, Math.PI * 2, true); //position of img
                ctx.lineWidth = 6;
                ctx.strokeStyle = data.borderColor
                ctx.stroke();
                ctx.closePath();
                ctx.clip();
                ctx.lineWidth = 6;
                ctx.shadowColor = "black";
                ctx.shadowBlur = 5;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 10;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 15;
                ctx.strokeStyle = data.borderColor

                //create a circular "mask"
                ctx.beginPath();
                ctx.arc()
                ctx.arc(554, 180, 84, 0, Math.PI * 2, true); //position of img
                ctx.closePath();
                ctx.clip();
                ctx.lineWidth = 15;
                ctx.shadowColor = "black";
                ctx.shadowBlur = 5;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 10;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 15;
                ctx.strokeStyle = data.borderColor
                //define the user avatar
                const avatar = await Canvas.loadImage(data.avatar);

                //draw the avatar
                ctx.drawImage(avatar, 554 - 84, 180 - 84, 168, 168);
                ctx.restore();
                //TEXTO BIENVENIDA
                ctx.fillStyle = `${data.colorWelcome}`;
                ctx.textAlign = "center";
                ctx.font = applyText(canvas, data.textWelcome, 32, 846, "Sofia Pro");
                ctx.shadowColor = "black";
                ctx.shadowBlur = 5;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 10;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 15;

                ctx.fillText(data.textWelcome, 554, 336)
                //TEXTO USUARIO
                ctx.fillStyle = `${data.colorUsername}`;
                ctx.textAlign = "center";
                ctx.font = applyText(canvas, data.textWelcome, 28, 846, "Sofia Pro");
                ctx.shadowColor = "black";
                ctx.shadowBlur = 5;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 10;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 15;


                ctx.fillText(data.username, 554, 370)
                //CONTADOR DE MIEMBRO
                ctx.fillStyle = `${data.colorMemberCount}`;
                ctx.textAlign = "center";
                ctx.font = applyText(canvas, data.textMemberCount, 18, 846, "Sofia Pro");
                ctx.shadowColor = "black";
                ctx.shadowBlur = 5;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 10;

                ctx.shadowColor = "black";
                ctx.shadowBlur = 15;

                ctx.fillText(data.textMemberCount, 554, 403)
                //get it as a discord attachment
                return resolve(canvas.toBuffer());
            } catch (e) { reject(e) }

        })
    },
};