
//  выгружаем наши сервисы
import { ApiMonster } from './services'
import { cfg } from './configs'


export function classic () {
    new ApiMonster (cfg.$classic.name, cfg.$classic.token.server, cfg.$classic.token.discord)
}

export function mirage () {
    new ApiMonster (cfg.$mirage.name, cfg.$mirage.token.server, cfg.$mirage.token.discord)
}

classic()
mirage()