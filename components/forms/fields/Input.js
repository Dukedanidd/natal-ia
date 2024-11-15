"use client";

function Input({
  label,
  type = "text",
  error,
  register,
  registerOptions,
  ...props
}) {
  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        className="input input-bordered w-full"
        {...register(props.name, registerOptions)}
        {...props}
      />
      {error && <p className="text-error text-sm mt-1">{error.message}</p>}
    </div>
  );
}

export default Input;
