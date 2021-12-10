import React from "react";
import Image from "next/image";
import { NavIcon } from "./NavIcon";
import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  ThumbUpIcon
} from "@heroicons/react/outline";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" sm:px-6 px-1">
      <div className="flex items-center justify-between lg:flex-row flex-col">
        <div className="flex flex-grow justify-evenly max-w-4xl mt-5">
          <NavIcon text="home" Icon={HomeIcon} />
          <NavIcon text="trending" Icon={LightningBoltIcon} />
          <NavIcon text="verified" Icon={BadgeCheckIcon} />
          <NavIcon text="collections" Icon={CollectionIcon} />
          <NavIcon text="search" Icon={SearchIcon} search/>
          <NavIcon text="account" Icon={UserIcon} />
        </div>
        <Image
          src="https://links.papareact.com/ua6"
          alt="image"
          width={200}
          height={100}
        />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
