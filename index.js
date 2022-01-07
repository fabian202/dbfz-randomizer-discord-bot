require('dotenv').config() //initialize dotenv

// const client = new Discord.Client(); //create new client
const { Client, Intents } = require('discord.js')
const _ = require('lodash')
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
    const result = []
    //msg.channel.send('![Discord Logo](https://discord.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png =200x100)')
    for (let index = 0; index < 6; index++) {
      const fighter = shuffled[index]
      result.push(`**${_.startCase(fighter)}**`)
      msg.channel.send(
        `https://dba.bn-ent.net/character/images/select_${fighter}_off.png`
      )
      if (index === 2) {
        result.push('*`VS`*')
        msg.channel.send('`VS`')
      }
    }

    msg.channel.send(`> :boom: ${result.join(', ')} :boom:`)
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
