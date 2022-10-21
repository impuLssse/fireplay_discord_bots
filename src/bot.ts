import { Api } from '@iwonz/myarena-ru-nodejs-api'
import axios from 'axios'

import { Logger } from './services'


//  токены серверов
const server_2: string = '00dcf0c217e27cbaf4cd0c219049a09d'


export const api = new Api(server_2)



//  основная функция, тут мы получаем статус

export async function ApiGetStatus () {
    try {

        /*
            Получаем JSON посредством GET запроса. Поочередно вытаскиваем нужные нам поля из JSON
        */

        const status_online: number = (await api.getStatus())
            .online
        
        const status_hostname: string = (await api.getStatus())
            .data.s.name
        
        const status_address: number | string = (await api.getStatus())
            .server_address

        const status_location: string = (await api.getStatus())
            .server_location

        const status_players: number = (await api.getStatus())
            .data.s.players

        const status_playersmax: number = (await api.getStatus())
            .data.s.playersmax

        const status_map: string = (await api.getStatus())
            .data.s.map

        const status_password: number | string = (await api.getStatus())
            .data.s.password

          
        const data: Array<string | number> = [
            status_online, 
            status_hostname, 
            status_address, 
            status_location,
            status_players,
            status_playersmax,
            status_map,
            status_password
        ]


        const logger = new Logger()
        
        logger.info(data)

        

    } catch (err) {
        console.log(err)
    }
}

ApiGetStatus()