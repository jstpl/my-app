import BasePermanentStorageRepository from "../../../../libs/permanentStorage/BasePermanentStorageRepository";

class TokenRepository extends BasePermanentStorageRepository {

    key() {
        return 'authToken';
    }
}

export default TokenRepository;
