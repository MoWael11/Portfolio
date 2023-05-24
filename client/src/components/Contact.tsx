"use client";
import { contactFormValidator } from "@/lib/validations/contact-form";
import { useRef, useState } from "react";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./ui/Button";

type FormData = z.infer<typeof contactFormValidator>;

const Contact = () => {
  const pForShowState = useRef<HTMLParagraphElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormValidator),
  });

  const submitForm = async (
    name: string,
    email: string,
    message: string,
    phone: string
  ) => {
    setIsLoading(true);
    try {
      const validatedForm = contactFormValidator.parse({
        name,
        email,
        message,
        phone,
      });

      const response = await axios.post("http://localhost:4000/contact", {
        email: validatedForm.email,
        name: validatedForm.name,
      });

      pForShowState.current!.innerText = response.data;
      if (response.status === 200) {
        pForShowState.current!.classList.add("text-primary-text");
      } else {
        pForShowState.current!.classList.add("text-error-text");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.issues.forEach((issue) => {
          if (issue.path[0] === "email") {
            setError("email", { message: issue.message });
          }
          if (issue.path[0] === "name") {
            setError("name", { message: issue.message });
          }
          if (issue.path[0] === "phone") {
            setError("phone", { message: issue.message });
          }
          if (issue.path[0] === "message") {
            setError("message", { message: issue.message });
          }
        });
        return;
      }
      pForShowState.current!.classList.add("text-error-text");
      if (error instanceof AxiosError) {
        pForShowState.current!.innerText = "Server error, please try later";
        return;
      }
      pForShowState.current!.innerText =
        "Something went wrong, please try again";
    } finally {
      setIsLoading(false);
      form.current!.reset();
    }
  };
  const onSubmit = (data: FormData) => {
    submitForm(data.name, data.email, data.message, data.phone!);
  };

  return (
    <>
      <h2 className="title text-shadow flex w-full items-center justify-center pb-10 pt-2 text-4xl text-primary-text">
        Contact Me
      </h2>
      <div className="relative m-auto flex flex-col">
        <h3 className="mb-8 text-lg text-secondary-text md:text-xl">
          I&apos;m looking forward to hearing from you!
        </h3>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="relative mb-2 grid grid-cols-1 gap-4 text-primary-text md:grid-cols-2"
        >
          <label
            htmlFor="name"
            aria-label="name"
            className="absolute block translate-x-[-99999999999px] opacity-0"
          >
            insert your name
          </label>
          <div className="relative mb-4 md:mb-2">
            <input
              spellCheck={false}
              placeholder="Your Name"
              autoComplete="off"
              {...register("name")}
              className="flex w-full rounded-sm border-[1px] border-dark-border bg-dark px-4 py-2 text-[16px] text-primary-text outline-none transition-colors duration-500 placeholder:text-secondary-text placeholder:transition-opacity placeholder:duration-500 focus:border-white focus:placeholder:opacity-0"
            />
            <p className="absolute bottom-0 translate-y-[100%] text-sm text-error-text">
              {errors.name?.message}
            </p>
          </div>
          <label
            htmlFor="phone"
            aria-label="phone"
            className="absolute block translate-x-[-99999999999px] opacity-0"
          >
            insert your phone
          </label>
          <div className="relative mb-4 md:mb-2">
            <input
              spellCheck={false}
              placeholder="Your Phone (optional)"
              autoComplete="off"
              {...register("phone")}
              className="flex w-full rounded-sm border-[1px] border-dark-border bg-dark px-4 py-2 text-[16px] text-primary-text outline-none transition-colors duration-500 placeholder:text-secondary-text placeholder:transition-opacity placeholder:duration-500 focus:border-white focus:placeholder:opacity-0"
            />
          </div>
          <label
            htmlFor="email"
            aria-label="email"
            className="absolute block translate-x-[-99999999999px] opacity-0"
          >
            insert your email
          </label>
          <div className="relative mb-4 md:col-span-2 md:mb-2">
            <input
              spellCheck={false}
              placeholder="Your Email"
              autoComplete="off"
              {...register("email")}
              className="text-[16px]rounded-sm flex w-full border-[1px] border-dark-border bg-dark px-4 py-2 text-primary-text outline-none transition-colors duration-500 placeholder:text-secondary-text placeholder:transition-opacity placeholder:duration-500 focus:border-white focus:placeholder:opacity-0"
            />
            <p className="absolute bottom-0 translate-y-[100%] text-sm text-error-text">
              {errors.email?.message}
            </p>
          </div>
          <label
            htmlFor="message"
            aria-label="message"
            className="absolute block translate-x-[-99999999999px] opacity-0"
          >
            insert your massege
          </label>
          <div className="relative mb-4 min-h-[150px] md:col-span-2 md:mb-2">
            <textarea
              spellCheck={false}
              placeholder="Your Message"
              autoComplete="off"
              {...register("message")}
              className="text-[16px]rounded-sm flex h-full w-full border-[1px] border-dark-border bg-dark px-4 py-2 text-primary-text outline-none transition-colors duration-500 placeholder:text-secondary-text placeholder:transition-opacity placeholder:duration-500 focus:border-white focus:placeholder:opacity-0"
            />
            <p className="absolute bottom-0 translate-y-[100%] text-sm text-error-text">
              {errors.message?.message}
            </p>
          </div>
          <Button
            isLoading={isLoading}
            className="justify-center rounded-sm md:col-span-2"
          >
            Submit
          </Button>
        </form>
        <p ref={pForShowState} className="text-sm md:text-base"></p>
      </div>
    </>
  );
};

export default Contact;
