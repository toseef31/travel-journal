import { UseFormRegisterReturn } from "react-hook-form";

type GeneralInputProps = {
  label: string;
  inputType: 'text' | 'number' | 'date' | 'password' | 'url' | 'email';
  placeholder: string;
  error?: string;
  // 👇 new: instead of value/onChange, just spread register
  registration: UseFormRegisterReturn;
};

export default function Input({
  label,
  inputType = "text",
  placeholder,
  error,
  registration,
}: GeneralInputProps) {
  return (
    <div className="flex flex-col mb-3">
      <label className="font-semibold text-lg mb-1 capitalize">
        {label}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        className={`text-input ${error ? "border-red-500" : ""}`}
        {...registration}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
