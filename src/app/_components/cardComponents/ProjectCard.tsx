"use client";
import Image from "next/image";

interface ProjectCardProps {
  imgUrl: string;
  projectTitle: string;
  onClick?: () => void;
}

export default function ProjectCard({
  imgUrl,
  projectTitle,
  onClick = () => {},
}: ProjectCardProps) {
  return (
    <div
      className="card card-compact bg-base-100 hover:scale-100 scale-90 transition-all shadow-xl w-96 max-w-full m-auto"
      onClick={() => {
        onClick();
      }}
    >
      <figure className="relative w-full aspect-[16/9]">
        <Image src={imgUrl} alt="ProjectImage" fill sizes="100%" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{projectTitle}</h2>
      </div>
    </div>
  );
}
