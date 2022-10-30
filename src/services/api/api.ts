import discord_token, { Client, GatewayIntentBits, ActivityType, ButtonStyle } from 'discord.js'
import { Api } from '@iwonz/myarena-ru-nodejs-api'
import colors from 'colors'


export class ApiMonster {
    protected name: string
    protected server!: Api
    protected server_token: string
    protected discord_token: string
    protected client: Client = new Client({ intents: [ GatewayIntentBits.Guilds ] })

    constructor (name: string, server_token: string, discord_token: string) {
        this.name = name
        this.server_token = server_token
        this.discord_token = discord_token

        this.regApiDiscord()
    }

    protected regApiServer () {
        const server = new Api (this.server_token)
        this.server = server
        return server
    }

    protected regApiDiscord (): void | undefined {
        try {
            this.client.login(this.discord_token)
            this.client.user?.setStatus('online')

            this.server = this.regApiServer()
            this.update()
        } catch (err) {
            console.log(err)
        }
    }
    
    protected async presence (): Promise <void> {
        
        await this.client.user?.setPresence({
            activities: [{
                name: `${ (await this.server.getStatus()).data.s.players }/${ (await this.server.getStatus()).data.s.playersmax } 
                on ${ (await this.server.getStatus()).data.s.map }`, 
                type: ActivityType.Playing,
            }]
        })
            
        console.log(colors.magenta(`[${this.name}] data success updated !`))
    }
    
    protected update (): void {
        //  вызываем метод в котором лежат запросы
        setInterval( () => this.presence(), 6000)
    }
}