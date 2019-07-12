<<<<<<< HEAD
<p align="center">
  <a href="https://hydrabolt.github.io/discord.js">
    <img alt="discord.js" src="http://hydrabolt.github.io/discord.js/res/logo.png" width="546">
  </a>
</p>

[![Build Status](https://travis-ci.org/hydrabolt/discord.js.svg)](https://travis-ci.org/hydrabolt/discord.js) [![Documentation Status](https://readthedocs.org/projects/discordjs/badge/?version=latest)](http://discordjs.readthedocs.org/en/latest/?badge=latest)

[![NPM](https://nodei.co/npm/discord.js.png?downloads=true&stars=true)](https://nodei.co/npm/discord.js/)
    

discord.js is a node module used as a way of interfacing with [Discord](https://discordapp.com/). It is a very useful module for creating bots.

### Installation

**Requires node 0.12+**

`npm install --save discord.js`

---

### Example: ping-pong
=======
<div align="center">
  <br />
  <p>
    <a href="https://discord.js.org"><img src="https://discord.js.org/static/logo.svg" width="546" alt="discord.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/bRCvFy9"><img src="https://discordapp.com/api/guilds/222078108977594368/embed.png" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/v/discord.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/dt/discord.js.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://travis-ci.org/discordjs/discord.js"><img src="https://travis-ci.org/discordjs/discord.js.svg" alt="Build status" /></a>
    <a href="https://david-dm.org/discordjs/discord.js"><img src="https://img.shields.io/david/discordjs/discord.js.svg?maxAge=3600" alt="Dependencies" /></a>
    <a href="https://www.patreon.com/discordjs"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/discord.js/"><img src="https://nodei.co/npm/discord.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

## About
discord.js is a powerful [Node.js](https://nodejs.org) module that allows you to easily interact with the
[Discord API](https://discordapp.com/developers/docs/intro).

- Object-oriented
- Predictable abstractions
- Performant
- 100% coverage of the Discord API

## Installation
**Node.js 10.0.0 or newer is required.**  
Ignore any warnings about unmet peer dependencies, as they're all optional.

Without voice support: `npm install discordjs/discord.js`  
With voice support ([node-opus](https://www.npmjs.com/package/node-opus)): `npm install discordjs/discord.js node-opus`  
With voice support ([opusscript](https://www.npmjs.com/package/opusscript)): `npm install discordjs/discord.js opusscript`

### Audio engines
The preferred audio engine is node-opus, as it performs significantly better than opusscript. When both are available, discord.js will automatically choose node-opus.
Using opusscript is only recommended for development environments where node-opus is tough to get working.
For production bots, using node-opus should be considered a necessity, especially if they're going to be running on multiple servers.

### Optional packages
- [zlib-sync](https://www.npmjs.com/package/zlib-sync) for faster WebSocket data inflation (`npm install zlib-sync`)
- [zucc](https://www.npmjs.com/package/zucc) for significantly faster WebSocket data inflation (`npm install zucc`)
- [erlpack](https://github.com/discordapp/erlpack) for significantly faster WebSocket data (de)serialisation (`npm install discordapp/erlpack`)
- One of the following packages can be installed for faster voice packet encryption and decryption:
    - [sodium](https://www.npmjs.com/package/sodium) (`npm install sodium`)
    - [libsodium.js](https://www.npmjs.com/package/libsodium-wrappers) (`npm install libsodium-wrappers`)
- [uws](https://www.npmjs.com/package/@discordjs/uws) for a much faster WebSocket connection (`npm install @discordjs/uws`)
- [bufferutil](https://www.npmjs.com/package/bufferutil) for a much faster WebSocket connection when *not* using uws (`npm install bufferutil`)

## Example usage
>>>>>>> upstream/master
```js
var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function(message){
	if(message.content === "ping")
		mybot.reply(message, "pong");
});

mybot.login("email", "password");
```
---

### Contributing

Feel free to contribute! Just clone the repo and edit the files in the **src folder, not the lib folder.** 

Whenever you come to making a pull request, make sure it's to the *indev* branch and that you have built the lib files by running `grunt --dev`

---

### Related Projects

Here is a list of other Discord APIs:

#### Java:
[Discord4J](https://github.com/nerd/Discord4J)

[JDiscord](https://github.com/NotGGhost/jDiscord)

[JDA](https://github.com/DV8FromTheWorld/JDA)

#### Go:
[Go-Discord](https://github.com/gdraynz/go-discord)

[DiscordGo](https://github.com/bwmarrin/discordgo)

#### .NET:
[Discord.Net](https://github.com/RogueException/Discord.Net)

[DiscordSharp](https://github.com/Luigifan/DiscordSharp)

#### NodeJS
[discord.io](https://github.com/izy521/node-discord) (similar to discord.js but lower level)

[discordie](https://github.com/qeled/discordie)

#### PHP
[DiscordPHP](https://github.com/teamreflex/DiscordPHP)

[Discord-PHP](https://github.com/Cleanse/discord-php)

#### Python
[discord.py](https://github.com/Rapptz/discord.py)

#### Ruby
[discordrb](https://github.com/meew0/discordrb)

---

### Links
**[Documentation](http://discordjs.readthedocs.org/en/latest/)**

**[GitHub](https://github.com/discord-js/discord.js)**

**[Wiki](https://github.com/discord-js/discord.js/wiki)**

**[Website](http://discord-js.github.io/)**

**[NPM](http://npmjs.com/package/discord.js)**

---

### Contact

If you have an issue or want to know if a feature exists, [read the documentation](http://discordjs.readthedocs.org/en/latest/) before contacting me about any issues! If it's badly/wrongly implemented, let me know!


If you would like to contact me, you can create an issue on the GitHub repo, e-mail me via the one available on my NPM profile.

<<<<<<< HEAD
Alternatively, you could just send a DM to **hydrabolt** in [**Discord API**](https://discord.gg/0SBTUU1wZTYd2XyW).
=======
## Links
* [Website](https://discord.js.org/) ([source](https://github.com/discordjs/website))
* [Documentation](https://discord.js.org/#/docs/main/master/general/welcome)
* [Guide](https://discordjs.guide/) ([source](https://github.com/discordjs/guide)) - this is still for stable  
  See also the WIP [Update Guide](https://github.com/discordjs/guide/blob/v12-changes/guide/additional-info/changes-in-v12.md) also including updated and removed items in the library.
* [Discord.js Discord server](https://discord.gg/bRCvFy9)
* [Discord API Discord server](https://discord.gg/discord-api)
* [GitHub](https://github.com/discordjs/discord.js)
* [NPM](https://www.npmjs.com/package/discord.js)
* [Related libraries](https://discordapi.com/unofficial/libs.html)

### Extensions
* [RPC](https://www.npmjs.com/package/discord-rpc) ([source](https://github.com/discordjs/RPC))

## Contributing
Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation](https://discord.js.org/#/docs).  
See [the contribution guide](https://github.com/discordjs/discord.js/blob/master/.github/CONTRIBUTING.md) if you'd like to submit a PR.

## Help
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [Discord.js Server](https://discord.gg/bRCvFy9).
>>>>>>> upstream/master
