const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
/////////////////////////////////////////////////////////
const { Client, MessageEmbed } = require("discord.js");
var { Util, RichEmbed } = require("discord.js"); 
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "m.";
const cooldown = new Set();
const cdtime = 7;
client.login("ODI4MzMxNjY3MDEzMTA3NzIy.YGoB-w.Zo6cIFB_suucFL3TX6GiJcLxgC4");

client.on("ready", () => {
setInterval(() => {
  client.user.setActivity(
  `${prefix}help - https://mrfox.ga/`,
  );
}, 2000);
})

client.on("guildCreate" , bot => {
  if(bot.memberCount < 0 ){
    bot.leave();
  }
})





  client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS **<a:jano_26:799630865474256972>"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS **"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#0000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted** <a:jano_27:799630916820795422>`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});





client.on('message', message => {
  const codework = message.mentions.users.first()  
  let user;
  
   let replies = ["https://cdn.discordapp.com/attachments/733640065200160768/737280791993779206/tenor_3.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280895995740210/tenor_7.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280900022140938/tenor_2.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280920800722984/tenor_9.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280921689915411/tenor_10.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280924563275776/tenor.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280929311096842/tenor_5.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280944016457748/tenor_1.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280945195057193/tenor_6.gif","https://cdn.discordapp.com/attachments/733640065200160768/737281583412805712/tenor_8.gif","https://cdn.discordapp.com/attachments/733640065200160768/737281572826382336/tenor_4.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282276320084118/tenor_2.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282249422143488/tenor_3.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282243113910292/tenor_4.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282207579635722/tenor.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282195185467473/tenor_5.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282604176506910/tenor.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282625747681410/tenor_1.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282660250157122/tenor_4.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282929633525851/tenor_11.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282757188911174/tenor_7.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282947119579216/tenor_9.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282750385487932/tenor_5.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282940760883210/tenor_10.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282991348252683/tenor_13.gif"];
  
let result = Math.floor((Math.random() * replies.length));

  if (message.mentions.users.first())  {user = message.mentions.users.first();}
  else {user = message.author;}
 var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'animal')) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    var gif = new Discord.MessageEmbed()
         
         .setTitle("> __Animal Gif__")
         .setURL(`https://mrfox.ga/`)
         .setDescription(`> tag: <@${user.id}>`)
         .setColor(color)
         .setFooter(`Request by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
         .setAuthor(client.user.username, client.user.avatarURL())
         .setImage(replies[result])
          
      message.channel.send(gif);
 
    }
});


client.on('message', message => {
  const codework = message.mentions.users.first()  
  let user;
  
   let replies = ["https://cdn.discordapp.com/attachments/697505578972348436/737311070364106844/image0.gif","https://cdn.discordapp.com/attachments/694694884459937862/737296516774887505/bc500ed43e3593fcb9b10331ae644586.gif","https://cdn.discordapp.com/attachments/697505578972348436/737286213723226182/a_4a728888f25331995f9c61df26ffffdb.gif","https://cdn.discordapp.com/attachments/694694884459937862/737113186280538152/image0.gif","https://cdn.discordapp.com/attachments/697505578972348436/737052176106520687/image1.gif","https://cdn.discordapp.com/attachments/694694884459937862/737078026923409439/9190dc1cb39fa98fd9e12bb135aac545.gif","https://cdn.discordapp.com/attachments/697505578972348436/737052175754199070/image0.gif","https://cdn.discordapp.com/attachments/694694884459937862/736898906633273364/64.gif","https://cdn.discordapp.com/attachments/697505578972348436/737004415197904916/a_3bfd1dff4faab26f7a612a34cb2eb049.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948576739426385/1.gif","https://cdn.discordapp.com/attachments/697505578972348436/736928294414450718/ROF8OQvDmxytW.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948476520857650/5.gif","https://cdn.discordapp.com/attachments/697505578972348436/736757429450309673/image0.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948187487174747/48.gif","https://cdn.discordapp.com/attachments/697505578972348436/736588684270239774/ezgif-6-e83305d159d6.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948178855034955/anime_24.gif","https://cdn.discordapp.com/attachments/697505578972348436/736388428761137193/14Nqi9PD8H.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948036202561677/previewfile_1877013475.gif","https://cdn.discordapp.com/attachments/697505578972348436/736388213421244477/Yblikw9Rj1.gif","https://cdn.discordapp.com/attachments/694694884459937862/735947565966688306/a_d6e522c9e10db64260eccb3c3455733c.gif","https://cdn.discordapp.com/attachments/697505578972348436/736388155229339708/zyJgqrsAUg.gif","https://cdn.discordapp.com/attachments/694694884459937862/735621470969135217/sasuke_al_moj.gif"];

let result = Math.floor((Math.random() * replies.length));

  if (message.mentions.users.first())  {user = message.mentions.users.first();}
  else {user = message.author;}
 var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'anime')) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    var gif = new Discord.MessageEmbed()
         
         .setTitle("> __Anime Gif__")
         .setURL(`https://mrfox.ga/`)
         .setDescription(`> tag: <@${user.id}>`)
         .setColor(color)
         .setFooter(`Request by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
         .setAuthor(client.user.username, client.user.avatarURL())
         .setImage(replies[result])
          
      message.channel.send(gif);
 
    }
});



client.on('message', message => {
  const codework = message.mentions.users.first()  
  let user;
  
   let replies = ["https://cdn.discordapp.com/attachments/699339066029768796/736983333254332456/1.gif","https://cdn.discordapp.com/attachments/699339066029768796/737156529278550046/10.gif","https://cdn.discordapp.com/attachments/699339066029768796/736983248021749775/6.gif","https://cdn.discordapp.com/attachments/699339066029768796/736983242271359067/5.gif","https://cdn.discordapp.com/attachments/699339066029768796/736983236260921455/8.gif","https://cdn.discordapp.com/attachments/699339066029768796/736983217856315483/3.gif","https://cdn.discordapp.com/attachments/699339066029768796/736983211619516447/2-2.gif","https://cdn.discordapp.com/attachments/699339066029768796/736978634031759400/40.gif","https://cdn.discordapp.com/attachments/699339066029768796/736978111043731476/a_204c3f0f05cbef57c6297ee3f230f22a.gif","https://cdn.discordapp.com/attachments/699339066029768796/736978069038039050/f5a91c2c25a6a082f8ecafc826c13760.gif","https://cdn.discordapp.com/attachments/699339066029768796/736977973688795237/2.gif","https://cdn.discordapp.com/attachments/699339066029768796/736977934375583926/a_bf8ac566a856ad839d310e919ba15791.gif","https://cdn.discordapp.com/attachments/699339066029768796/736977911831330886/image0-7.gif","https://cdn.discordapp.com/attachments/699339066029768796/736977867811979324/a_c21ae57fdd3ad6ac99cd038b6a5aa1e4.gif","https://cdn.discordapp.com/attachments/699339066029768796/736148143678291968/15.gif","https://cdn.discordapp.com/attachments/699339066029768796/735864299024810155/20200723_142037.gif","https://cdn.discordapp.com/attachments/699339066029768796/735910966792945764/image0.gif","https://cdn.discordapp.com/attachments/699339066029768796/735910962762350642/image0.gif","https://cdn.discordapp.com/attachments/699339066029768796/735194170230308904/a_0690a3032ce9908e230d7f71dd9a6988_1.gif","https://cdn.discordapp.com/attachments/699339066029768796/734965436663464076/a_4f5d107e5160642113337218f63a6441.gif","https://cdn.discordapp.com/attachments/699339066029768796/734965350357008384/a_8f2bce5f3a3312e7e95236a39ea70efe.gif","https://cdn.discordapp.com/attachments/699339066029768796/734965015739629599/image0-6.gif","https://cdn.discordapp.com/attachments/699339066029768796/732175141567725639/image0.gif","https://cdn.discordapp.com/attachments/699339066029768796/730498782265081876/bab3.gif","https://cdn.discordapp.com/attachments/699339066029768796/730499512602329198/14.gif"];

let result = Math.floor((Math.random() * replies.length));

  if (message.mentions.users.first())  {user = message.mentions.users.first();}
  else {user = message.author;}
 var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'baby')) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    var gif = new Discord.MessageEmbed()
         
         .setTitle("> __Baby Gif__")
         .setURL(`https://mrfox.ga/`)
         .setDescription(`> tag: <@${user.id}>`)
         .setColor(color)
         .setFooter(`Request by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
         .setAuthor(client.user.username, client.user.avatarURL())
         .setImage(replies[result])
          
      message.channel.send(gif);
 
    }
});


client.on('message', message => {
  const codework = message.mentions.users.first()  
  let user;
  
   let replies = ["https://cdn.discordapp.com/attachments/694693923486171177/737203415339499621/a_c3451f3e42065b560180028d3a62ef5a.gif","https://cdn.discordapp.com/attachments/694693923486171177/737219168822362183/a_9c8d6cb51559b033674ed8dd16234ee7.gif","https://cdn.discordapp.com/attachments/694693923486171177/737219065977765888/a_cb483fd9bfa2068e5b57aa6cf973986e.gif","https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106443932532796/gif_200.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106458080051330/gif_201.gif","https://cdn.discordapp.com/attachments/694693923486171177/737050698293968976/a_a873a018a2751ecaf654d116ae15c261.gif","https://cdn.discordapp.com/attachments/694693923486171177/737105973155463259/gif_180.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106004977647726/gif_182.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106176541589544/gif_187.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106247643562004/gif_191.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106368158367804/gif_196.gif","https://cdn.discordapp.com/attachments/694693923486171177/737013617538629722/a_fb64ba0c5d3b48b24d4334d7ac2b70af.gif","https://cdn.discordapp.com/attachments/694693923486171177/737013649058824252/a_ee0eab432a8d1eb6521c1a932dd04e22.gif","https://cdn.discordapp.com/attachments/694693923486171177/737038327672340541/a_2df0464c0f0e4dabf60385103b18addd.gif","https://cdn.discordapp.com/attachments/694693923486171177/737038499043213332/a_b4cad593a04df36fae504536a7971825.gif","https://cdn.discordapp.com/attachments/694693923486171177/737039041022787624/image0.gif","https://cdn.discordapp.com/attachments/694693923486171177/737039232065077269/image0-70.gif","https://cdn.discordapp.com/attachments/694693923486171177/737039292832153640/kaan.gif.gif","https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif"];

let result = Math.floor((Math.random() * replies.length));

  if (message.mentions.users.first())  {user = message.mentions.users.first();}
  else {user = message.author;}
 var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'boy')) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    var gif = new Discord.MessageEmbed()
         
         .setTitle("> __Boy Gif__")
         .setURL(`https://mrfox.ga/`)
         .setDescription(`> tag: <@${user.id}>`)
         .setColor(color)
         .setFooter(`Request by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
         .setAuthor(client.user.username, client.user.avatarURL())
         .setImage(replies[result])
          
      message.channel.send(gif);
 
    }
});


client.on('message', message => {
  const codework = message.mentions.users.first()  
  let user;
  
   let replies = ["https://cdn.discordapp.com/attachments/694694675679936585/737306643355664384/image02.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306628528930816/a_1b0b9e83a11f0e8280c5409e85dc6ecf.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306606068564108/image0_7.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306593485651979/image01.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306585470074890/20.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305042096488478/image03.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305094038749224/a_788eee9ad77c81e7406d1c06c75de1a1.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305150607327255/larissa56.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305158668517486/image0.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305302352789554/image0-4.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306359330111548/gif_dc_dc_dc.gif","https://cdn.discordapp.com/attachments/694694675679936585/736981583474589777/a_48d8e6c6b3ab9bdc3d27e9dc7bfbee53.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305354270015628/a_b77c51a4aa5bc3460d375f415dec1507.gif","https://cdn.discordapp.com/attachments/694694675679936585/737304729444679730/a_73dea0b44c5e1f57bdbbfc036b7cf3dc.gif","https://cdn.discordapp.com/attachments/694694675679936585/737304802501066862/image0-2.gif","https://cdn.discordapp.com/attachments/694694675679936585/737109543263404132/image0.gif","https://cdn.discordapp.com/attachments/694694675679936585/737066393694109718/a_d8f145cc1f4ad05bf97a118f64d673ff.gif","https://cdn.discordapp.com/attachments/694694675679936585/737066415877652490/image0_8.gif","https://cdn.discordapp.com/attachments/694694675679936585/737013297336942603/a_37397898637eca6eae7458899b12826c.gif","https://cdn.discordapp.com/attachments/694694675679936585/736898861913604156/image0-10.gif","https://cdn.discordapp.com/attachments/694694675679936585/736898644808040538/a_e4931ce8b4c41a2f4bb15c51dfd0b898.gif","https://cdn.discordapp.com/attachments/694694675679936585/736898505427386378/f6bd4fa420a9d8ce58c6519a90bc8bc0.gif","https://cdn.discordapp.com/attachments/694694675679936585/736898257925570600/a_1e816625dd242018b144b924043a7933.gif","https://cdn.discordapp.com/attachments/694694675679936585/736897942342074428/a_8634244b88f7dc8eebbf416640489ef2.gif"];

let result = Math.floor((Math.random() * replies.length));

  if (message.mentions.users.first())  {user = message.mentions.users.first();}
  else {user = message.author;}
 var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'couple')) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    var gif = new Discord.MessageEmbed()
         
         .setTitle("> __Couple Gif__")
         .setURL(`https://mrfox.ga/`)
         .setDescription(`> tag: <@${user.id}>`)
         .setColor(color)
         .setFooter(`Request by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
         .setAuthor(client.user.username, client.user.avatarURL())
         .setImage(replies[result])
          
      message.channel.send(gif);
 
    }
});


client.on('message', message => {
  const codework = message.mentions.users.first()  
  let user;
  
   let replies = [
     "https://cdn.discordapp.com/attachments/769678873197281300/838960490708598784/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838960590335639572/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838960893206724658/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838961082302988358/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838961231766356008/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838961348821516348/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838961465960431636/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838961570389950484/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838961687398842428/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838961824954318888/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838961927778598922/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838962078567628820/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838962175602458634/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838962301083058206/image0.gif",
     "https://cdn.discordapp.com/attachments/769678873197281300/838962458650476615/image0.gif"
   ];
let result = Math.floor((Math.random() * replies.length));

  if (message.mentions.users.first())  {user = message.mentions.users.first();}
  else {user = message.author;}
 var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'emoji')) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    var gif = new Discord.MessageEmbed()
         
         .setTitle("> __Emoji Gif__")
         .setURL(`https://mrfox.ga/`)
         .setDescription(`> tag: <@${user.id}>`)
         .setColor(color)
         .setFooter(`Request by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
         .setAuthor(client.user.username, client.user.avatarURL())
         .setImage(replies[result])
          
      message.channel.send(gif);
 
    }
});


client.on('message', message => {
  const codework = message.mentions.users.first()  
  let user;
  
   let replies = ["https://cdn.discordapp.com/attachments/820811352087330828/820954968793284658/image0.gif", "https://cdn.discordapp.com/attachments/742107775475253259/821516515391045642/image1.gif", "https://media.discordapp.net/attachments/687763784902770691/802939838793908244/a_b4686f704471be16d09d1cc6506cb4ce.gif", "https://cdn.discordapp.com/attachments/742107775475253259/770320501204713472/image0-12.gif", "https://cdn.discordapp.com/attachments/694694493525377035/737301660455534642/GIF.6.gif", "https://cdn.discordapp.com/attachments/737803232600129608/799869130014064681/g7.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800850948078698566/000_1-2.gif", "https://cdn.discordapp.com/attachments/742107775475253259/766092295949910056/image2.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818627992007344158/image0.gif", "https://cdn.discordapp.com/attachments/742107775475253259/821167015322320916/image4.gif", "https://media.discordapp.net/attachments/659108278969696256/802937736675852318/image1.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818627981580566568/image4.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818630968776065064/image0.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800849143341514772/a_16743dfad984f574da0b7bc2f9a0b07f.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818633362616614912/image2.gif", "https://media.discordapp.net/attachments/694695166895849562/797086937068077106/20210106_210640.gif", "https://cdn.discordapp.com/attachments/737803232600129608/799869125601918996/g5.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800850872401657886/dfdc034aab34632039e45f23a089278f.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800848548798791680/image8-1.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800859020608405514/gif1460.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800852701335912498/image3-1.gif"];

let result = Math.floor((Math.random() * replies.length));

  if (message.mentions.users.first())  {user = message.mentions.users.first();}
  else {user = message.author;}
 var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'girl')) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    var gif = new Discord.MessageEmbed()
         
         .setTitle("> __Girl Gif__")
         .setURL(`https://mrfox.ga/`)
         .setDescription(`> tag: <@${user.id}>`)
         .setColor(color)
         .setFooter(`Request by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
         .setAuthor(client.user.username, client.user.avatarURL())
         .setImage(replies[result])
          
      message.channel.send(gif);
 
    }
});


client.on('message', message => {
  const codework = message.mentions.users.first()  
  let user;
  
   let replies = ["https://cdn.discordapp.com/attachments/764927608013193276/764933832142749736/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/768164227377791066/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/788707324503392286/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/812066790564823100/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/779428418605023252/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/780111245634043944/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/793756092261072936/image0.gif"];

let result = Math.floor((Math.random() * replies.length));

  if (message.mentions.users.first())  {user = message.mentions.users.first();}
  else {user = message.author;}
 var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'neon')) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    var gif = new Discord.MessageEmbed()
         
         .setTitle("> __Neon Gif__")
         .setURL(`https://mrfox.ga/`)
         .setDescription(`> tag: <@${user.id}>`)
         .setColor(color)
         .setFooter(`Request by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
         .setAuthor(client.user.username, client.user.avatarURL())
         .setImage(replies[result])
          
      message.channel.send(gif);
 
    }
});


client.on('message', message => {
  const codework = message.mentions.users.first()  
  let user;
  
   let replies = ["https://cdn.discordapp.com/attachments/810651927334748180/811017898860347422/image0.gif", "https://cdn.discordapp.com/attachments/810651927334748180/811017900076040193/GIF-201127_023626.gif", "https://cdn.discordapp.com/attachments/742107775475253259/819268083667566622/image0.gif", "https://cdn.discordapp.com/attachments/810651927334748180/810652801218117672/siyah.gif", "https://cdn.discordapp.com/attachments/810651927334748180/810652090979844096/image0.gify", "https://cdn.discordapp.com/attachments/810651927334748180/810652685061062663/68.gif", "https://cdn.discordapp.com/attachments/810651927334748180/810652708926390292/uzgun-19.gif", "https://cdn.discordapp.com/attachments/810651927334748180/811012110145290310/a_1ba840ca0fdc749b381714af5f3939d9.gif", "https://cdn.discordapp.com/attachments/810651927334748180/810652664278810634/eniippbence.gif", "https://cdn.discordapp.com/attachments/810651927334748180/811012110653063238/GIF-201114_165700.gif", "https://cdn.discordapp.com/attachments/742107775475253259/819268121974014052/image0.gif", "https://cdn.discordapp.com/attachments/752914781941268563/825004389189025802/image0.gif", "https://cdn.discordapp.com/attachments/742107775475253259/821090832735928350/image0-24.gif", "https://cdn.discordapp.com/attachments/810651927334748180/811012066491629578/image0-34.gif", "https://cdn.discordapp.com/attachments/805854616511316014/821028902801506334/image0.gif", "https://cdn.discordapp.com/attachments/810651927334748180/810651982611742750/image0.gif"];

let result = Math.floor((Math.random() * replies.length));

  if (message.mentions.users.first())  {user = message.mentions.users.first();}
  else {user = message.author;}
 var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'sad')) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    var gif = new Discord.MessageEmbed()
         
         .setTitle("> __Sad Gif__")
         .setURL(`https://mrfox.ga/`)
         .setDescription(`> tag: <@${user.id}>`)
         .setColor(color)
         .setFooter(`Request by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
         .setAuthor(client.user.username, client.user.avatarURL())
         .setImage(replies[result])
          
      message.channel.send(gif);
 
    }
});


client.on('message', message => {
  const codework = message.mentions.users.first()  
  let user;
  
   let replies = ["https://cdn.discordapp.com/attachments/755893014915711047/828894065332453397/a_96bfa97e6390c54975940689d36b1c21.gif", "https://cdn.discordapp.com/attachments/755893014915711047/828972013040697364/gf.gif", "https://cdn.discordapp.com/attachments/755893014915711047/829244464103030784/Smoking_Men_Smoking_GIF_-_Men_Smoking_Smoke_-_Discover__Share_GIFs.gif", "https://cdn.discordapp.com/attachments/755893014915711047/829244439310106664/Nikolaj_Coster-Waldau_Gif_Hunt.gif", "https://cdn.discordapp.com/attachments/755893014915711047/828893906656690186/KAPTANman_48.gif", "https://cdn.discordapp.com/attachments/755893014915711047/829594717859348480/20.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827979186257526814/ENES_ACAR_GIF_114_-_Kopya.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827978957668220928/Man_319.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827978869209563196/Man_137.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827978647142006804/Man_214.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827683207914323988/a_d4e861205473258d19542f451ed1083e.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827683124221444126/3B7183B3-32B1-4F3E-8469-7C1D75D165C9.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827651030937763880/a_f2c5f020621dc7da6854d194156a5a13.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827567581212573706/a_96bfa97e6390c54975940689d36b1c21.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827567125580480582/Zenard_91.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827567091674513408/sadsa.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827566756641636382/image2.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827566694846562324/ENES_ACAR_GIF_134.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827501391060140052/knassy1_6.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827471223964827668/4dsr5.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827471039629361172/20210121_175434.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827045264979656764/6.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827044744408072223/image0-123.gif", "https://cdn.discordapp.com/attachments/755893014915711047/826498012410019930/a_88e5b4c03a185d0d03f84039036da416.gif", "https://cdn.discordapp.com/attachments/755893014915711047/826498127895986186/KAPTANman_48.gif", "https://cdn.discordapp.com/attachments/755893014915711047/826497192579170344/a_9b2ed05b287fc58858272fa4294a293b-1.gif"];

let result = Math.floor((Math.random() * replies.length));

  if (message.mentions.users.first())  {user = message.mentions.users.first();}
  else {user = message.author;}
 var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'smoking')) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    var gif = new Discord.MessageEmbed()
         
         .setTitle("> __Smoking Gif__")
         .setURL(`https://mrfox.ga/`)
         .setDescription(`> tag: <@${user.id}>`)
         .setColor(color)
         .setFooter(`Request by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
         .setAuthor(client.user.username, client.user.avatarURL())
         .setImage(replies[result])
          
      message.channel.send(gif);
 
    }
});







client.on('message', message => {
  const codework = message.mentions.users.first()  
  let user;
  if (message.mentions.users.first())  {user = message.mentions.users.first();}
  else {user = message.author;}
 var args = message.content.split(" ").slice(1);
  if(message.content.startsWith(prefix + 'avatar')) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    var avatar = new Discord.MessageEmbed()
    
         .setDescription(`> Avatar: <@${user.id}>`)
         .setColor(color)
         .setFooter(`Request by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
         .setAuthor(client.user.username, client.user.avatarURL())
         .setImage(user.displayAvatarURL({ dynamic: true }))
          
      message.channel.send(avatar);
 
    }
});


  
  





//=================================[ serverinfo ]===========================//

  
 client.on("message", async message  => {
if(message.content.startsWith(prefix+"server info")) {
if(!message.channel.guild) return message.reply('```This command only for servers```');
  if(message.author.bot) return;
if(!message.channel.guild) return;

let args = message.content.split(" ").slice(1);

const os = require('os')

        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#303135')
            .setTitle(`${message.guild.name} server Info`)
            .addFields(
                {
                    name: "__Owner__: ",
                    value: `${message.guild.owner}`,
                    inline: true
                },
                {
                    name: "__All Members__: ",
                    value: ` ${message.guild.memberCount} users`,
                    inline: true
                },
                {
                    name: "__Members Online__: ",
                    value: ` ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online`,
                    inline: true
                },
                {
                    name: "__All Bots__: ",
                    value: ` ${message.guild.members.cache.filter(m => m.user.bot).size} bots`,
                    inline: true
                },
                {
                    name: "__Creation Date__: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "__Roles Number__: ",
                    value: ` ${message.guild.roles.cache.size} roles in this server.`,
                    inline: true,
                },
                {
                    name: `__Region__: `,
                    value: region,
                    inline: true
                },
                {
                    name: `__Verified__: `,
                    value: message.guild.verified ? 'Server is verified' : `Not verified`,
                    inline: true
                },
                {
                    name: '__Boosters__: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? ` ${message.guild.premiumSubscriptionCount} Boosters` : ` no boosters Found`,
                    inline: true
                },
                {
                    name: "__Emojis__: ",
                    value: message.guild.emojis.cache.size >= 1 ? `All emojis ${message.guild.emojis.cache.size} !` : ' no emojis Found' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}

) 
  
  
  
  
  
client.on("message", message => {
  if (message.content.startsWith(prefix + "support")) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    const embed = new Discord.MessageEmbed()
      .setDescription(`__[Join Server](https://discord.gg/26pM9JYU56)__ *join to server bot*
__[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=5271285182&scope=bot)__ *thank you for invite bot* 
__[Website](https://mrfox.ga/)__ *website bot dashboard in coming soon*`)
      .setTimestamp()
      .setFooter(`By: ${message.author.tag}`)
      .setAuthor(client.user.username)
      .setThumbnail(message.author.avatarURL)
      .setColor("#303135");
    message.author.send(embed);
    message.react("✅");
  }
});
  
  
  
  
  
  
  
  
  


client.on("warn", (info) => console.log(info));
client.on("error", console.error);

//////

client.on("message", message => {
  if (message.content === prefix + "gif") {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    let Dashboard = `
__Gifs Commands__
> boy - girl - baby
> neon - sad - smoking
> animal - anime - cuople - emoji
__This is a little prefix__
> [ ${prefix} ]
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=5271285182&scope=bot`;
    var SUPPORT = `https://discord.gg/26pM9JYU56`;
    var website = `https://mrfox.ga/`;
    var EMBED = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(
        `${Dashboard}
  __**[invite bot](${addserver})**__ - __**[Discord Server](${SUPPORT})**__  - __**[Webstie](${website})**__`
      )
      .setImage("");
    message.channel.send(EMBED);
    message.react("✨");
  }
});







client.on("message", message => {
  if (message.content === prefix + "music") {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    let Dashboard = `
__Music Commands__ 
> loop - lyrics - nowplaying
> pause - play - playlist
> queue - remove - resume
> search - shuffle - skip
> skipto - stop - volume - leave
__This is a little prefix__
> [ ${prefix} ]
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=5271285182&scope=bot`;
    var SUPPORT = `https://discord.gg/26pM9JYU56`;
    var website = `https://mrfox.ga/`;
    var EMBED = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(
        `${Dashboard}
  __**[invite bot](${addserver})**__ - __**[Discord Server](${SUPPORT})**__  - __**[Webstie](${website})**__`
      )
      .setImage("");
    message.channel.send(EMBED);
    message.react("🎧");
  }
});








client.on("message", message => {
  if (message.content === prefix + "help") {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    let Dashboard = `
__Help Commands__
> __mod__  to view command moderator

> __public__  to view command all info

> __music__ to see command music

> __gif__ to see all commands gif

> __giveaway__ to view command giveaways
__This is a little prefix__
> [ ${prefix} ]
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=5271285182&scope=bot`;
    var SUPPORT = `https://discord.gg/26pM9JYU56`;
    var website = `https://mrfox.ga/`;
    var EMBED = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(
        `${Dashboard}
  __**[invite bot](${addserver})**__ - __**[Discord Server](${SUPPORT})**__  - __**[Webstie](${website})**__`
      )
      .setImage("");
    message.channel.send(EMBED);
  }
});







client.on("message", message => {
  if (message.content === prefix + "mod") {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    let Dashboard = `
__Security Commands__ 
> ${prefix}anti kick - [Number]
> ${prefix}anti ban - [Number]
> ${prefix}anti roleC - [Number]
> ${prefix}anti roleD - [Number]
> ${prefix}anti channelC - [Number]
> ${prefix}anti channelD - [Number]
> ${prefix}anti bot - [on/off]
> ${prefix}settings
__Moderation Commands__ 
> lock , unlock , clear , ban , kick
> unban , mute , unmute , bans
__This is a little prefix__
> [ ${prefix} ]
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=5271285182&scope=bot`;
    var SUPPORT = `https://discord.gg/26pM9JYU56`;
    var website = `https://mrfox.ga/`;
    var EMBED = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(
        `${Dashboard}
  __**[invite bot](${addserver})**__ - __**[Discord Server](${SUPPORT})**__  - __**[Webstie](${website})**__`
      )
      .setImage("");
    message.channel.send(EMBED);
    message.react("👮🏻");
  }
});


client.on("message", message => {
  if (message.content === prefix + "public") {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    let Dashboard = `
__Public Commands__ 
> user info , 
> server info , 
> ping , 
> bot info, 
> avatar 
__This is a little prefix__
> [ ${prefix} ]
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=5271285182&scope=bot`;
    var SUPPORT = `https://discord.gg/26pM9JYU56`;
    var website = `https://mrfox.ga/`;
    var EMBED = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(
        `${Dashboard}
  __**[invite bot](${addserver})**__ - __**[Discord Server](${SUPPORT})**__ - __**[Webstie](${website})**__`
      )
      .setImage("");
    message.channel.send(EMBED);
    message.react("ℹ️");
  }
});


client.on("message", message => {
  if (message.content === prefix + "giveaway") {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    let Dashboard = `
__Giveaway Commands__ 
> end <id-message>
> start 
> delete
> create <#channel-name>
__This is a little prefix__
> [ ${prefix} ]
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=5271285182&scope=bot`;
    var SUPPORT = `https://discord.gg/26pM9JYU56`;
    var website = `https://mrfox.ga/`;
    var EMBED = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(
        `${Dashboard}
  __**[invite bot](${addserver})**__ - __**[Discord Server](${SUPPORT})**__  - __**[Webstie](${website})**__`
      )
      .setImage("");
    message.channel.send(EMBED);
    message.react("🎉");
  }
});

///////

client.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let invite = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setTitle("" + 
                "click here | thank you for invite me ⚡" + `${client.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=5271285182&scope=bot`
      );
    message.author.send(invite);
    message.react("✨");
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send("Sorry This Command Only For Servers.");

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(
        "**Sorry , But You Dont Have `MANAGE_MESSAGE` Permission **"
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    const lock = new Discord.MessageEmbed()
      .setTitle("" + "Click Here To Add : " + `${client.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=5271285182&scope=bot`
      )
      .setColor(color)
      .setDescription(
                      `Locked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ${ghallatw}
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(lock);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send("Sorry This Command Only For Servers.");

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(
        "**Sorry , But You Dont Have `MANAGE_MESSAGE` Permission **"
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setTitle("" + "Click Here To Add : " + `${client.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=5271285182&scope=bot`
      )
      .setColor(color)
      .setDescription(
         `UnLocked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ${rastw}
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});

//////

const rast = "";
const rastw = "";
const ghallat = "";
const ghallatw = "";
const logosec = "";
const warn = "";
const color = "#303135";

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2,
      time: 30
    }
  if (message.content.startsWith(prefix + "anti")) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    if (message.author.id !== message.guild.ownerID) 
    return message.channel.send(
        "**  Ownership can use this command. **"
      );
    if (message.content.startsWith(prefix + "anti ban")) {
      if(!message.channel.guild) return message.reply('```This command only for servers```');
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if(!message.channel.guild) return message.reply('```This command only for servers```');
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].kickLimits} **`
      );
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if(!message.channel.guild) return message.reply('```This command only for servers```');
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].roleDelLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if(!message.channel.guild) return message.reply('```This command only for servers```');
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].roleCrLimits} **`
      );
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if(!message.channel.guild) return message.reply('```This command only for servers```');
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].chaDelLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if(!message.channel.guild) return message.reply('```This command only for servers```');
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].chaCrLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if(!message.channel.guild) return message.reply('```This command only for servers```');
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].time} **`
      );
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Role\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("ban member");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("member kick");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Kick\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 2,
        chaDelLimit: 2,
        roleDelLimit: 2,
        kickLimits: 2,
        chaCrLimit: 2,
        roleCrLimits: 2
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("kick member");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

//////
const antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'))
  client.on('message', message => {
    if(message.content.startsWith(prefix + "anti bot on")){
      if(!message.channel.guild) return message.reply('```This command only for servers```');
          
        if(message.member.id !== message.guild.ownerID) return message.channel.send('Only Ownership can use this command')
  antibots[message.guild.id] = {
  onoff: 'On',
  }
  let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Done Check The Anti bots is on**") 
      .addField("Server", `${message.guild.name}`)
      .addField("Requested By:", `${message.author}`)
      .setColor("#303135")
      .setFooter(`${client.user.username}`)
      .setTimestamp();
    message.channel.send(embed);
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
 
          })
  client.on('message', message => {
    if(message.content.startsWith(prefix + "anti bot off")) {
      if(!message.channel.guild) return message.reply('```This command only for servers```');
          
           if(message.member.id !== message.guild.ownerID)return;
  antibots[message.guild.id] = {
  onoff: 'Off',
  }
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Done Check The Anti bots is off**") 
      .addField("Server", `${message.guild.name}`)
      .addField("Requested By:", `${message.author}`)
      .setColor("#303135")
      .setFooter(`${client.user.username}`)
      .setTimestamp();
    message.channel.send(embed);
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
 
          })
 
  client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.ban("**antibots is one!!**")
  })
 
  fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
  .catch(err => {
  console.error(err);
  });
 
  })






client.on("message", message => {
  if (message.content === prefix + "settings") {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("ADMINISTRATOR"))
      if (!message.channel.guild) return;
    if (message.content < 1023) return;
    const black = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(client.user.avatarURL()).setDescription(`AntiBan
Enabled: 
Maximum Ban : ${config[message.guild.id].banLimit}
-
AntiKick
Enabled: 
Maximum Kick : ${config[message.guild.id].kickLimits}
-
AntiChannelD
Enabled: 
Maximum Delete : ${config[message.guild.id].chaDelLimit}
-
AntiChannelC
Enabled: 
Maximum Create : ${config[message.guild.id].chaCrLimit}
-
AntiRoleD
Enabled: 
Maximum Delete : ${config[message.guild.id].roleDelLimit}
-
AntiRoleC
Enabled: 
Maximum Create : ${config[message.guild.id].roleCrLimits}
-
AntiTime
Enabled: 
Maximum Time : ${config[message.guild.id].time}

`);

    message.channel.send(black);
  }
});

//=================================[ ban & unban]==================================//

client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  let cmd = messageArray[0];
  if (cmd === prefix + "ban") {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    let toBan =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.reply("I need ``BAN_MEMBERS`` permission ");
    const reason = args[1] || "there was no reason";
    toBan.ban({
      reason: reason
    });
    message.channel.send(
      `${toBan} banned from the server! \nReason: ${reason}`
    );
  }
  if (cmd === prefix + "unban") {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    let toBan = await client.users.fetch(args[0]);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.reply("I need ``BAN_MEMBERS`` permission ");
    message.guild.members.unban(toBan);
    message.channel.send(`${toBan} has been unbanned from the server `);
  }
});
/////

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(JxA => {
          message.guild.unban(JxA);
        });
      });
      return message.channel.send("Unban all members");
    }
    if (!args) return message.channel.send("Please Type the member ID / all");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`🛬 Unban this member ${m.username}`);
      })
      .catch(stry => {
        message.channel.send(
          `**❓ - I can't find that person \`${args}\` in ban list**`
        );
      });
  }
});

