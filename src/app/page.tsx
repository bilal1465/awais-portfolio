import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { HeroVideo } from "./components/HeroVideo";
import { AwaisPic } from "./components/AwaisPic";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroVideo />
      <div className="flex justify-center py-14">
        <h1 className="text-7xl">Endless Passion for Filming.</h1>
      </div>
      <AwaisPic />
      <div className="flex justify-center items-center py-14">
        <p className="text-xl text-center w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl py-10">Al Ansar</h1>
        <h2 className="pb-8">February 2024 | Calgary, Alberta</h2>
      </div>
    </div>
  );
}
