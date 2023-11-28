"use client";
import { BloodIcon, DnaIcon, WeightIcon } from "@/components/icons";
import { ProfileUpdateFormInputType } from "@/types";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import  AibotImg from '@/public/images/login-vector-bg.png';

const UpdateProfilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileUpdateFormInputType>();
  const onSubmit = (data: ProfileUpdateFormInputType) => {return data}

  return (
    <section className="py-16 px-5 mx-auto max-w-7xl md:px-10 relative">
      <div className="flex max-w-5xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full md:w-1/2 gap-4 max-w-md">
          <p className="font-semibold text-lg">Whats your current weight?</p>
        <div className="relative mb-6">
          <input
            type="number"
            placeholder="Enter your weight in kg"
            {...register("weight", { required: true, maxLength: 3, minLength: 1, min: 1 })}
            className="w-full border border-grayLight bg-grayLight/10 rounded py-4 pl-10 px-5 leading-tight focus:outline-none focus:border-blueLight"
          />
          <WeightIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 " />
        </div>


        <p className="font-semibold text-lg">What is your Blood group?</p>
        <div className="relative inline-block text-left mb-6">
          <select
            {...register("blood_group", { required: true })}
            className="w-full border border-grayLight bg-grayLight/10 rounded py-4 pl-8 px-5 bg-white pr-8 leading-tight focus:outline-none focus:border-blueLight block appearance-none"
          >
            <option value="" disabled selected>
              Select your blood group
            </option>
            <option value="A+">A+</option>
            <option value=" A-"> A-</option>
            <option value=" B+"> B+</option>
            <option value=" B-"> B-</option>
            <option value=" AB+"> AB+</option>
            <option value=" AB-"> AB-</option>
            <option value=" O+ "> O+ </option>
            <option value="O-">O-</option>
          </select>
          <BloodIcon className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2" fill='#1CA1FE' />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-blueLight h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12L15 7 5 7z" />
            </svg>
          </div>
        </div>

        <p className="font-semibold text-lg">What is your genotype?</p>
        <div className="relative inline-block text-left mb-6">
        <select {...register("genotype", { required: true })} className="w-full border border-grayLight bg-grayLight/10 rounded py-4 pl-10 px-5 bg-white pr-8 leading-tight focus:outline-none focus:border-blueLight block appearance-none"
          >
            <option value="" disabled selected>
              Select your genotype
            </option>
        <option value="AA">AA</option>
        <option value=" AS"> AS</option>
        <option value=" SS"> SS</option>
        <option value=" AC"> AC</option>
        <option value=" SC"> SC</option>
      </select>
          <DnaIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-blueLight h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12L15 7 5 7z" />
            </svg>
          </div>
        </div>

        <input
          type="submit"
          className="w-full xs:w-fit px-6 py-2 text-sm font-semibold capitalize text-white rounded-full sm:py-3 mt-2 sm:px-8 bg-blueDark-200 transition-all duration-200 ease-in-out hover:scale-105"
        />
      </form>
    </div>
    <Image src={AibotImg} className="update__profile hidden sm:inline-block"  alt="bot image"/>
    </section>
  );
};

export default UpdateProfilePage;
