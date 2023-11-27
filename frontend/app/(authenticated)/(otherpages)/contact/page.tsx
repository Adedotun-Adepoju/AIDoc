"use client";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TripleArrowIcon,
  TwitterIcon,
} from "@/components/icons";
import { useForm } from "react-hook-form";
import AiBotImage from '@/public/img/ai-bot.png'
import Image from "next/image";
import { ContactFormInputType } from "@/types"
import { useState, useEffect } from "react";
import { Loading } from "@/components/shared/loading";



const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputType>();
  const onSubmit = (data: ContactFormInputType) => console.log(data);
  console.log(errors);
  const [loadingPage, setpage] = useState<boolean>(false)
  useEffect(() => {
    setpage(true)        
}, [])
  return ( <>
    { loadingPage ? 
    <section className="px-5 mx-auto max-w-7xl md:px-10 relative">
      <div className="py-16 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <h2 className="w-full text-3xl md:text-6xl lg:text-5xl font-semibold capitalize mb-4">
            Get intouch with us
          </h2>
          <TripleArrowIcon className="w-8 md:w-14 mb-8" />

          <p className="text-lg md:text-xl mb-10 font-medium max-w-md">
            Get intouch with us if you have any suggestions or information to
            help this idea.
          </p>
          <div className="max-w-md">
            <div className="flex items-center mb-2">
              <p className="uppercase w-fit mr-3 text-lg md:text-xl font-medium">follow us</p>
              <span className="flex-1 h-[1px] bg-blueLight"></span>
            </div>
            <span className="flex gap-4 mb-2">
              <TwitterIcon className="h-8 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blueLight/10 p-0.5 rounded-full" />
              <FacebookIcon className="h-8 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blueLight/10 p-0.5 rounded-full" />
              <InstagramIcon className="h-8 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blueLight/10 p-0.5 rounded-full" />
            </span>
            <span className="flex gap-2 font-medium items-center  text-lg">
              <MailIcon
                className="w-5 h-8 transition-all duration-200 ease-in-out hover:scale-105"
                fill="#DE0C18"
              />
              support@ai-doc.com
            </span>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 py-6 mt-10 lg:w-1/2 max-w-md"
        >
          <input
            type="text"
            placeholder="name"
            {...register("name", { required: true, min: 5, maxLength: 30 })}
            className="w-full border border-grayLight bg-grayLight/10 rounded py-4 px-5"
          />
          <input
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
            className="w-full border border-grayLight bg-grayLight/10 rounded py-4 px-5"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Your Message"
            className="w-full border border-grayLight bg-grayLight/10 rounded py-4 px-5"
          />

          <input
            type="submit"
            className="w-full xs:w-fit px-4 py-2 text-sm font-semibold capitalize text-white rounded-full sm:py-3 mt-2 sm:px-8 bg-blueDark-200 transition-all duration-200 ease-in-out hover:scale-105"
          />
        </form>
      </div>
      {/* <Image src={AiBotImage} className="fixed bottom-0 right-0 -z-10 opacity-20 hidden md:block " /> */}
    </section> : <Loading /> }
    </>
  );
};

export default ContactPage;
