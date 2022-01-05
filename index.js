require('dotenv').config() //initialize dotenv

// const client = new Discord.Client(); //create new client
const { Client, Intents } = require('discord.js')
// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

const characters = [
  'goku-SS',
  'vegeta-SS',
  'trunks',
  'gohan-y',
  'freeza',
  'majinBoo-z',
  'cell',
  'kuririn',
  'piccolo',
  'no16',
  'no18',
  'gokuSsgss',
  'vegetaSsgss',
  'yamcha',
  'tenshinhan',
  'nappa',
  'ginyu',
  'gotenks',
  'gohan',
  'majinBoo',
  'beerus',
  'hit',
  'gokubl',
  'no21',
  'barduck',
  'broly',
  'zamasu',
  'vegetto',
  'goku',
  'vegeta',
  'cooler',
  'no17',
  'jiren',
  'videl',
  'goku-gt',
  'janemba',
  'gogeta',
  'broly-dbs',
  'kefla',
  'goku-ui',
  'masterroshi',
  'superbaby2',
  'gogetaSS4',
]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', (msg) => {
  if (msg.content === '!team') {
    const shuffled = getShuffledArr(characters)
    for (let index = 0; index < 6; index++) {
      msg.channel.send(`https://dba.bn-ent.net/character/images/select_${shuffled[index]}_off.png`)
      if (index === 2) msg.channel.send('VS')
    }
  }
})

const getShuffledArr = (arr) => {
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
  }
  return newArr
}

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN) //login bot using token
