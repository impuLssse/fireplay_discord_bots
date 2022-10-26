import discord, { Client, Emoji, GatewayIntentBits, ClientPresence, ActivityType } from 'discord.js'

import { RPC } from 'discord-rpc'
import { cfg } from '../../configs'
import { api, status } from './../api'
import { uti } from './uti'


// export const client = new Client({ intents: [GatewayIntentBits.Guilds] })


// export async function botRPC (token: Array <string>) {

    
//     client.on('ready', async () => {
//         try {
//             // const set_avatar = client.user?.setAvatar(cfg.avatar_url)

//             client.user?.setPresence({
//                 activities: 
//                 [{ 
//                     name: `${(await status.players())}/${(await status.playersmax())}`, 
//                     type: ActivityType.Playing,
//                 }],
//                 status: 'online'
//             })

//         } catch (err) {
//             console.log(err)
//         }
//     })
// }

// export function BotMachine () {
//     setInterval(() => {
//         botRPC(cfg.bots)
//     }, 3000)
// }

// BotMachine()