import discord, { Client, GatewayIntentBits, ActivityType } from 'discord.js'
import colors from 'colors'

import { client, status } from './api'
import { cfg } from '../../configs'


export class Server {
    protected username: string = ""
    protected token: string = ""

    // constructor (username: string, token: string) {
    //     this.username   = username
    //     this.token      = token

    //     this.registration(username, token)
    // }


    public registration (username: string, token: string): any {
        this.username   = username
        this.token      = token
        
        try {
            client.login(token)
            client.user?.setStatus('online')

            this.update()
        } catch (err) {
            console.log(err)
        }
    }

    protected async presence (): Promise <void | undefined> {
        try {
            await client.user?.setPresence({
                activities: [{ 
                    name: `${(await status.players())}/${(await status.playersmax())}`, 
                    type: ActivityType.Playing,
                }]
            })

            console.log(colors.magenta(`[${this.username}] data success updated !`))

        } catch (err) {
            console.log(err)
        }
    }

    protected update (): void {
        //  вызываем метод в котором лежат запросы

        setInterval( () => this.presence(), 2000)
    }
}
