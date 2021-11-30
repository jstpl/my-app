import axios from 'axios';
import configManager from "../../configManager/configManager";
// import eventEmitter from "../../../app/singletons/eventEmitter";
// import authEventEnum from "../../../pages/auth/enums/authEventEnum";
// import rpcEventEnum from "../enums/rpcEventEnum";

export default class Transport {

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
                        //resolve(response.data);
                    } else {
                        // eventEmitter.emit(rpcEventEnum.CLIENT_ERROR, "Transport error. Parse error.");
                        throw new Error("Transport error. Parse error.");
                        // reject("Transport error. Parse error.");
                    }
                } else {
                    // eventEmitter.emit(rpcEventEnum.CLIENT_ERROR, "Transport error. Content type invalid.");
                    throw new Error("Transport error. Content type invalid.");
                    //reject("Transport error. Content type invalid.");
                }
            })
            .catch(function () {
                // eventEmitter.emit(rpcEventEnum.CLIENT_ERROR, "Transport error.");
                throw new Error("Transport error.");
               // reject("Transport error.");
            });
        // return this.createPromise(axiosPromise);
    }

    /*createPromise(axiosPromise) {
        return new Promise(function (resolve, reject) {
            axiosPromise
                .then(function (response) {
                    if(response.headers['content-type'] === 'application/json') {
                        if(typeof response.data === 'object') {
                            resolve(response.data);
                        } else {
                            reject("Transport error. Parse error.");
                        }
                    } else {
                        reject("Transport error. Content type invalid.");
                    }
                })
                .catch(function (error) {
                    reject("Transport error.");
                });
        });
    }*/
}
