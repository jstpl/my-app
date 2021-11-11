import _ from "lodash";

let responseEncoder = {
    encode: function () {

    },
    decode: function (data) {
        let responseEntity = {};
        if (!_.isEmpty(data.result)) {
            let result = data.result;
            if (!_.isEmpty(result.body)) {
                responseEntity.body = result.body;
            }
            if (!_.isEmpty(result.meta)) {
                responseEntity.meta = result.meta;
            }
        }
        if (!_.isEmpty(data.error)) {
            responseEntity.error = data.error;
        }
        responseEntity.id = !_.isEmpty(responseEntity.id) ? responseEntity.id : +new Date();
        return responseEntity;
    },
};

export default responseEncoder;
