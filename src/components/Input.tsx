type TextInputProps = {
  label: string,
  inputType: 'text' | 'date' | 'password' | 'url' | 'email' | 'number',
  placeholder: string,
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void
  error?: string;
}

export default function Input({ label, inputType, placeholder, value, error, onBlur, onChange }: TextInputProps) {
  return (
    <div>
      <label htmlFor="" className="inline-block font-semibold text-lg capitalize mb-1">{label}</label>
      <input
        type={inputType}
        className={`text-input ${error ? "outline-rose-500" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
      />
      {error && <p className="text-rose-500 text-sm mt-1">{error}</p>}
    </div>
  )
}