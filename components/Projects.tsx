import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      imageUrl: "/assets/images/project.png",
      link: "/projects/1",
    },
    {
      name: "Project 2",
      imageUrl: "/assets/images/project.png",
      link: "/projects/2",
    },
    {
      name: "Project 3",
      imageUrl: "/assets/images/project.png",
      link: "/projects/3",
    },
    {
      name: "Project 4",
      imageUrl: "/assets/images/project.png",
      link: "/projects/4",
    },
    {
      name: "Project 5",
      imageUrl: "/assets/images/project.png",
      link: "/projects/5",
    },
  ];

  return (
    <div>
      <div className=" items-center justify-center h-3/5 flex-col w-full gap-6 mt-24 sm:px-12 md:px24 lg:px-36 xl:px-60 my-36">
        <div className="flex flex-col py-4 items-center justify-center">
          <span className="text-slate-400 font-medium">
            Browse My Recent
          </span>
          <h2 className="text-2xl text-slate-50 font-semibold">
            Projects
          </h2>
        </div>

        <div className="flex gap-4 w-full text-white items-center justify-center mt-12 sm:items-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 hover:scale-110"
                >
                  <Link
                    href={project.link}
                    className="hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center p-4 ">
                      {/* Image */}
                      <Image
                        src={project.imageUrl}
                        width={750}
                        height={750}
                        className="w-full h-auto object-cover"
                        alt={project.name}
                      />
                      {/* Project Name */}
                      <h4 className="mt-2 text-lg font-bold   text-slate-50">
                        {project.name}
                      </h4>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-md:hidden" />
            <CarouselNext className="max-md:hidden" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;
