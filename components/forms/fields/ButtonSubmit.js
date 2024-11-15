"use client";

import LoadingCircle from "./LoadingCircle";

function ButtonSubmit({ isLoading, text = "Send Message" }) {
  return (
    <button
      type="submit"
      className="btn btn-primary w-full"
      disabled={isLoading}
    >
      {isLoading ? <LoadingCircle /> : text}
    </button>
  );
}

export default ButtonSubmit;
