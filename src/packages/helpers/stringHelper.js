class StringHelper {
    align(value, length) {
        value = value.toString();
        if (value.length < length) {
            value = '0' + value;
        }
        return value;
    }
}

export default new StringHelper();
