import BasePermanentStorageRepository from "../../../../libs/BasePermanentStorageRepository";

class TokenRepository extends BasePermanentStorageRepository {

    key() {
        return 'authToken';
    }
}

export default TokenRepository;
