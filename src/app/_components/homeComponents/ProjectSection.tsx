import EachUtils from "../utils/eachUtils";
import { Project, ProjectCard } from "./projectList";
const projectListData = [
  new Project(
    "/images/projectCompanyProfile.png",
    "Company Profile",
    "Build with Next.js and use public api like randomuser.me and pokeapi.deno.dev",
    "https://github.com/RamSekuy/CompanyProfile",
    "https://n0013-company.vercel.app/"
  ),
  new Project(
    "/images/groceries.png",
    "Groceries Website",
    "Built with Next.js for the frontend and Express with Prisma for the backend, using a MySQL database.",
    "https://github.com/AnakUtara/JCWD2704-01/",
    "https://jcwd270401.purwadhikabootcamp.com/?city_id=155"
  ),
  new Project(
    "/images/gu_cards _mobileApp.jpeg",
    "Cards Gallery Mobile App",
    "Built with Flutter using API from Gods Unchained game",
    "https://github.com/RamSekuy/gu_cards/"
  ),
];

export default function ProjectSection() {
  return (
    <section className="w-full flex flex-col py-10 *:my-4" id="projects">
      <h1 className="text-center font-semibold text-4xl">My Projects</h1>
      <div className="w-full px-4 flex flex-wrap justify-center gap-4">
        <EachUtils
          of={projectListData}
          render={(e, i) => <ProjectCard p={e} />}
        />
      </div>
    </section>
  );
}
