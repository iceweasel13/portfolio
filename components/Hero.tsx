import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex min-h-screen max-md:flex-col max-md:gap-4 justify-center px-12 sm:px-2  items-center w-full">
      <Image
        src="/assets/images/profile-pic.png"
        width={500}
        height={500}
        className="hidden md:block "
        alt="A playful kitten on a desktop environment"
      />
      {/* Image for mobile screens */}
      <Image
        src="/assets/profile-pic.png"
        width={300}
        height={300}
        className="block md:hidden"
        alt="A playful kitten seen on a mobile screen"
      />

      <div className="flex flex-col items-center justify-center gap-4 px-3 text-center lg:pl-36 md:pl-4 xl:pl-48">
        <span className="text-slate-400">
          {" "}
          Hello I&apos;m
        </span>
        <h1 className="text-4xl font-extrabold text-slate-50">
          Nihat Zaman
        </h1>
        <p className="text-lg text-slate-50">
          Data Analyst
        </p>
        <div className="flex flex-col justify-between gap-4 max-md:gap-2">
          <div className="flex gap-4">
            {" "}
            <button className="text-black text-sm font-bold bg-slate-50 hover:border hover:border-slate-50 rounded-full py-1 px-2 hover:text-white hover:bg-slate-900">
              Download CV
            </button>
            <button className="text-black text-sm font-bold bg-slate-50 hover:border hover:border-slate-50 rounded-full py-1 px-2 hover:text-white hover:bg-slate-900">
              Contact Me
            </button>
          </div>
          <div className="flex items-center justify-around gap-2 ">
            <Link href="/projects" className="invert">
              <Image
                src={"/assets/images/github.png"}
                width={60}
                height={60}
                className="hover:transform hover:scale-110"
                alt="Github logo"
              />
            </Link>
            <Link href="/projects" className="">
              <Image
                src={"/assets/icons/kaggle.svg"}
                width={60}
                height={60}
                className="hover:transform hover:scale-110"
                alt="Kaggle logo"
              />
            </Link>
            <Link href="/projects" className="invert">
              <Image
                src={"/assets/icons/Medium.svg"}
                width={70}
                height={70}
                className="hover:transform hover:scale-110"
                alt="Medium logo"
              />
            </Link>
            <Link href="/projects" className="">
              <Image
                src={"/assets/icons/linkedin.svg"}
                width={40}
                height={40}
                className="hover:transform hover:scale-110"
                alt="Linkedin logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
