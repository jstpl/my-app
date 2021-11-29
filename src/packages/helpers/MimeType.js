
class MimeType {

    getTypeByExt(ext) {
        let mimes = {
            'gif': 'image/gif',
            'jpg': 'image/jpeg',
            'png': 'image/png',
            'svg': 'image/svg+xml',
        };
        return mimes[ext];
    }
}

module.exports = MimeType;
