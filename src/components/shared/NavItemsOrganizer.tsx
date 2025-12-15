'use client';

import { usePathname } from 'next/navigation'
import { headerLinksOrganizer } from "@/constants";
import Link from "next/link";
import React from 'react'

interface HeaderLink {
  route: string;
  label: string;
}

const NavItemsOrganizer = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinksOrganizer.map((link: HeaderLink) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`flex-center p-medium-16 whitespace-nowrap ${isActive ? 'text-primary-500' : ''}`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItemsOrganizer