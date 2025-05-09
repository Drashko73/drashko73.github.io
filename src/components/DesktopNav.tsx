import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/blog', label: 'Blog' },
];

export function DesktopNav() {
  return (
    <div className="hidden md:flex items-center">
      <ul className="flex space-x-6 mr-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-primary-200">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </div>
  );
}
