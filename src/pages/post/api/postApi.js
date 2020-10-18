import axios from 'axios';
import collection from "../data/collection";
// import store from "../../../app/store";
// import {getUsersSuccess} from "../../user/actions/user-actions";

export default {
    all: function () {
        axios.get('http://localhost:3000/api/post.json').then(function (response) {
            console.log(response);
        });
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
