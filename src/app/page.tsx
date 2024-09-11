import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:mr-4 lg:w-1/2 relative">
        <Image
          src={"/profile2.jpg"}
          alt="profile"
          fill
          className="object-contain"
        />
      </div>

      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:6xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>

        {/* DESC */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innocation and creativity
          converge. With a keen eye for easthetics and a mastery of code, my
          porfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>

        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <Button>View My Work</Button>
          <Button variant={"ghost"} className="ring-1 ring-black">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}
