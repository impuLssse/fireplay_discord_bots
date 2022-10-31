import { ApiMonster } from './api.monster'
// import { server_api_tokens } from '../..'
import { Api } from '@iwonz/myarena-ru-nodejs-api'


// export class ApiStatistic {
//     protected tokens: string[]
//     protected allPlayers!: number
//     protected maxPlayers!: number

//     constructor (token: any) {
//         this.tokens = tokens

//         this.getFullStat()
//     }

//     protected async getFullStat (): Promise <void> {
//         const tokens     = this.tokens
//         const players    = this.allPlayers
//         const playersmax = this.maxPlayers

//         this.tokens.forEach(async item => {
//             let api = new Api (item)
    
//             let players = (await api.getStatus()).data.s.players
//             this.allPlayers += players
    
//             let playersmax = (await api.getStatus()).data.s.playersmax
//             this.maxPlayers += playersmax
    
//             console.log(this.allPlayers)
//             console.log(this.maxPlayers)
//         })
//     }
// }

// const stat = new ApiStatistic(server_api_tokens)