# Note
Hello, explorer! I'm not sure how you found this particular repo, but it is old. VERY old. I made this back when I first started programming, a time when I... really shouldn't have been on discord, like, at all. I was unreasonably into ARGs for some reason. If you want to mess with it, take most of it as an example of what NOT to do.

Re-archiving this now...
# ARGBot
This is a Discord bot I made using Discord.js, I made it for an ARG I was making but I honestly have no idea how to code. So its mostly just stuff from the official guide for Discord.js. I decided to make it open source so you can use the code from the bot to make some cool stuff, because I AM actually adding stuff to it.
# Setting Up
First, go to [Node.js's official site](https://nodejs.org/) to download Node.js, then read the [Installations & Preparations](https://discordjs.guide/preparations/) part of the guide. DO NOT run the install command for Discord.js, use "npm install discord.js @discordjs/opus" instead. This is so it can support joining voice channels and playing music.
## Installing Modules
To get the needed modules for Node.js (Assuming you have already installed Discord.js) Run these commands in the command terminal: (I use windows, so if you are a Linux or Apple user this may not work for you.)
1. "npm install eslint"
2. "npm install ffmpeg-static"
3. "npm install ytdl-core"

You can also get PM2, it is not required but it makes things WAY easier. To get it, just follow the instructions [here](https://discordjs.guide/improving-dev-environment/pm2.html).

You also need to go [here](https://discordjs.guide/creating-your-bot/configuration-files.html "here") for a guide on how to set up a config.json file. This is required as there are several lines of code that use this file.

Now just run "Node ." to start the bot, or if you have PM2 installed, run "pm2 start index.js --name "ARGBot (Indev)" --watch", then open a new command prompt and run "pm2 monit"
# Notes:
So about the ARG...
![Quote from my discord.](images/quote1.png)
