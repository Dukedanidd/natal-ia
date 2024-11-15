"use client";

function TextArea({ label, error, register, registerOptions, ...props }) {
  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="textarea textarea-bordered w-full h-32"
        {...register(props.name, registerOptions)}
        {...props}
      />
      {error && <p className="text-error text-sm mt-1">{error.message}</p>}
    </div>
  );
}

export default TextArea;
