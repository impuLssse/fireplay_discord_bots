"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetStatus = exports.api = void 0;
const myarena_ru_nodejs_api_1 = require("@iwonz/myarena-ru-nodejs-api");
const services_1 = require("./services");
//  токены серверов
const server_2 = '00dcf0c217e27cbaf4cd0c219049a09d';
exports.api = new myarena_ru_nodejs_api_1.Api(server_2);
//  основная функция, тут мы получаем статус
function ApiGetStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            /*
                Получаем JSON посредством GET запроса. Поочередно вытаскиваем нужные нам поля из JSON
            */
            const status_online = (yield exports.api.getStatus())
                .online;
            const status_hostname = (yield exports.api.getStatus())
                .data.s.name;
            const status_address = (yield exports.api.getStatus())
                .server_address;
            const status_location = (yield exports.api.getStatus())
                .server_location;
            const status_players = (yield exports.api.getStatus())
                .data.s.players;
            const status_playersmax = (yield exports.api.getStatus())
                .data.s.playersmax;
            const status_map = (yield exports.api.getStatus())
                .data.s.map;
            const status_password = (yield exports.api.getStatus())
                .data.s.password;
            const data = [
                status_online,
                status_hostname,
                status_address,
                status_location,
                status_players,
                status_playersmax,
                status_map,
                status_password
            ];
            const logger = new services_1.Logger();
            logger.log(data);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.ApiGetStatus = ApiGetStatus;
ApiGetStatus();
