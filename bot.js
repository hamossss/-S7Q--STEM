const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});

var prefix = "!";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('message', function(msg) {
         var prefix = "!"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

client.on("message", msg => {
           var prefix = "!";
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});

client.on('message', eyad => {
  if (eyad.content.startsWith('!تكلم')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`منشن الشخص الذي تريد فك الميوت عنه `');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         SEND_MESSAGES: true
         })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${eyad.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
    }
})


client.on('message', eyad => {
  if (eyad.content.startsWith('!اسكت')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` ');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          SEND_MESSAGES: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لقد تم اعطائك ميوت كتابي
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم اعطائه الميوت الكتابي بنجاح
بواسطة : <@${eyad.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
    }
})



client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`**__اقفل الباب وراك يا عسل__ :clap:**`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`S7Q Bot`, '')

var channel =member.guild.channels.find('name', 'ترحيب')
if (!channel) return;
channel.send({embed : embed});
});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`「.🔱 Welcome TO CLAN S7Q 🔱.」شيڪ عڵي قوٱنين ٱڵڪڵٱن #rules 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {
    if (message.content.startsWith(prefix + 'مسح')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });

var prefix = "!"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


var prefix = "!"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


let rebel;
client.on("ready", async  => {
    let guild = client.guilds.get("442919008715669505");
  let users = guild.members.map(member => member.user.id);
  let i;
  rebel=0;
for (i=0 ; i < users.length ; i++) {
 let   check = guild.members.get(users[i]);
if(!check.voiceChannelID){
        continue;
}else{
  rebel++;
}
}
guild.channels.find('id', '471742581244428288').setName(" . "+rebel+" عدد الاعضاء في الرومات");
  client.setInterval(() =>{
    let d = Date.now()
  }, 5000);
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let guild = client.guilds.get("442919008715669505");
let newUserChannel = newMember.voiceChannel
let oldUserChannel = oldMember.voiceChannel
 if(oldUserChannel === undefined && newUserChannel !== undefined) {
   rebel++;
guild.channels.find('id', '471742581244428288').setName(" . "+rebel+" عدد الاعضاء في الرومات");
} else if(newUserChannel === undefined){
  rebel--;
guild.channels.find('id', '471742581244428288').setName(" . "+rebel+" عدد الاعضاء في الرومات");
}
});
client.on('message', Codes => {
  
  if(Codes.content === "!صوت") {
      Codes.channel.send("  . "+rebel+" عدد الاعضاء في الرومات");
}
});


client.on('message', msg => { 
if (msg.content.startsWith(`!report`)) {

   let args = msg.content.split(" ").slice(1);

  if (!msg.mentions.members.first()) return msg.reply(`منشن شخص`)

  if (!args[1]) return msg.reply(`ما هو البلاغ ؟؟`)

  if (msg.guild.channels.find('name', 'warnings')) {

    msg.guild.channels.find('name', 'warnings').send(`
  تبليغ على : ${msg.mentions.members.first()}
  بلغ عليه من قبل : ${msg.member}
  السبب : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
  `)
  }
}
})







client.on ("guildMemberAdd", member => {

   var role = member.guild.roles.find ("name", "- S7Q | VISTORY");
   member.addRole (role);

});


  client.on('voiceStateUpdate', (codes, ReBeL) => {
if(ReBeL.voiceChannelID !== "472082257952374786") return console.log("حمو");
ReBeL.guild.createChannel(ReBeL.user.username , 'voice').then((rebeeel) =>{
    rebeeel.setParent("471357078439591956");
ReBeL.guild.members.get(ReBeL.id).setVoiceChannel(rebeeel.id).then((codess) =>{
  console.log("تــــــم .");
  let scan = setInterval(()=>{
if(!ReBeL.voiceChannel) {
  rebeeel.delete();
}
  }, 1700);
});
});
});
  

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '472078877146218506').setName("W");
client.channels.find('id', '472078877146218506').setName("We");
client.channels.find('id', '472078877146218506').setName("Wel");
client.channels.find('id', '472078877146218506').setName("Welc");
client.channels.find('id', '472078877146218506').setName("Welco");
client.channels.find('id', '472078877146218506').setName("Welcom");
client.channels.find('id', '472078877146218506').setName("Welcome");
client.channels.find('id', '472078877146218506').setName("Welcome T");
client.channels.find('id', '472078877146218506').setName("Welcome To");
client.channels.find('id', '472078877146218506').setName("Welcome To S");
client.channels.find('id', '472078877146218506').setName("Welcome To S7");
client.channels.find('id', '472078877146218506').setName("Welcome To S7Q");
client.channels.find('id', '472078877146218506').setName("Welcome To S7Q C");
client.channels.find('id', '472078877146218506').setName("Welcome To S7Q CLAN .");
  }, 3000);
});

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '472185044191019019').setName("W");
client.channels.find('id', '472185044191019019').setName("We");
client.channels.find('id', '472185044191019019').setName("Wel");
client.channels.find('id', '472185044191019019').setName("Welc");
client.channels.find('id', '472185044191019019').setName("Welco");
client.channels.find('id', '472185044191019019').setName("Welcom");
client.channels.find('id', '472185044191019019').setName("Welcome");
client.channels.find('id', '472185044191019019').setName("Welcome T");
client.channels.find('id', '472185044191019019').setName("Welcome To");
client.channels.find('id', '472185044191019019').setName("Welcome To S");
client.channels.find('id', '472185044191019019').setName("Welcome To S7");
client.channels.find('id', '472185044191019019').setName("Welcome To S7Q");
client.channels.find('id', '472185044191019019').setName("Welcome To S7Q S");
client.channels.find('id', '472185044191019019').setName("Welcome To S7Q STORE .");
  }, 3000);
});



