'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { headerLinksByRole } from '@/constants';

const NavItems = () => {
  const pathname = usePathname();
  const { user } = useUser();

  const role = user?.publicMetadata?.role as 'USER' | 'ORGANIZER' | undefined;

  if (!role) return null;

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinksByRole[role].map((link) => {
        const isActive = pathname.startsWith(link.route);

        return (
          <li
            key={link.route}
            className={`${isActive ? 'text-primary-500' : ''} flex-center p-medium-16`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
