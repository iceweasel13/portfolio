import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
const About = () => {
  return (
    <div className="flex h-3/5 flex-col w-full gap-6  sm:px-12 md:px24 lg:px-36 xl:px-60">
      <div className="flex flex-col py-4 items-center justify-center">
        <span className="text-slate-400 font-medium">
          Explore My
        </span>
        <h2 className="text-2xl text-slate-50 font-semibold">
          Experience
        </h2>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col  rounded-sm gap-4 p-6 border-slate-500 items-center">
          <h3 className="text-slate-50 font-semibold text-xl">
            Data Analysis
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-medium text-lg text-slate-50">
            {[
              "Excel",
              "Sql",
              "PostgreSQL",
              "MongoDb",
              "R",
              "Python",
              "Tableau",
              "WebScraping",
            ].map((skill) => (
              <p
                key={skill}
                className="flex gap-2 items-center justify-center"
              >
                <FaRegCircleCheck className="inline-block" />{" "}
                {skill}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col  rounded-sm gap-4 p-6 border-slate-500 items-center">
          <h3 className="text-slate-50 font-semibold text-xl">
            Full Stack Web Development
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-medium text-lg text-slate-50">
            {[
              "Javascript",
              "Typescript",
              "MongoDB",
              "PostreSQL",
              "HTML",
              "CSS",
              "TailwindCSS",
              "ShadCN UI",
              "Git",
            ].map((skill) => (
              <p
                key={skill}
                className="flex gap-2 items-center justify-center"
              >
                <FaRegCircleCheck className="inline-block" />{" "}
                {skill}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col  rounded-sm gap-4 p-6 border-slate-500 items-center">
          <h3 className="text-slate-50 font-semibold text-xl">
            Web3 Developer
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-medium text-lg text-slate-50">
            {[
              "Solidity",
              "Wagmi",
              "Viem",
              "Hardhat",
              "Ethers.js",
            ].map((skill) => (
              <p
                key={skill}
                className="flex gap-2 items-center justify-center"
              >
                <FaRegCircleCheck className="inline-block" />{" "}
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
