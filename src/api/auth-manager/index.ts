import baseApiClass from "@src/api/baseApiClass";
import { API_BASE_URL, API_URL_PATHS } from "@src/config";

export interface IAuthUser {
  id: string;
  name: string;
  email: string;
  token: string; 
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  name: string;
  email: string;
  password: string;
}

class AuthApiClient extends baseApiClass {
  private static resourceUrl = API_BASE_URL + API_URL_PATHS.auth;

  constructor() {
    super(AuthApiClient.resourceUrl);
  }

 
  public async login(data: ILoginPayload): Promise<IAuthUser> {
    return this.post<IAuthUser>("/login", data,false);
  }

  
  public async register(data: IRegisterPayload): Promise<IAuthUser> {
    return this.post<IAuthUser>("/register", data,false);
  }
 
  public async logout(): Promise<{ message: string }> {
    return this.post<{ message: string }>("/logout", {},false);
  }
}

export default new AuthApiClient();
