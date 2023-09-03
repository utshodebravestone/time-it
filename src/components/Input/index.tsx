import { FC } from "react";

const Input: FC<{
  label: string;
  type: "text" | "email" | "password" | "color" | "date" | "number" | "range";

  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;

  initialValue: string;
  onChange: (value: string) => void;
}> = ({
  label,
  type,
  required,
  min,
  max,
  minLength,
  maxLength,
  initialValue,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xl font-light">{label}</label>
      <input
        type={type}
        required={required}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        value={initialValue}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border border-slate-200 rounded focus:outline-none"
      />
    </div>
  );
};

export default Input;
