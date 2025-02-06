"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ItemDrawer from "./ItemDrawer";
import { SessionProvider } from "next-auth/react";

const UserMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <SessionProvider session={null}>
      <>
        <ItemDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <div>
          <AiOutlineMenu
            style={{ fontSize: "2em" }}
            onClick={() => setDrawerOpen(true)}
            className="cursor-pointer transition"
          />
        </div>
      </>
    </SessionProvider>
  );
};

export default UserMenu;
