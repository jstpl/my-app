import AuthRepository from "./repositories/rpc/AuthRepository";
import AuthService from "./services/AuthService";

let authService = new AuthService(new AuthRepository());

export {authService};
