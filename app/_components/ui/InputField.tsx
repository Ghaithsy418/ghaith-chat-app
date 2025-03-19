import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
}

function InputField({ label, name, type = "text", error }: InputFieldProps) {
  return (
    <div className="w-[400px]">
      <div className="relative w-full">
        <input
          type={type}
          name={name}
          id={name}
          placeholder=" "
          className={`peer w-full rounded-lg bg-slate-950/40 py-2 px-3 focus:outline-3 focus:outline-slate-800/80 focus:outline-offset-1 ${
            error ? "border border-red-500" : ""
          }`}
        />
        <label
          htmlFor={name}
          className="absolute left-3 top-2 text-indigo-50 transition-all peer-focus:-top-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm"
        >
          {label}
        </label>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default InputField;
