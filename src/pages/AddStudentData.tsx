import { useState } from "react";
import Button from "@src/components/common/Button";
import Dropdown from "@src/components/common/Dropdown";
import Input from "@src/components/common/Input";

export default function AddStudentData() {
  const [form, setForm] = useState({
    name: "",
    marks: "",
    subject: "",
    grade: "",
  });

  const subjects = ["English", "Math", "Science"];
  const grades = ["A+", "B+", "F"];

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-lg bg-white p-8">
        <h2 className="text-xl font-semibold text-center mb-8">
          Add Student Data
        </h2>

        <form className="space-y-6">
          <Input
            label="Name"
            placeholder="Enter name"
            value={form.name}
            onChange={(val) => setForm({ ...form, name: val })}
          />

          <Input
            label="Marks"
            type="number"
            placeholder="Enter Marks"
            value={form.marks}
            onChange={(val) => setForm({ ...form, marks: val })}
          />

          <Dropdown
            label="Subject"
            value={form.subject}
            options={subjects}
            placeholder="Select Subject"
            onChange={(val) => setForm({ ...form, subject: val })}
          />

          <Dropdown
            label="Grade"
            value={form.grade}
            options={grades}
            placeholder="Select Grade"
            onChange={(val) => setForm({ ...form, grade: val })}
          />

          <div className="flex justify-between pt-4">
            <Button label="Cancel" variant="primary" />
            <Button label="Add" variant="secondary" type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
}
