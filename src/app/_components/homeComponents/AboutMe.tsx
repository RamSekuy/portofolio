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
    <section className="w-full px-2 flex flex-col py-4">
      <h1 className="text-center font-semibold text-lg">About Me</h1>
      <div className="px-4 py-2 flex flex-col md:flex-row justify-evenly gap-5 md:gap-x-10 self-center w-full">
        <div className="w-full flex justify-end">
          <div className="w-full md:w-max">
            <h2 className="font-semibold">My Skills</h2>
            <ul className="w-full">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript / Typescript</li>
              <li>React Js</li>
              <li>Next Js</li>
              <li>Tailwind</li>
              <li>Express</li>
              <li>Socket IO</li>
              <li>MySQL</li>
              <li>Prisma</li>
            </ul>
          </div>
        </div>
        <div></div>
        <div className="flex flex-col gap-4 w-full">
          <div>
            <h2 className="font-semibold">Education</h2>

            <ul className="w-full">
              <li>SMAIT Almaka</li>
              <li>Refocus (Data Analyst)</li>
              <li>Purwadhika (Fullstack Web Dev)</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Certificate</h2>

            <ul className="w-full">
              {certificates.map((e, i) => (
                <li className="hover:text-orange-700" key={e.url}>
                  <a href={e.url} target="_blank">
                    {e.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
