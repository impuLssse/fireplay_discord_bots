
//  подключение сервисов
import { cfg } from "../configs"
import { api, Server } from "./api"


//  создаем экземпляр дискорд сервера - в нем же и игрового
const classic = new Server()
    .registration(
        cfg.$classic.dsc_name, 
        cfg.$classic.dsc_token
    )

