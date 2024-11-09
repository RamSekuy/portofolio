import { Badge } from "@/components/ui/badge";
import EachUtils from "../utils/eachUtils";

export default function AboutMe() {
  const certificates = [
    {
      text: "HackerRank Javasript Basic",
      url: "https://drive.google.com/file/d/1B-1Cuu0xP90aZJduZWGDfFk0PPDnbWL9/view?usp=sharing",
    },
    {
      text: "Refocus Core Track Data Analyst",
      url: "https://drive.google.com/file/d/1NFPAJy-29XvNQ3re8HqeAKWoV8tntM-t/view?usp=sharing",
    },
  ];

  return (
    <section
      id="me"
      className="w-full *:my-4  flex flex-col py-10"
      data-aos="zoom-in"
    >
      <h1 className="text-center font-semibold text-4xl">About Me</h1>
      <p className="w-full px-2 sm:px-20 text-sm">
        A dedicated full-stack web developer with extensive experience in
        Next.js and Express.js, known for hands-on involvement in building
        e-commerce, ticketing, and company profile websites. Proficient in
        SQL-based databases, and skilled in creating scalable, secure, and
        efficient web applications. Experienced in using React and Zustand for
        state management, integrating APIs for seamless user experiences, and
        implementing robust validation and testing processes to ensure
        reliability and security. Demonstrates strong problem-solving abilities,
        effective communication, and a collaborative approach in team
        environments. Passionate about learning new technologies and
        continuously enhancing skills to stay up-to-date with industry trends.
      </p>
      <div className="w-full *:w-full flex md:flex-row flex-col gap-y-4">
        <EducationComponent />
        <SkillsComponent />
        <CertificateComponent />
      </div>
    </section>
  );
}

function SkillsComponent() {
  const skills = [
    "Html & css",
    "Javascript",
    "Typescript",
    "C#",
    "Dart",
    "React",
    "Next",
    "Flutter",
    "Express",
    "Prisma",
    "Socket IO",
    "MySQL",
  ];
  return (
    <div className="w-full *:mx-4 flex flex-col items-center py-4">
      <div className="my-4">
        <h3 className="font-semibold text-2xl">My Skills</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <EachUtils
          of={skills}
          render={(e, i) => (
            <Badge
              data-aos="fade-right"
              data-aos-delay={i * 150}
              className=" m-2 flex justify-center hover:scale-110 font-xl p-4"
            >
              {e}
            </Badge>
          )}
        />
      </div>
    </div>
  );
}

function EducationComponent() {
  class Edu {
    school: string;
    time: string;
    major: string;
    constructor(school: string, time: string, major: string) {
      this.school = school;
      this.time = time;
      this.major = major;
    }
  }

  function ShowEdu({ edu, delay }: { edu: Edu; delay?: number }) {
    const { major, school, time } = edu;
    return (
      <div data-aos="fade-down" data-aos-delay={delay}>
        <div className="space-y-1">
          <h4 className="font-semibold leading-none">{school}</h4>
        </div>
        <div className="flex h-5 items-center space-x-4 text-sm justify-center">
          <div>{time}</div>
          <div>{major}</div>
        </div>
      </div>
    );
  }

  const educationList = [
    new Edu("SMAIT Almaka", "2020 - 2023", "Science"),
    new Edu(
      "Purwadhika Digital Technology School",
      "Agu 2024",
      "Full-stack Webdev"
    ),
  ];

  return (
    <div className="w-full *:mx-4 *:px-4 flex flex-col py-4 justify-start items-center *:text-center">
      <div className="my-4 flex">
        <h3 className="font-semibold text-2xl">Education</h3>
      </div>
      <div className="w-full grid grid-rows gap-4 py-4">
        <EachUtils
          of={educationList}
          render={(e, i) => <ShowEdu edu={e} delay={i * 300} />}
        />
      </div>
    </div>
  );
}

function CertificateComponent() {
  class Certificate {
    from: string;
    major: string;
    time: string;
    link: string;
    constructor(from: string, time: string, major: string, link: string) {
      this.from = from;
      this.time = time;
      this.major = major;
      this.link = link;
    }
  }
  function ShowCertificate({
    certificate,
    delay,
  }: {
    certificate: Certificate;
    delay?: number;
  }) {
    const { from, link, major, time } = certificate;
    return (
      <a
        href={link}
        data-aos="fade-down"
        data-aos-delay={delay}
        target="_blank"
        className="hover:bg-slate-400 text-center p-2 rounded-sm border-2 border-slate-600"
      >
        <div className="space-y-1">
          <h4 className="text-sm font-semibold leading-none">{from}</h4>
        </div>
        <div className="flex h-5 items-center space-x-4 text-sm justify-center">
          <div>{major}</div>
          <div>{time}</div>
        </div>
      </a>
    );
  }

  const certificates: Certificate[] = [
    new Certificate(
      "HackerRank",
      "Sep 2023",
      "Javasript Basic",
      "https://drive.google.com/file/d/1B-1Cuu0xP90aZJduZWGDfFk0PPDnbWL9/view?usp=sharing"
    ),
    new Certificate(
      "Refocus",
      "Aug 28, 2023",
      "Core Track Data Analyst",
      "https://drive.google.com/file/d/1NFPAJy-29XvNQ3re8HqeAKWoV8tntM-t/view?usp=sharing"
    ),
    new Certificate(
      "Purwadhika Digital Technology School",
      "Agu 2024",
      "Fullstack Web Development",
      "https://drive.google.com/file/d/1S7jJqBwgf5xmrF5PdF604D0LVyncH8OC/view?usp=sharing"
    ),
  ];
  return (
    <div className="w-full *:mx-4 *:px-4 flex flex-col justify-center items-center py-4 *:text-cente">
      <div className="my-4">
        <h3 className="font-semibold text-2xl">Certificate</h3>
      </div>
      <div className="w-full grid grid-rows gap-4 py-4 px-2">
        <EachUtils
          of={certificates}
          render={(e, i) => <ShowCertificate certificate={e} delay={i * 300} />}
        />
      </div>
    </div>
  );
}