client.on('message', message => {
    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
	     if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '1')) return
      message.guild.createRole({
                  name: "1",
                    color: "#cf1111",
                    permissions: []
     })
	}
});
client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '2')) return		 
      message.guild.createRole({
                  name: "2",
                    color: "#df5d11",
                    permissions: []
     })
	}
});
client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '3')) return		 
      message.guild.createRole({
                  name: "3",
                    color: "#dfab11",
                    permissions: []
     })
	}
});
	client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '4')) return		 
      message.guild.createRole({
                  name: "4",
                    color: "#dfde11",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return     
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '5')) return		 
      message.guild.createRole({
                  name: "5",
                    color: "#a8df11",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '6')) return
      message.guild.createRole({
                  name: "6",
                    color: "#64c40c",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return     
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '7')) return		 
      message.guild.createRole({
                  name: "7",
                    color: "#38c30c",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '8')) return		 
      message.guild.createRole({
                  name: "8",
                    color: "#0cc33f",
                    permissions: []
     })
	}});	
client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '9')) return
      message.guild.createRole({
                  name: "9",
                    color: "#0cc36c",
                    permissions: []
     })
}});	
client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '10')) return		 
      message.guild.createRole({
                  name: "10",
                    color: "#0cc394",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '11')) return		 
      message.guild.createRole({
                  name: "11",
                    color: "#0cc3ad",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '12')) return		 
      message.guild.createRole({
                  name: "12",
                    color: "#0cb1c3",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '13')) return
      message.guild.createRole({
                  name: "13",
                    color: "#0c9ec3",
                    permissions: []
     })
}});
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '14')) return
      message.guild.createRole({
                  name: "14",
                    color: "#0c8ac3",
                    permissions: []
     })
}});
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '15')) return
      message.guild.createRole({
                  name: "15",
                    color: "#0c6cc3",
                    permissions: []
     })
	}});
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '16')) return		 
      message.guild.createRole({
                  name: "16",
                    color: "#0c49c3",
                    permissions: []
     })
}});
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '17')) return		 
      message.guild.createRole({
                  name: "17",
                    color: "#0c2bc3",
                    permissions: []
     })
}});
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '18')) return		 
      message.guild.createRole({
                  name: "18",
                    color: "#150cc3",
                    permissions: []
     })
}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return 
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '19')) return		 
      message.guild.createRole({
                  name: "19",
                    color: "#880cc3",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '20')) return
      message.guild.createRole({
                  name: "20",
                    color: "#b50cc3",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '21')) return		 
      message.guild.createRole({
                  name: "21",
                    color: "#c30cb8",
                    permissions: []
     })
	}});	

