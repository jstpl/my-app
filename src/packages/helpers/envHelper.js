class EnvHelper {

    isDev() {
        return window.location.port === '3000';
    }
}

export default new EnvHelper();
