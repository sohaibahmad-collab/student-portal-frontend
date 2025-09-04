import baseApiClass from "@src/api/baseApiClass";

interface Student {
  id: number;
  name: string;
  marks: number;
  subject: string;
  grade: string;
  date: string;
  time: string;
}

class StudentApiClient extends baseApiClass {
  constructor() {
    super("http://localhost:5000/api/students"); 
  }

 
  public async getStudents(): Promise<Student[]> {
    return this.get<Student[]>("/");
  }

  public async getStudentById(id: number): Promise<Student> {
    return this.get<Student>(`/${id}`);
  }

  public async createStudent(data: Omit<Student, "id">): Promise<Student> {
    return this.post<Student>("/", data);
  }

  public async updateStudent(id: number, data: Partial<Student>): Promise<Student> {
    return this.put<Student>(`/${id}`, data);
  }

  public async deleteStudent(id: number): Promise<{ message: string }> {
    return this.delete<{ message: string }>(`/${id}`);
  }
}

export default new StudentApiClient();
