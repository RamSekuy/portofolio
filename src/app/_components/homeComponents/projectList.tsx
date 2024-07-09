"use client";
import dynamic from "next/dynamic";
import ProjectCard from "../cardComponents/ProjectCard";
import { useState } from "react";
import Image from "next/image";
type Project = {
  title: string;
  img: string;
  desc?: string;
  github?: string;
  website?: string;
};
type Props = { projects: Project[] };
const Modal = dynamic(() => import("../modalComponents/modal"), { ssr: false });
const Link = dynamic(() => import("next/link"));

export default function ProjectList({ projects }: Props) {
  const [project, setProject] = useState<Project | null>(null);
  return (
    <>
      {project && (
        <Modal
          active={Boolean(project)}
          close={() => {
            setProject(null);
          }}
        >
          <div className="max-h-[80%] overflow-auto">
            <h1 className="font-bold text-xl text-center">{project.title}</h1>
            <div className="relative w-full aspect-[16/9] aspect">
              <Image src={project.img} fill alt="projectImage" />
            </div>
            <div className="flex justify-evenly">
              {project.github && (
                <Link
                  target="_blank"
                  href={project.github}
                  className="hover:text-black text-blue-700 font-semibold"
                >
                  github
                </Link>
              )}
              {project.website && (
                <Link
                  target="_blank"
                  href={project.website}
                  className="hover:text-black text-blue-700 font-semibold"
                >
                  website
                </Link>
              )}
            </div>
            <p className="my-4">{project.desc}</p>
          </div>
        </Modal>
      )}

      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
        {projects.map((e, i) => (
          <ProjectCard
            key={i}
            imgUrl={e.img}
            projectTitle={e.title}
            onClick={() => {
              setProject(e);
            }}
          />
        ))}
      </div>
    </>
  );
}
