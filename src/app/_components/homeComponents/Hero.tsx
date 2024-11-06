import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full py-4 bg-gradient-to-br from-black via-blue-200 to-blue-200"
    >
      <div className="w-full flex flex-col md:flex-row px-4 md:px-0 gap-y-12">
        <div
          data-aos="fade-right"
          className="w-[50%] md:w-[60%] m-auto aspect-square relative rounded-full md:rounded-l-none overflow-hidden shadow-xl"
        >
          <Image
            fill
            sizes="auto"
            src="/profileImage.jpg"
            alt="profileImage"
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            priority
          />
        </div>
        <div className="w-full text-center flex flex-col justify-center items-center gap-y-3">
          <div data-aos="zoom-in">
            <h1 className="font-bold text-2xl">Rama Naufal Alim</h1>
            <h1 className="font-bold text-2xl">Fullstack Web Developer</h1>
            <h2 className="px-4">
              Hi, I am Ranma Naufal Alim. I am full-stack web developer from
              Indonesia.
            </h2>
          </div>
          <div
            data-aos="fade-up"
            className="w-full flex gap-3 justify-center font-semibold"
          >
            <Link
              href="#projects"
              className="bg-blue-900 border-black border-2 p-3 rounded-full text-white"
            >
              See my projects
            </Link>
            <Link
              href="#contact"
              className="border-blue-900 border-2 p-3 rounded-full text-black"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
