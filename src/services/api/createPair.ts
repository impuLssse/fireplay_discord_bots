import { ApiMonster } from './api'

export function createPair (name: string, server: string, discord: string): ApiMonster {
    const pair = new ApiMonster (name, server, discord)
    return pair
}