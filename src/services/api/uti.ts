import { api } from '.'


class UtilsAPI {

    public onlineValidation (onlineResponse: number): string {
        
        let onlineResult: string = ""

        if (onlineResponse == 0) {
            onlineResult = "offline"
        } 
        
        else if (onlineResponse == 1) {
            onlineResult = "online"
        }

        else if (onlineResponse == 2) {
            onlineResult = "starting or not available"
        }

        return onlineResult
    }
}

export const uti = new UtilsAPI()