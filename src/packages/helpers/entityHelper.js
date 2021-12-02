
class EntityHelper {

    setValues(entity, array) {
        Object.assign(entity, array);
    }

    getValues(entity) {
        let attributes = this.getAttributes(entity);
        let array = {};
        for(let i in attributes) {
            let attributeName = attributes[i];
            array[attributeName] = entity[attributeName];
        }
        return array;
    }

    getAttributes(entity) {
        let attributes = [];
        let attrList = Object.getOwnPropertyNames(entity);
        for (let i in attrList) {
            let attrName = attrList[i];
            //console.log(attrName);
            var re = /__private_\d+__(.+)/g;
            let match = re.exec(attrName);
            if(match.length == 2) {
                attributes.push(match[1]);

            }
        }
        return attributes;
    }
}

export default new EntityHelper();