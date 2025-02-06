"use client";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <div className="flex justify-center pt-10">
      <div
        className="cursor-pointer 
    border-[2px] 
    border-orange-400
    hover:bg-orange-50
      rounded-xl 
      w-1/4 
      p-4
      text-center
     "
        onClick={() => {
          signOut();
        }}
      >
        Wyloguj się
      </div>
    </div>
  );
};

export default LogoutButton;
