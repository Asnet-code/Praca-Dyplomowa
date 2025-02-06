"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Logout = () => {
  return (
    <div className="text-center flex flex-col items-center pt-10">
      <div
        className="cursor-pointer 
    border-[2px] 
    border-orange-400
    hover:bg-orange-50
      rounded-xl 
      p-4
      w-1/2 
     "
        onClick={() => {
          signOut();
        }}
      >
        Wyloguj
      </div>
    </div>
  );
};

export default Logout;
