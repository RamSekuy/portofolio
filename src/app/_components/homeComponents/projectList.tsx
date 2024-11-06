import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";

export class Project {
  img: string;
  title: string;
  desc: string;
  github: string;
  website: string;

  constructor(
    img: string,
    title: string,
    desc: string,
    github: string,
    website: string
  ) {
    this.img = img;
    this.title = title;
    this.desc = desc;
    this.github = github;
    this.website = website;
  }
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Drawer>
      <DrawerTrigger>
        <Card
          data-aos="fade-right"
          className="w-full p-2 hover:border-green-800 border-2"
        >
          <Image src={p.img} height={12800} width={12800} alt={p.title} />
          <h3 className="text-center font-bold my-2">{p.title}</h3>
        </Card>
      </DrawerTrigger>

      <DrawerContent className="items-center px-4">
        <DrawerHeader>{p.title}</DrawerHeader>
        <DrawerDescription>{p.desc}</DrawerDescription>
        <DrawerFooter className="py-4 flex flex-row">
          <Link href={p.github}>
            <Button>Github</Button>
          </Link>
          {p.website && (
            <Link href={p.website} target="_blank">
              <Button>Website</Button>
            </Link>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