client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '22')) return		 
      message.guild.createRole({
                  name: "22",
                    color: "#c30c90",
                    permissions: []
     })
}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '23')) return		 
      message.guild.createRole({
                  name: "23",
                    color: "#c30c63",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '24')) return		 
      message.guild.createRole({
                  name: "24",
                    color: "#c30c4a",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '25')) return		 
      message.guild.createRole({
                  name: "25",
                    color: "#c30c31",
                    permissions: []
     })
	}});	

	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return 
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '26')) return		 
      message.guild.createRole({
                  name: "26",
                    color: "#ff0000",
                    permissions: []
     })
	}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '27')) return		 
      message.guild.createRole({
                  name: "27",
                    color: "#ff4200",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '28')) return		 
      message.guild.createRole({
                  name: "28",
                    color: "#ff6c00",
                    permissions: []
     })
		}});	
	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return     
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '29')) return		 
      message.guild.createRole({
                  name: "29",
                    color: "#ff8f00",
                    permissions: []
     })
}});	
	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return    
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '30')) return		 
      message.guild.createRole({
                  name: "30",
                    color: "#ffd400",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '31')) return		 
      message.guild.createRole({
                  name: "31",
                    color: "#e4ff00",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return    
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '32')) return		 
      message.guild.createRole({
                  name: "32",
                    color: "#adff00",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '33')) return		 
      message.guild.createRole({
                  name: "33",
                    color: "#60ff00",
                    permissions: []
     })
}});	
	
