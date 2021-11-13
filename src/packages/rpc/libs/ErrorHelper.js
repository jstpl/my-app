
export default class ErrorHelper {

    unprocessableEntityErrorToString(error) {
        let message = '';
        let errorCollection = error.getErrors();
        if(errorCollection.length > 0) {
            for (let k in errorCollection) {
                if(errorCollection.hasOwnProperty(k)) {
                    let item = errorCollection[k];
                    message += " \n " + item.message;
                    console.log(item);
                }
            }
        } else {
            message = error.message;
        }
        return message;
    }
}
