import baseApiClass from "@src/api/baseApiClass";
import { API_BASE_URL, API_URL_PATHS } from "@src/config";

export interface IAuthUser {
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


  public async login(data: ILoginPayload): Promise<IAuthUser> {
    return this.post<IAuthUser>(
      `${AuthApiClient.resourceUrl}/login`,
      data,
      false // no auth required
    );
  }

  public async register(data: IRegisterPayload): Promise<IAuthUser> {
    return this.post<IAuthUser>(
      `${AuthApiClient.resourceUrl}/register`,
      data,
      false 
    );
  }
}

export default new AuthApiClient();
