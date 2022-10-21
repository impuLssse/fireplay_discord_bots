"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    /*
        Метод log нужен чтобы вызывать его и передать в него массив/переменную
    */
    log(data) {
        data.forEach((item) => {
            console.log(item);
        });
    }
}
exports.Logger = Logger;
