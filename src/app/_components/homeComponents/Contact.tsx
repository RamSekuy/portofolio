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
    { href: "mailto:ramaalim34@gmail.com", svg: <EmailSvg /> },
  ];
  return (
    <section className="w-full px-2 flex flex-col py-4" id="contact">
      <h1 className="text-center font-semibold text-4xl mb-4">Contact Me</h1>
      <div className="flex justify-center gap-x-4">
        {contactList.map((e, i) => (
          <Link
            key={i}
            href={e.href}
            className="p-5 aspect-square rounded-full hover:bg-slate-400 scale-50 hover:animate-pulse"
          >
            {e.svg}
          </Link>
        ))}
      </div>
    </section>
  );
}
