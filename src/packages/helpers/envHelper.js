let envHelper = {
    isDev: function() {
        return window.location.port === '3000';
    }
};

export default envHelper;
