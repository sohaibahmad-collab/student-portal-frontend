import axios, { type AxiosInstance, type AxiosResponse } from "axios";

export default class baseApiClass {
  protected api: AxiosInstance;

  constructor(resourceurl: string) {
    this.api = axios.create({
      baseURL: resourceurl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  private withAuth() {
    const token = localStorage.getItem("authToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }


  public async get<T>(url: string,auth:boolean=true): Promise<T> {
    const response: AxiosResponse<T> = await this.api.get(url,{
      headers: auth ? this.withAuth() : {},
    });
    return response.data;
  }

  public async post<T>(url: string, data: any,auth:boolean=true): Promise<T> {
    const response: AxiosResponse<T> = await this.api.post(url, data,{
      headers: auth ? this.withAuth() : {},
    });
    return response.data;
  }

  public async put<T>(url: string, data: any,auth:boolean=true): Promise<T> {
    const response: AxiosResponse<T> = await this.api.put(url, data,{
      headers: auth ? this.withAuth() : {},
    });
    return response.data;
  }

  public async patch<T>(url: string, data: any,auth:boolean=true): Promise<T> {
    const response: AxiosResponse<T> = await this.api.patch(url, data,{
      headers: auth ? this.withAuth() : {},
    });
    return response.data;
  }

  public async delete<T>(url: string,auth:boolean=true): Promise<T> {
    const response: AxiosResponse<T> = await this.api.delete(url,{
      headers: auth ? this.withAuth() : {},
    });
    return response.data;
  }
}
