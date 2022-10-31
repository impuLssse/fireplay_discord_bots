import { ApiMonster } from './api.monster'

export function createPair (name, server, discord): ApiMonster {
    const pair = new ApiMonster (name, server, discord)
    return pair
}