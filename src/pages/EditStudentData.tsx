import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@src/components/common/Input";
import Dropdown from "@src/components/common/Dropdown";
import Button from "@src/components/common/Button";
import { useStudents } from "@src/hooks/useStudents";
import type { IFormValues } from "@src/types/formValues";
import { studentFormSchema } from "@src/schema/studentFormSchema";
import { useParams} from "react-router-dom";


export default function EditStudentData() {
  const { updateStudent,items } = useStudents();

  const { id }=useParams<{ id: string }>()
  
 const student= items.find((s) => s._id === id);
   
 

  const subjects = ["English", "Math", "Science"];
  const grades = ["A+", "A-", "B+", "B-", "F"];

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(studentFormSchema),
   defaultValues: student
    ? {
        name: student.name,
        marks: student.marks,
        subject: student.subject,
        grade: student.grade,
      }
    : {
        name: "",
        marks: 0,
        subject: "",
        grade: "",
      },
  });

  const onSubmit = (data: IFormValues) => {
    updateStudent(id as string,data);
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-lg bg-white p-8">
        <h2 className="text-xl font-semibold text-center mb-8">
          Edit Student Data
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  label="Name"
                  placeholder="Enter name"
                  value={field.value}
                  onChange={(val) => field.onChange(val)}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="marks"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  label="Marks"
                  type="number"
                  placeholder="Enter Marks"
                  value={field.value?.toString() ?? ""}
                  onChange={(val) => field.onChange(Number(val))}
                />
                {errors.marks && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.marks.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="subject"
            control={control}
            render={({ field }) => (
              <div>
                <Dropdown
                  label="Subject"
                  value={field.value}
                  options={subjects}
                  placeholder="Select Subject"
                  onChange={field.onChange}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="grade"
            control={control}
            render={({ field }) => (
              <div>
                <Dropdown
                  label="Grade"
                  value={field.value}
                  options={grades}
                  placeholder="Select Grade"
                  onChange={field.onChange}
                />
                {errors.grade && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.grade.message}
                  </p>
                )}
              </div>
            )}
          />

          <div className="flex justify-between pt-4">
            <Button
              label="Cancel"
              variant="primary"
              type="button"
              onClick={() => reset()}
            />
            <Button label="Edit" variant="secondary" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}