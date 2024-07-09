import Link from "next/link";
import ProjectList from "./projectList";
const projectListData = [
  {
    img: "/images/projectCompanyProfile.png",
    title: "Company Profile",
    desc: "build with next js and use public api like randomuser.me and pokeapi.deno.dev",
    github: "https://github.com/RamSekuy/CompanyProfile",
    website: "https://n0013-company.vercel.app/",
  },
  // {
  //   img: "https://tcg.pokemon.com/assets/img/home/wallpapers/wallpaper-66.jpg",
  //   title: "Cinema Ticket Website",
  //   desc: "website for user to buy ticket online and admin can manage the movie and ticket",
  //   github: "https://github.com/RamSekuy/CompanyProfile",
  //   website: "https://n0013-company.vercel.app/",
  // },
];

export default function Project() {
  return (
    <section className="w-full px-2 flex flex-col py-10" id="projects">
      <h1 className="text-center font-semibold text-lg">My Projects</h1>
      <ProjectList projects={projectListData} />
      <div className="w-full flex justify-center">
        {/* <Link
          href="/project"
          className="p-3 bg-blue-900 rounded-full text-white hover:bg-blue-700 border-2 border-black"
        >
          See More...
        </Link> */}
      </div>
    </section>
  );
}
