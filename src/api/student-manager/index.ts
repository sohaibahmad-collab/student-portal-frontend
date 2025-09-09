import baseApiClass from "@src/api/baseApiClass";
import type { IStudententry } from "@src/types/studentEntry";
import { API_URL_PATHS } from "@src/config";

class StudentApiClient extends baseApiClass {
  private static resourcePath = API_URL_PATHS.students;
  
  public async getStudents(): Promise<IStudententry[]> {
    return this.get<IStudententry[]>(`${StudentApiClient.resourcePath}`);
  }

  public async getStudentById(id: number): Promise<IStudententry> {
    return this.get<IStudententry>(`${StudentApiClient.resourcePath}/${id}`);
  }

  public async createStudent(data: Omit<IStudententry, "id">): Promise<IStudententry> {
    return this.post<IStudententry>(`${StudentApiClient.resourcePath}`, data);
  }

  public async updateStudent(id: string, data: Partial<IStudententry>): Promise<IStudententry> {
    return this.put<IStudententry>(`${StudentApiClient.resourcePath}/${id}`, data);
  }

  public async deleteStudent(id: string): Promise<{ message: string }> {
    return this.delete<{ message: string }>(`${StudentApiClient.resourcePath}/${id}`);
  }
}

export default new StudentApiClient();
