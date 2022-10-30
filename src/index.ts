
//  выгружаем наши сервисы
import { createPair } from './services'
import * as cfg from 'dotenv'
cfg.config()

require('dotenv-vault-core').config()

createPair(process.env.NAMEBOT, process.env.SERVER_TOKEN, process.env.DISCORD_TOKEN)