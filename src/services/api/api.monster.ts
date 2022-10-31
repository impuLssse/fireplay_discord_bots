import discord_token, { Client, GatewayIntentBits, ActivityType, ButtonStyle, CommandInteractionOptionResolver } from 'discord.js'
import { Api } from '@iwonz/myarena-ru-nodejs-api'
import colors from 'colors'


export class ApiMonster {
    protected name: string
    protected server_token: string
    protected discord_token: string
    protected server!: Api
    protected client: Client = new Client({ intents: [ GatewayIntentBits.Guilds ] })

    
    constructor (name: string, server_token: string, discord_token: string) {
        this.name = name
        this.server_token = server_token
        this.discord_token = discord_token

        this.regApiServer()
        this.regApiDiscord()
    }

    protected regApiServer () {
        const server = new Api (this.server_token)
        this.server = server
        return server
    }

    protected regApiDiscord (): void | undefined {
        try {
            this.client.once('ready', c => {
                console.log(colors.bold.red(`↑`), colors.red(`|`), colors.red(`${this.name} ➤ `), colors.white(`start running a ${c.user.tag}`))
            })
            
            this.client.login(this.discord_token)
            this.client.user?.setStatus('online')

            this.update()
        } catch (err) {
            console.log(err)
        }
    }

    protected async presence (): Promise <void | undefined> {
        const players = (await this.server.getStatus()).data.s.players
        const playersmax = (await this.server.getStatus()).data.s.playersmax
        const map = (await this.server.getStatus()).data.s.map.toUpperCase()

        try {
            this.client.user?.setPresence({
                activities: [{
                    name: `${ players }/${ playersmax }
                    on ${ map }`,
                    type: ActivityType.Playing,
                }]
            })


        } catch (err) {
            console.log(colors.red(`${this.name} ➤ presence updating failed`))
            console.log(err)
        }

        console.log(colors.bold.green(`⭯`), colors.green(`|`), colors.green(`${this.name} ➤ `), colors.white(`query data success updated`))
    }
    
    protected update (): void {
        //  вызываем метод в котором лежат запросы
        setInterval( () => this.presence(), 7000)
    }
}

