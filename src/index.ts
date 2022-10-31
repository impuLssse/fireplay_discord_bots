
//  выгружаем функцию создания пары
import { createPair } from './services'

import dotenv from 'dotenv'
dotenv.config({ path: './.env.production' })


const mirage                = process.env.MIRAGE
const mirage_server_api     = process.env.MIRAGE_SERVER_API
const mirage_discord_api    = process.env.MIRAGE_DISCORD_API

const classic               = process.env.CLASSIC
const classic_server_api    = process.env.CLASSIC_SERVER_API
const classic_discord_api   = process.env.CLASSIC_DISCORD_API

const awp                   = process.env.AWP
const awp_server_api        = process.env.AWP_SERVER_API
const awp_discord_api       = process.env.AWP_DISCORD_API

const statistic_discord_api = process.env.STATISTIC_DISCORD_API


createPair(mirage,  mirage_server_api, mirage_discord_api)
createPair(classic, classic_server_api, classic_discord_api)
createPair(awp, awp_server_api, awp_discord_api)

