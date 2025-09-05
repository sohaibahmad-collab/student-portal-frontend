import baseApiClass from "@src/api/baseApiClass";
import type { IStudententry } from "@src/types/studentEntry";
import { API_BASE_URL, API_URL_PATHS } from "@src/config"

class StudentApiClient extends baseApiClass {
  private static resourceUrl = API_BASE_URL + API_URL_PATHS.students;
  constructor() {
    super(StudentApiClient.resourceUrl)
  }

 
  public async getStudents(): Promise<IStudententry[]> {
    return this.get<IStudententry[]>("/");
  }

  public async getStudentById(id: number): Promise<IStudententry> {
    return this.get<IStudententry>(`/${id}`);
  }

  public async createStudent(data: Omit<IStudententry, "id">): Promise<IStudententry> {
    return this.post<IStudententry>("/", data);
  }

  public async updateStudent(id: string, data: Partial<IStudententry>): Promise<IStudententry> {
    return this.put<IStudententry>(`/${id}`, data);
  }

  public async deleteStudent(id: string): Promise<{ message: string }> {
    return this.delete<{ message: string }>(`/${id}`);
  }
}

export default new StudentApiClient();
