"use client";
import { contactFormValidator } from "@/lib/validations/contact-form";
import { useRef, useState, FC } from "react";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./ui/Button";

type FormData = z.infer<typeof contactFormValidator>;

interface ContactProps {
  URL: string;
}

const Contact: FC<ContactProps> = ({ URL }) => {
  const pForShowState = useRef<HTMLParagraphElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormValidator),
  });
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value.trim());
  };
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
      const response = await axios.post(`${URL}/contact`, {
        email: validatedForm.email,
        name: validatedForm.name,
        message: validatedForm.message,
        phone: validatedForm.phone,
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
        if (error.response?.status === 400 || error.response?.status === 500) {
          pForShowState.current!.innerText = error.response.data;
          return;
        }
        pForShowState.current!.innerText = "Server Error, Please try later.";
        return;
      }
      pForShowState.current!.innerText =
        "Something went wrong, please try later.";
    } finally {
      setIsLoading(false);
      setEmail('');
      form.current!.reset();
    }
  };
  const onSubmit = (data: FormData) => {
    submitForm(data.name, data.email, data.message, data.phone!);
  };

  return (
    <section id="contact" className="container mb-20 md:min-h-[80vh] before:bg-cover before:bg-[url('/images/contact.png')] before:hidden before:sm:block before:w-[900px] before:h-[300px] md:before:w-[1110px] md:before:h-[450px] before:translate-x-[-50%] lg:before:translate-x-[-46%] relative before:absolute before:contrast-0 before:left-[50%] before:z-[-1] before:translate-y-[-50%] lg:before:w-[1400px] before:top-[50%] lg:before:h-[600px] before:content-['']">
      <h2 className="title text-shadow flex w-full items-center justify-center pb-10 pt-2 text-4xl tracking-wider text-primary-text">
        Contact
      </h2>
      <div className="relative m-auto flex flex-col">
        <h3 className="mb-8 text-lg md:text-2xl">
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
            <div className="before:content-[''] before:w-full before:h-full before:rounded-sm before:absolute before:top-0 before:left-0 before:bg-dark before:opacity-[61%] bg-transparent">
              <input
                id="name"
                spellCheck={false}
                placeholder="Your Name"
                autoComplete="off"
                {...register("name")}
                className="w-full rounded-sm border-[1px] border-dark-border relative bg-transparent px-4 py-2 text-[16px] text-primary-text outline-none transition-colors duration-500 placeholder:text-secondary-text placeholder:transition-opacity placeholder:duration-500 focus:border-white focus:placeholder:opacity-0"
              />
            </div>
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
            <div className="before:content-[''] before:w-full before:h-full before:rounded-sm before:absolute before:top-0 before:left-0 before:bg-dark before:opacity-[61%] bg-transparent">
              <input
                id="phone"
                spellCheck={false}
                placeholder="Your Phone (optional)"
                autoComplete="off"
                {...register("phone")}
                className="w-full rounded-sm border-[1px] border-dark-border relative bg-transparent px-4 py-2 text-[16px] text-primary-text outline-none transition-colors duration-500 placeholder:text-secondary-text placeholder:transition-opacity placeholder:duration-500 focus:border-white focus:placeholder:opacity-0"
              />
            </div>
          </div>
          <label
            htmlFor="email"
            aria-label="email"
            className="absolute block translate-x-[-99999999999px] opacity-0"
          >
            insert your email
          </label>
          <div className="relative mb-4 md:col-span-2 md:mb-2">
            <div className="before:content-[''] before:w-full before:h-full before:rounded-sm before:absolute before:top-0 before:left-0 before:bg-dark before:opacity-[61%] bg-transparent">
              <input
                id="email"
                spellCheck={false}
                placeholder="Your Email"
                autoComplete="off"
                value={email}
                {...register("email")}
                onChange={handleEmailChange}
                className="text-[16px] rounded-sm flex w-full border-[1px] border-dark-border relative bg-transparent px-4 py-2 text-primary-text outline-none transition-colors duration-500 placeholder:text-secondary-text placeholder:transition-opacity placeholder:duration-500 focus:border-white focus:placeholder:opacity-0"
              />
              <p className="absolute bottom-0 translate-y-[100%] text-sm text-error-text">
                {errors.email?.message}
              </p>
            </div>
          </div>
          <label
            htmlFor="message"
            aria-label="message"
            className="absolute block translate-x-[-99999999999px] opacity-0"
          >
            insert your massege
          </label>
          <div className="relative mb-4 min-h-[150px] md:col-span-2 md:mb-2">
            <div className="h-full before:content-[''] before:w-full before:h-full before:rounded-sm before:absolute before:top-0 before:left-0 before:bg-dark before:opacity-[61%] bg-transparent">
              <textarea
                id="message"
                spellCheck={false}
                placeholder="Your Message"
                autoComplete="off"
                {...register("message")}
                className="text-[16px] rounded-sm flex h-full w-full border-[1px] border-dark-border relative bg-transparent px-4 py-2 text-primary-text outline-none transition-colors duration-500 placeholder:text-secondary-text placeholder:transition-opacity placeholder:duration-500 focus:border-white focus:placeholder:opacity-0"
              />
              <p className="absolute bottom-0 translate-y-[100%] text-sm text-error-text">
                {errors.message?.message}
              </p>
            </div>
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
    </section>
  );
};

export default Contact;
