import { Util } from "./Util";
import axios from "axios";

export default class APIManager {
        
    constructor() {

    }

    static async AuthenticateUser(username, password) {
        try {
            const apiUrl = Util.ConstantHelper.service_url
                + Util.ConstantHelper.api_login
                + "?username=" + username
                + "&password=" + password;
            let returnVal = await axios.get(apiUrl);
            return returnVal.data;
        } catch (error) {
            return false;
        }
    }
}