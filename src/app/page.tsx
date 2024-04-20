'use client'

import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { HeroVideo } from "./components/HeroVideo";
import { IslamicMediaCarousel } from "./components/IslamicMediaCarousel";
import { AutoMediaCarousel } from "./components/AutoMediaCarousel";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <HeroVideo />
      <div className="flex justify-center py-14">
        <h1 className="text-7xl">Endless Passion for Filming.</h1>
      </div>
      <div className="flex justify-center py-14">
        <img src="/media/pics/picofawais.png" className="rounded-lg"/>
      </div>
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
        <h1 className="text-7xl py-10">Islamic Events</h1>        
      </div>
        <IslamicMediaCarousel />      
      <hr className="w-72 h-1 mx-auto my-4 bg-gray-600 border-0 rounded md:my-10"/>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl py-10">Automotive</h1>        
      </div>
        <AutoMediaCarousel />
    </div>
  );
}
