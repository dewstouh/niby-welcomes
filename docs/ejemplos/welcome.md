<!-- EJEMPLOS DE USO -->
# Imagen de Bienvenida
```JS
const {Welcomes, Leaves} = require("niby-welcomes")
const Discord = require("discord.js")

module.exports = client => {

  client.on("guildMemberAdd", async member => {
    let myWelcomeDB = await db.findOne({guildID: member.guild.id});

    let welcomeChannel = member.guild.channels.cache.get(myWelcomeDB.channel);

    if(welcomeChannel){ 
      //CREACIÓN DE BUFFER DE IMAGEN (BIENVENIDA)
      let welcomeImage = await new Welcome()
      .setWelcomeMessage("BIENVENID@")
      .setUsername(member.user.username, /*OPCIONAL*/ {color: "#ffffff"})
      .setMemberCount(`Eres el número #${member.guild.memberCount}`, /*OPCIONAL*/ {color: "#ffffff"})
      .setAvatar(avatarUrl)
      .setBackgroundUrl(backgroundUrl, /*OPCIONAL*/ {opacity: backgroundOpacity})
      .setBorder(true, /*OPCIONAL*/ {color: borderColor, size: borderSize})
      .setStyle("koya") //koya, mee6
      .build();
    }

    //attachment
    let attachment = new Discord.AttachmentBuilder(welcomeImage, {name: `bienvenida-${member.user.tag}.png`})

    //enviamos el mensaje con la bienvenida
    welcomeChannel.send({content: `Bienvenido ${member.user} a ${member.guild.name}!`, files: [attachment]})
  })
}


```
## Resultado
![Bienvenida](https://i.ibb.co/Wv5WWvH/koya-dewstouh-1088.png)
_Para más ejemplos, revisa la [Documentación](https://nibywelcomes.netlify.app/)_