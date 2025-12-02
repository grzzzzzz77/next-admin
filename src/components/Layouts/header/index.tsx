"use client";

import Image from "next/image";
import Link from "next/link";
import { useSidebarContext } from "../sidebar/sidebar-context";
import { MenuIcon } from "./icons";
import { UserInfo } from "./user-info";

export function Header() {
  const { toggleSidebar } = useSidebarContext();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-stroke bg-white px-4 py-5 shadow-1 dark:border-stroke-dark dark:bg-gray-dark md:px-5 2xl:px-10">
      <button
        onClick={toggleSidebar}
        className="rounded-lg border px-1.5 py-1 dark:border-stroke-dark dark:bg-[#020D1A] hover:dark:bg-[#FFFFFF1A] "
      >
        <MenuIcon />
      </button>

      <div className="flex flex-1 items-center justify-end gap-2 min-[375px]:gap-4">
        <div className="shrink-0">
          <UserInfo />
        </div>
      </div>
    </header>
  );
}
