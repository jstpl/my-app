import axios from "axios";
import configManager from "../../../configManager/configManager";

export default class TransportRepository {

    send(body) {
        let options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        let axiosPromise = axios.post(configManager.get('rpcUrl'), body, options);
        return axiosPromise
            .then(function (response) {
                if(response.headers['content-type'] === 'application/json') {
                    if(typeof response.data === 'object') {
                        return response.data;
                    } else {
                        throw new Error("Transport error. Parse error.");
                    }
                } else {
                    throw new Error("Transport error. Content type invalid.");
                }
            })
            .catch(function () {
                throw new Error("Transport error.");
            });
    }
}