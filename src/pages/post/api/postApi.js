import collection from "../data/collection";

let Api = {
    all: function () {
        return collection;
    },
    oneById: function (id) {
        for (let k in collection) {
            let entity = collection[k];
            if(entity.id == id) {
                return entity;
            }
        }
    }
};

export default Api;
