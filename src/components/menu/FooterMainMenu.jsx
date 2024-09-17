"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CiCircleList, CiSquarePlus } from "react-icons/ci";

export const FooterMainMenu = () => {
  const router = useRouter();

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="w-full flex gap-4 justify-between ">
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
    </div>
  );
};
