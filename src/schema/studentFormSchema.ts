
import * as yup from "yup";

export const studentFormSchema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z ]+$/, "Name should contain only alphabets")
    .required("Name is required"),
  marks: yup
    .number()
    .typeError("Marks must be a number")
    .min(0, "Marks must be at least 0")
    .max(100, "Marks cannot exceed 100")
    .required("Marks are required"),
  subject: yup.string().required("Subject is required"),
  grade: yup.string().required("Grade is required"),
});