"use client";

import { useForm } from "react-hook-form";
import { Input, TextArea, ButtonSubmit } from "@/components/forms/fields";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    // Here you would typically send the form data to your API
    setIsLoading(true);
    try {
      console.log("Form submitted, do whatever you want here:");
      console.log("Your Data: =>", data);
      toast.success("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col w-full min-h-screen bg-base-100 justify-center items-center">
      <div className="max-w-4xl p-5 w-full">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Name"
            name="name"
            register={register}
            registerOptions={{ required: "Name is required" }}
            error={errors.name}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            register={register}
            registerOptions={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            error={errors.email}
          />

          <TextArea
            label="Message"
            name="message"
            register={register}
            registerOptions={{ required: "Message is required" }}
            error={errors.message}
          />

          <ButtonSubmit isLoading={isLoading} />
        </form>
      </div>
    </main>
  );
};

export default Contact;