client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '34')) return		 
      message.guild.createRole({
                  name: "34",
                    color: "#14ff00",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '35')) return		 
      message.guild.createRole({
                  name: "35",
                    color: "#00ff40",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '36')) return		 
      message.guild.createRole({
                  name: "36",
                    color: "#00ff8c",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '37')) return
      message.guild.createRole({
                  name: "37",
                    color: "#00ffc4",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '38')) return		 
      message.guild.createRole({
                  name: "38",
                    color: "#00e7ff",
                    permissions: []
     })
}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return 
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '39')) return		 
      message.guild.createRole({
                  name: "39",
                    color: "#009aff",
                    permissions: []
     })
}});	
	
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '40')) return		 
      message.guild.createRole({
                  name: "40",
                    color: "#0055ff",
                    permissions: []
     })
}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return     
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '41')) return		 
      message.guild.createRole({
                  name: "41",
                    color: "#0001ff",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return    
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '42')) return		 
      message.guild.createRole({
                  name: "42",
                    color: "#6700ff",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '43')) return		 
      message.guild.createRole({
                  name: "43",
                    color: "#ad00ff",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '44')) return		 
      message.guild.createRole({
                  name: "44",
                    color: "#dd00ff",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '45')) return		 
      message.guild.createRole({
                  name: "45",
                    color: "#ff00fe",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	   if(message.content === prefix + 'c-colors') {
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '46')) return		 
      message.guild.createRole({
                  name: "46",
                    color: "#ff00cd",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '47')) return		 
      message.guild.createRole({
                  name: "47",
                    color: "#ff0096",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return 
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '48')) return		 
      message.guild.createRole({
                  name: "48",
                    color: "#ff0057",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '49')) return		 
      message.guild.createRole({
                  name: "49",
                    color: "#ff002d",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  message.channel.send(`**:x: | ${message.author.username}  You Must Have The \`MANAGE_ROLES\` permission to create colors roles !**`)
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return message.channel.send(`**:x: | ${message.author.username}  I require the \`MANAGE_ROLES\` permission to create colors roles !**`)
         if(message.guild.roles.find('name', '50')) return  message.channel.send('**لا يمكن انشاء رتب الالوان مرتين | Colors roles can not be created twice **');		 
      message.guild.createRole({
                  name: "50",
                    color: "#050505",
                    permissions: []
     })
		
				
	           message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('GREEN')
	 .setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``I Creating Colors Just Wait | جاري العمل على الالوان``')
	 });
				
	
	}});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return  message.channel.send('**You Dont Have** `MANAGE_ROLES` **premission**').then(msg => msg.delete(6000))
		let role = message.guild.roles.find('name', '1');
		let rank = message.guild.roles.find('name', '1');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return 
		let role = message.guild.roles.find('name', '2');
		let rank = message.guild.roles.find('name', '2');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '3');
		let rank = message.guild.roles.find('name', '3');
    if (!rank) return  
		role.delete()
		}
	
	});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '4');
		let rank = message.guild.roles.find('name', '4');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '5');
		let rank = message.guild.roles.find('name', '5');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '6');
		let rank = message.guild.roles.find('name', '6');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '7');
		let rank = message.guild.roles.find('name', '7');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '8');
		let rank = message.guild.roles.find('name', '8');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '9');
		let rank = message.guild.roles.find('name', '9');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '10');
		let rank = message.guild.roles.find('name', '10');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '11');
		let rank = message.guild.roles.find('name', '11');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '12');
		let rank = message.guild.roles.find('name', '12');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '13');
		let rank = message.guild.roles.find('name', '13');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '14');
		let rank = message.guild.roles.find('name', '14');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '15');
		let rank = message.guild.roles.find('name', '15');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '16');
		let rank = message.guild.roles.find('name', '16');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '17');
		let rank = message.guild.roles.find('name', '17');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '18');
		let rank = message.guild.roles.find('name', '18');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '19');
		let rank = message.guild.roles.find('name', '19');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '20');
		let rank = message.guild.roles.find('name', '20');
    if (!rank) return  
		role.delete()
		}
	
	});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '21');
		let rank = message.guild.roles.find('name', '21');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '22');
		let rank = message.guild.roles.find('name', '22');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '23');
		let rank = message.guild.roles.find('name', '23');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '24');
		let rank = message.guild.roles.find('name', '24');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '25');
		let rank = message.guild.roles.find('name', '25');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '26');
		let rank = message.guild.roles.find('name', '26');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '27');
		let rank = message.guild.roles.find('name', '27');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '28');
		let rank = message.guild.roles.find('name', '28');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '29');
		let rank = message.guild.roles.find('name', '29');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '30');
		let rank = message.guild.roles.find('name', '30');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '31');
		let rank = message.guild.roles.find('name', '31');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '32');
		let rank = message.guild.roles.find('name', '32');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '33');
		let rank = message.guild.roles.find('name', '33');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '34');
		let rank = message.guild.roles.find('name', '34');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '35');
		let rank = message.guild.roles.find('name', '35');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '36');
		let rank = message.guild.roles.find('name', '36');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '37');
		let rank = message.guild.roles.find('name', '37');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '38');
		let rank = message.guild.roles.find('name', '38');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '39');
		let rank = message.guild.roles.find('name', '39');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '40');
		let rank = message.guild.roles.find('name', '40');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '41');
		let rank = message.guild.roles.find('name', '41');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '42');
		let rank = message.guild.roles.find('name', '42');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '43');
		let rank = message.guild.roles.find('name', '43');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '44');
		let rank = message.guild.roles.find('name', '44');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '45');
		let rank = message.guild.roles.find('name', '45');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '46');
		let rank = message.guild.roles.find('name', '46');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '47');
		let rank = message.guild.roles.find('name', '47');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '48');
		let rank = message.guild.roles.find('name', '48');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '49');
		let rank = message.guild.roles.find('name', '49');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '50');
		let rank = message.guild.roles.find('name', '50');
    if (!rank) return  message.channel.send('**I did not find colors roles | لم اجد رتب الالوان**');
		role.delete()
		
			message.channel.sendMessage({embed: new Discord.RichEmbed()
          .setColor('RED').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``I Deleting Colors Just Wait | جـاري حدف رتـب الالـوان``')});
	}
	});
   client.on('message',message => {
  if (message.content === prefix +'colors') {
      if (!message.channel.guild) return;
      if(!message.guild.member(client.user).hasPermission('ATTACH_FILES'))return message.reply("**I Don't Have Permission 'ATTACH_FILES' ليس لدي صلاحية")
    message.channel.sendFile('./colors1.png');
  }
	
});



client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '!color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`S7Q,~THE~BEST`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
