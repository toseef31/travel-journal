import Input from "@/components/Input";
import { useState } from "react";
import Button from "./Button";

export default function AddPlace() {
  const [Title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [googleMapsUrl, setGoogleMapsUrl] = useState("")

  const [touched, setTouched] = useState({
    title: false,
    location: false,
    googleMapsUrl: false,
    startDate: false,
    endDate: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    resetForm();
  }
  const resetForm = () => {
    setTitle('')
    setLocation('')
    setStartDate('')
    setEndDate('')
    setGoogleMapsUrl('')
    setTouched({
      title: false,
      location: false,
      googleMapsUrl: false,
      startDate: false,
      endDate: false,
    });
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input
        label="Title"
        inputType="text"
        placeholder="Enter title 'ie. Mount Fuji'"
        value={Title}
        onChange={setTitle}
        onBlur={() => setTouched({ ...touched, title: true })}
        error={touched.title && !Title ? "Title is required" : ""}

      />

      <Input
        label="Location"
        inputType="text"
        placeholder="Enter country name"
        value={location}
        onChange={setLocation}
        onBlur={() => setTouched({ ...touched, location: true })}
        error={touched.location && !location ? "Country is required" : ""}
      />

      <Input
        label="Google maps URL"
        inputType="url"
        placeholder="Url"
        value={googleMapsUrl}
        onChange={setGoogleMapsUrl}

        onBlur={() => setTouched({ ...touched, googleMapsUrl: true })}
        error={touched.googleMapsUrl && !googleMapsUrl ? "Please add google maps address" : ""}
      />

      <Input
        label="Start date"
        inputType="date"
        placeholder="Start date"
        value={startDate}
        onChange={setStartDate}
        onBlur={() => setTouched({ ...touched, startDate: true })}
        error={touched.startDate && !startDate ? "Please add visit starting date" : ""}
      />

      <Input
        label="End date"
        inputType="date"
        placeholder="End date"
        value={endDate}
        onChange={setEndDate}
        onBlur={() => setTouched({ ...touched, endDate: true })}
        error={touched.endDate && !endDate ? "Please add visits end date" : ""}
      />

      <div className="mt-10">
        <Button text="Submit" btnType="submit" />
      </div>
    </form>
  )
}