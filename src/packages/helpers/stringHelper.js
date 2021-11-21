
export default {
    align: function (value, length) {
        value = value.toString();
        if (value.length < length) {
            value = '0' + value;
        }
        return value;
    },
}
