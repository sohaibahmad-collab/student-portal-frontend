import baseApiClass from "@src/api/baseApiClass";
import {  API_URL_PATHS } from "@src/config";
import type { IUser } from "@src/types/user";
// export interface IAuthUser {
//   token: string;
//   access_token: string;

// }

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
  private static resourcePath = API_URL_PATHS.auth;


  public async login(data: ILoginPayload): Promise<IUser> {
    return this.post<IUser>(
      `${AuthApiClient.resourcePath}/login`,
      data,
      false 
    );
  }

  public async register(data: IRegisterPayload): Promise<IUser> {
    return this.post<IUser>(
      `${AuthApiClient.resourcePath}/register`,
      data,
      false 
    );
  }
}

export default new AuthApiClient();
