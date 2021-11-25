import urlHelper from "./urlHelper";

let envHelper = {
    isDev: function() {
        return window.location.port === '3000';

        /*let url = urlHelper.getOrigin();
        return url === 'http://localhost:3000';*/
    }
};

export default envHelper;
