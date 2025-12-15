interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
  disabled?: boolean;
  defaultValue?: string;
  required?: boolean;
}

function InputField({
  label,
  name,
  type = "text",
  error,
  autoComplete = "on",
  disabled = false,
  defaultValue = "",
  required = false,
}: InputFieldProps) {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <input
          disabled={disabled}
          defaultValue={defaultValue}
          type={type}
          name={name}
          id={name}
          required={required}
          placeholder=" "
          autoComplete={autoComplete}
          className={`peer w-full rounded-lg bg-slate-950/40 px-3 py-3 text-indigo-50 placeholder-transparent transition-all outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:cursor-not-allowed disabled:bg-slate-950/30 disabled:text-slate-400 ${error ? "border border-red-500 focus:ring-red-500/50" : "border border-transparent"}`}
        />

        <label
          htmlFor={name}
          className="pointer-events-none absolute top-3.5 left-3 text-sm text-indigo-50/70 transition-all duration-200 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-indigo-300 peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs sm:top-3 sm:text-base sm:peer-focus:-top-6 sm:peer-focus:text-sm sm:peer-[:not(:placeholder-shown)]:-top-6 sm:peer-[:not(:placeholder-shown)]:text-sm rtl:right-3 rtl:left-auto"
        >
          {label}
        </label>
      </div>

      {error && <p className="mt-1 text-start text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default InputField;
