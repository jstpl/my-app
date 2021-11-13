import AuthRepository from "./repositories/rpc/AuthRepository";
import AuthService from "./services/AuthService";
import TokenRepository from "./repositories/storage/TokenRepository";

let authService = new AuthService(new AuthRepository(), new TokenRepository());

export {authService};
