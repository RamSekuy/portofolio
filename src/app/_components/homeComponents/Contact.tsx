import Link from "next/link";
import DiscordSvg from "../svgComponents/discordSvg";
import EmailSvg from "../svgComponents/emailSvg";
import WaSvg from "../svgComponents/waSvg";

export default function Contact() {
  const contactList = [
    { href: "https://wa.me/085772930332", svg: <WaSvg /> },
    {
      href: "https://discord.com/channels/@me/699907281432739850",
      svg: <DiscordSvg />,
    },
    { href: "mailto:ramaalim555@gmail.com", svg: <EmailSvg /> },
  ];
  return (
    <section className="w-full px-2 flex flex-col py-4" id="contact">
      <h1 className="text-center font-semibold text-lg mb-4">Contact Me</h1>
      <div className="flex justify-center gap-x-4">
        {contactList.map((e, i) => (
          <Link key={i} href={e.href}>
            {e.svg}
          </Link>
        ))}
      </div>
    </section>
  );
}
