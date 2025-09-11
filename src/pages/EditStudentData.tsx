import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@src/components/common/Input";
import Dropdown from "@src/components/common/Dropdown";
import Button from "@src/components/common/Button";
import { useStudents } from "@src/hooks/useStudents";
import type { IFormValues } from "@src/types/formValues";
import { studentFormSchema } from "@src/schema/studentFormSchema";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { subjects, grades } from "@src/constants/academic";
import { useEffect } from "react";

export default function EditStudentData() {
  const navigate = useNavigate();
  const { updateStudent, fetchStudents,items } = useStudents();

  const { id } = useParams<{ id: string }>();

  const student = items.find((s) => s._id === id);

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    if (student) {
      reset({
        name: student.name,
        marks: student.marks,
        subject: student.subject,
        grade: student.grade,
      });
    }
  }, [items]);

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
    updateStudent(id as string, data);
    reset();
    navigate("/portal");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-lg bg-white p-8">
        <h2 className="font-poppins font-medium text-2xl leading-[100%] tracking-normal text-center mb-8 text-black">
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
                  error={errors.name?.message}
                />
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
                  error={errors.marks?.message}
                />
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
                  error={errors.subject?.message}
                />
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
                  error={errors.grade?.message}
                />
              </div>
            )}
          />

          <div className="flex justify-between pt-4">
            <Button
              label="Cancel"
              variant="dirtygreen"
              type="button"
              onClick={() => navigate("/portal")}
            />
            <Button label="Save" variant="primary" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
