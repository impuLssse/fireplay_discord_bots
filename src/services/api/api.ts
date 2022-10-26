import { Api, ApiStatusResponseOnline } from '@iwonz/myarena-ru-nodejs-api'

import discord, { Client, Emoji, GatewayIntentBits, ClientPresence, ActivityType } from 'discord.js'

import { cfg } from './../../configs'
import { log } from '../log'
import { uti } from './uti'
import * as servers from './server'


export const api    = new Api(cfg.$classic.srv_token)
export const client = new Client({ intents: [GatewayIntentBits.Guilds] })


class Status {

    public async online (): Promise <string> {
        const onlineResponse: number = (await api.getStatus()).online
        const onlineResult: string = uti.onlineValidation(onlineResponse)

        return onlineResult
    }

    public async hostname (): Promise <string> {
        const hostname: string = (await api.getStatus()).data.s.name
        
        return hostname
    }

    public async address (): Promise <string> {
        const address: string = (await api.getStatus()).server_address

        return address
    }

    public async location (): Promise <string> {
        const location: string = (await api.getStatus()).server_location

        return location
    }

    public async players (): Promise <number> {
        const players: number = (await api.getStatus()).data.s.players

        return players
    }

    public async playersmax (): Promise <number | undefined> {
        //  опасный участок, иногда багается и показывает 0
        
        try {
            const playersmax: number = (await api.getStatus()).data.s.playersmax

            return playersmax
        } catch (err) {
            console.log(err)
        }
    }

    public async map (): Promise <string> {
        const map = (await api.getStatus()).data.s.map

        return map
    }

}

export const status = new Status()