//=================================[ mute ]=================================//

client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission MUTE_MEBMERS");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission MUTE_MEBMERS");
    if (!user) return message.channel.send(`${prefix}mute <@mention Or ID>`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#303135",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});

//=================================[ unmute ]===============================//

client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission MUTE_MEBMERS");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission MUTE_MEBMERS");
    if (!user) return message.channel.send(`${prefix}unmute <@mention Or ID>`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`removed mute from ${user.username}!`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});



//=================================[ userinfo ]=============================//

client.on("message", prof => {
  if (prof.content.startsWith(prefix + "user info")) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    if (cooldown.has(prof.author.id)) {
      return prof.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(prof.author.id);

    setTimeout(() => {
      cooldown.delete(prof.author.id);
    }, cdtime * 1000);
    var professor = new Discord.MessageEmbed()
      .setThumbnail(prof.author.avatarURL())
      .setColor("#303135")
      .setTitle("Your Info User.")
      .addField("**Your Name**", `<@${prof.author.id}>`)
      .addField("**Your ID**", `${prof.author.id}`)
      .addField(
        "**Joined Server At**",
        moment(prof.joinedAt).format("D/M/YYYY h:mm a"),
        true
      )
      .addField("**Create User**", prof.author.createdAt.toLocaleString());
    prof.channel.send(professor);
  }
});

