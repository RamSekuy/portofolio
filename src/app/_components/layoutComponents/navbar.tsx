import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full text-center sticky top-0 px-4 flex bg-blue-900 py-2 text-sm md:text-base z-40">
      <div className="w-full flex justify-start gap-4">
        <Link href="#home" className="text-white">
          Home
        </Link>
        <Link href="#me" className="text-white">
          About Me
        </Link>
        <Link href="#projects" className="text-white">
          Projects
        </Link>
      </div>
      <div className="w-full flex justify-end">
        <Link
          href="#contact"
          className="bg-yellow-400 px-2 rounded-full text-black"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
