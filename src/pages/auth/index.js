import AuthRepository from "./repositories/rpc/AuthRepository";
import AuthService from "./services/authService";

let authService = new AuthService(new AuthRepository());

export {authService};
