import Input from "@/components/Input";
import { useState } from "react";
import Button from "./Button";

export default function AddPlace() {
  const [Title, setTitle] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    resetForm();
  }
  const resetForm = () => {
    setTitle('')
    setCountry('')
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input
        label="Title"
        inputType="text"
        placeholder="Enter title 'ie. Mount Fuji'"
        value={Title}
        onChange={setTitle}
        error={!Title ? "Title is required" : ""}

      />

      <Input
        label="Country"
        inputType="text"
        placeholder="Enter country"
        value={country}
        onChange={setCountry}
        error={!country ? "Country is required" : ""}
      />

      <div className="mt-10">
        <Button text="Submit" btnType="submit" />
      </div>
    </form>
  )
}