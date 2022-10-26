

class Logger {

    /*
        Метод log нужен чтобы вызывать его и передать в него массив/переменную
    */

    public info (data: Array<string | number>) {   
        data.forEach( (item) => {
            console.log(item)
        })
    }
}

export const log = new Logger()