//=================================[ kick ]=================================//

client.on("message", message => {
  if (message.author.bot) return;
  var args = message.content.split(" ");
  if (args[0] === prefix + "kick") {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("KICK_MEMBERS")) return;
    let user = message.mentions.members.first();
    if (!user) return;
    if (user.id === message.author.id)
      return message.reply("will you cant kick your self");
    if (!message.guild.member(user).bannable)
      return message.reply("i cant kick this user");
    var reason = args[2];
    if (!reason) reason = "No reason typed";
    user.kick();
    var embed = new Discord.MessageEmbed();
    message.channel.send(`${user.user.username} kicked ✈️`);
  }
});

//=================================[ bans ]=================================//

client.on("message", message => {
  if (message.content.startsWith(prefix + "bans")) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
    message.channel;
    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`📋 Server Ban List : ${bans.size} `))
      .catch(console.error);
  }
});

//=================================[ ping ]=================================//


//=================================[ botinfo ]==============================//

client.on("message", message => {
  if (message.content.startsWith(`${prefix}bot info`)) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    const tnx = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(
        `https://cdn.discordapp.com/attachments/772758556848029727/802994883378806824/image0.jpg`
      )
      .setColor("#303135")
      .setTitle(`Info about ${client.user.username}.`)
      .addField(
        "**My Ping**",
        `${Date.now() - message.createdTimestamp}` + "MS",
        true
      )
      .addField(
        "**Ram Usage**",
        `${(process.memoryUsage().rss / 1048576).toFixed()}MB`,
        true
      )
      .addField("**Servers**", `[ ${client.guilds.cache.size} ]`, true)
      .addField("**Channels**", `[ ${client.channels.cache.size} ]`, true)
      .addField("**Users**", `[ ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} ]`, true)
      .addField("**My Name**", `[ ${client.user.tag} ]`, true)
      .addField("**My ID**", `[ ${client.user.id} ]`, true)
      .addField("**DiscordJS**", `[ ${Discord.version} ]`, true)
      .addField("**NodeJS**", `[ ${process.version} ]`, true)
      .addField("**Bot-Owners**", `<@596060641740193856>`, true)
      .addField("**My Prefix**", `[ ${prefix} ]`, true)
      .addField("**My Language**", `[ Java Script ]`, true)
      .setFooter(`${message.author.username}`);

    message.channel.send(tnx);
  }
});

