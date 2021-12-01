import AuthRepository from "./domain/repositories/rpc/AuthRepository";
import AuthService from "./domain/services/AuthService";
import TokenRepository from "./domain/repositories/storage/TokenRepository";

let authService = new AuthService(new AuthRepository(), new TokenRepository());

export {authService};
