import BasePermanentStorage from "../../../libs/BasePermanentStorage";

class TokenService extends BasePermanentStorage {

    key() {
        return 'authToken';
    }
}

export default TokenService;
