
//  выгружаем наши сервисы
import { createPair } from './services'

import dotenv from 'dotenv'
dotenv.config({ path: './.env.production' })


createPair(process.env.MIRAGE, process.env.MIRAGE_SERVER_API, process.env.MIRAGE_DISCORD_API)
createPair(process.env.CLASSIC, process.env.CLASSIC_SERVER_API, process.env.CLASSIC_DISCORD_API)
createPair(process.env.AWP, process.env.AWP_SERVER_API, process.env.AWP_DISCORD_API)
