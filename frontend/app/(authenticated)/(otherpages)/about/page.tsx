"use client";

import { useForm } from "react-hook-form";
import How from "@/components/How";
import Why from "@/components/Why";
import { Loading } from "@/components/shared/loading";
import Features from "@/components/features";
import { useState, useEffect } from "react";

type FormInput = {
  name: string;
  email: string;
  message: string;
};

const AboutPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit = (data: FormInput) => {return data}

  const [loadingPage, setpage] = useState<boolean>(false)
  useEffect(() => {
    setpage(true)        
}, [])
  return (  <>
    { loadingPage ?
    <section className="mx-auto relative">
      <div className="py-16">
        <h2 className="w-full text-center text-3xl md:text-7xl font-semibold capitalize text-blueDark-200 mb-4">
          About Us
        </h2>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-4xl capitalize font-bold mb-8 text-blueDark-200">our vision</h3>
          <p className="leading-relaxed font-semibold text-lg max-w-lg">
            Our Vision We envision a future where healthcare is not only
            efficient but also deeply personalized. AI-DOC is at the forefront
            of this vision, leveraging the latest advancements in artificial
            intelligence to transform the way individuals interact with their
            health.
          </p>
        </div>
        <Features />
        <How />
        <Why />
      </div>
    </section> : <Loading />}
    </>
  );
};

export default AboutPage;