//=================================[ warn ]=================================//

client.on("message", message => {
  if (message.content.startsWith(prefix + "warn")) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    let args = message.content.split(" ").slice(1);
    if (!message.member.hasPermission("OWNERSHIP"))
      return message.reply("you dont have a Permission");

    var user = message.mentions.users.first();
    var rn = args.slice(1).join(" ");
    let em = new Discord.MessageEmbed()
      .setTitle("Error :")
      .setColor("#303135")
      .setDescription(
        `
  **Usage:**
 ${prefix}warn (user) (reason)

  Ex :
  ${prefix}warn ${message.author} 
  ${prefix}warn ${message.author}  test
 
  `
      )
      .setAuthor(message.author.username, message.author.avatarURL());
    if (!user) return message.channel.send(em);

    let ffg = new Discord.MessageEmbed()
      .setColor("#303135")
      .setTimestamp()
      .setTitle("Warned!")
      .setDescription(
        `


 warned by  : ${message.author.username}
 reason     : ${rn}


  `
      )
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(``);
    message.channel.send(ffg);
    user.send(ffg);
    message.delete();
  }
});

//=================================[ clear ]================================//

client.on("message", async message => {
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "clear" || command == "clear") {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    message.delete({ timeout: 0 });
    if (!message.channel.guild)
      return message.reply(`This Command For Servers Only`);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`You don't have perms`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send(`I don't have perms`);

    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100)
      return message.channel
        .send(
          `
i cant delete more than 100 messages 
`
        )
        .then(messages => messages.delete(5000));
    if (!messagecount) messagecount = "100";
    message.channel.messages
      .fetch({ limit: 100 })
      .then(messages => message.channel.bulkDelete(messagecount))
      .then(msgs => {
        message.channel
          .send(
            `
${msgs.size} messages cleared
`
          )
          .then(messages => messages.delete({ timeout: 5000 }));
      });
  }
});

