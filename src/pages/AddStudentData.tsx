import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@src/components/common/Input";
import Dropdown from "@src/components/common/Dropdown";
import Button from "@src/components/common/Button";
import { useStudents } from "@src/hooks/useStudents";
import type { IFormValues } from "@src/types/formValues";
import { studentFormSchema } from "@src/schema/studentFormSchema";
import { useNavigate } from "react-router-dom";
import { subjects, grades } from "@src/constants/academic";

export default function AddStudentData() {
  const { addStudent } = useStudents();
  const navigate = useNavigate();

  
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(studentFormSchema),
    defaultValues: {
      name: "",
      marks: 0,
      subject: "",
      grade: "",
    },
  });

  const onSubmit = (data: IFormValues) => {
    addStudent(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-lg bg-white p-8">
        <h2 className="text-xl font-semibold text-center mb-8">
          Add Student Data
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
              variant="primary"
              type="button"
              onClick={() => navigate("/portal")}
            />
            <Button label="Add" variant="secondary" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
