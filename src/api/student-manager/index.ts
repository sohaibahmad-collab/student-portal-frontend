import baseApiClass from "@src/api/baseApiClass";
import type { IStudententry } from "@src/types/studentEntry";


class StudentApiClient extends baseApiClass {
  constructor() {
    super("http://localhost:5000/api/students"); 
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

  public async updateStudent(id: number, data: Partial<IStudententry>): Promise<IStudententry> {
    return this.put<IStudententry>(`/${id}`, data);
  }

  public async deleteStudent(id: number): Promise<{ message: string }> {
    return this.delete<{ message: string }>(`/${id}`);
  }
}

export default new StudentApiClient();