//=================================[ kick & ban ]================================//

client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        " | You don't have Permissions do to this."
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send(" | Member not found!");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(` | You can't ${mode} the owner!`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        ` | You can't ${mode} people higher ranked than yourself!`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        ` | I can't ${mode} people who are higher ranked than me!`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(` | Specified user is not ${mode}able.`);
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `✅ ${mode == "ban" ? "Bann" : mode}ed __${user.user.tag}__ (ID: \`${
            user.user.id
          }\`)`
        )
      )
      .catch(console.error);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////


client.on('message',async message => {
  if(message.content.startsWith(prefix + "uptime")) { 
    if(!message.channel.guild) return message.reply('```This command only for servers```');
    let rozh= Math.floor(client.uptime / 86400000);
    let katzhmer= Math.floor(client.uptime / 3600000) % 24;
    let daqa= Math.floor(client.uptime / 60000) % 60;
    let chrka= Math.floor(client.uptime / 1000) % 60;
    
    return message.channel.send(`__Uptime:__\n${rozh}d ${katzhmer}h ${daqa}m ${chrka}s`);
  }
  
})



    //======= msg tag ========\\


client.on('message', message => {
  if (message.content.startsWith("<@764487416748310570>")) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
   let embed = new Discord.MessageEmbed()
     .setAuthor(client.user.username, client.user.avatarURL())
     .setColor("#303135")
     .setFooter(message.member.displayName, message.author.displayAvatarURL())
     .setDescription(`
     > Hello sir how can i help you ?
     > Please type : __${prefix}help__ to see all commands
 To report bot send email for :
     > __|| [ Mr.FoxDevelopment@gmail.com ] ||__
__Support__
     > __[Discord Server](https://discord.gg/26pM9JYU56)__ - __[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=5271285182&scope=bot)__ - __[Website](https://mrfox.ga/)__`)
   message.reply('Hi ✨')
  message.channel.send(embed);
    }
}); 


const leave = ["596060641740193856"] //owner id
 
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
 
 
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!leave.includes(message.author.id)) return;
 
 
  if (message.content === (prefix + "leave")) {
    if(!message.channel.guild) return message.reply('```This command only for servers```');
      
    message.guild.leave();    
      
    message.channel.send('```DONE```')
      
    } 
  
})  
})




