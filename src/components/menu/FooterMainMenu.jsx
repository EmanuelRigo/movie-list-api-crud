"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CiCircleList, CiSquarePlus } from "react-icons/ci";
import SearchBar from "./SearchBar";

export const FooterMainMenu = () => {
  const router = useRouter();

  const pathname = usePathname();

  return (
    <div className="w-full flex flex-col gap-4 justify-between ">
      {pathname == "/" ? (
        <Link
          style={{ fontSize: "4rem" }}
          className="bg-orange-500 rounded-lg  h-36 flex w-full justify-center items-center text-2xl"
          href="/list"
        >
          <CiCircleList />
        </Link>
      ) : (
        <Link href="/">Home</Link>
      )}
      <Link
        style={{ fontSize: "4rem" }}
        className="bg-orange-500 rounded-lg w-full h-36 flex justify-center items-center "
        href="/add-movie"
      >
        <CiSquarePlus />
      </Link>
      <div>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
};
