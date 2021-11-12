import BasePermanentStorageRepository from "../../../../packages/permanentStorage/BasePermanentStorageRepository";

class TokenRepository extends BasePermanentStorageRepository {

    key() {
        return 'authToken';
    }
}

export default TokenRepository;
