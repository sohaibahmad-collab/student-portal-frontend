import baseApiClass from "@src/api/baseApiClass";
import type { IStudententry } from "@src/types/studentEntry";
import { API_BASE_URL, API_URL_PATHS } from "@src/config";

class StudentApiClient extends baseApiClass {
  private static resourceUrl = API_BASE_URL + API_URL_PATHS.students;
  
  public async getStudents(): Promise<IStudententry[]> {
    return this.get<IStudententry[]>(`${StudentApiClient.resourceUrl}`);
  }

  public async getStudentById(id: number): Promise<IStudententry> {
    return this.get<IStudententry>(`${StudentApiClient.resourceUrl}/${id}`);
  }

  public async createStudent(data: Omit<IStudententry, "id">): Promise<IStudententry> {
    return this.post<IStudententry>(`${StudentApiClient.resourceUrl}`, data);
  }

  public async updateStudent(id: string, data: Partial<IStudententry>): Promise<IStudententry> {
    return this.put<IStudententry>(`${StudentApiClient.resourceUrl}/${id}`, data);
  }

  public async deleteStudent(id: string): Promise<{ message: string }> {
    return this.delete<{ message: string }>(`${StudentApiClient.resourceUrl}/${id}`);
  }
}

export default new StudentApiClient();
