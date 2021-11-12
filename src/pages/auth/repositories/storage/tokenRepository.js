import BasePermanentStorage from "../../../../libs/BasePermanentStorage";

class TokenRepository extends BasePermanentStorage {

    key() {
        return 'authToken';
    }
}

export default TokenRepository;
