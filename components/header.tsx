"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "News",
    href: "/bitcoin-association-switzerland",
    children: [
      { name: "News", href: "/bitcoin-association-switzerland" },
      { name: "Archive", href: "/archive" },
    ],
  },
  {
    name: "Events",
    href: "/roadshow-2025",
    children: [
      { name: "Roadshow 2025", href: "/roadshow-2025" },
      { name: "Bitcoin Meetup (Zurich)", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/" },
      { name: "Bitcoin Meetup Geneva", href: "https://www.meetup.com/Bitcoin-Meetup-Geneva" },
      { name: "Bitcoin Meetup Luzern", href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/" },
      { name: "Bitcoin Meetup Neuchatel", href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/" },
      { name: "Bitcoin Meetup Basel", href: "https://www.meetup.com/bitcoin-meetup-basel/" },
    ],
  },
  {
    name: "Membership",
    href: "/private",
    children: [
      { name: "Private", href: "/private" },
      { name: "Corporate", href: "/corporate" },
      { name: "Our Corporate Members", href: "/our-corporate-members" },
    ],
  },
  {
    name: "Participate",
    href: "/meetups-events",
    children: [
      { name: "Meetups & Events", href: "/meetups-events" },
    ],
  },
  {
    name: "About",
    href: "/about-1",
    children: [
      { name: "About", href: "/about-1" },
      { name: "Board", href: "/board" },
      { name: "Finances", href: "/finances" },
      { name: "Statutes", href: "/statutes" },
      { name: "Media Kit", href: "/media-kit" },
      { name: "Contact", href: "/contact-1" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header id="header" className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center py-6">
          <Link href="/" className="block">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
              alt="Bitcoin Association Switzerland"
              width={280}
              height={75}
              className="h-auto w-[280px]"
              priority
            />
          </Link>
        </div>
        <nav className="flex justify-center border-t border-white/20">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-5 py-4 text-sm font-normal text-white hover:text-white/80 transition-colors uppercase tracking-wide">
                      {item.name}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 min-w-[220px] bg-white shadow-lg py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-teal hover:bg-gray-50 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-5 py-4 text-sm font-normal text-white hover:text-white/80 transition-colors uppercase tracking-wide"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="block">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
              alt="Bitcoin Association Switzerland"
              width={180}
              height={48}
              className="h-auto w-[180px]"
              priority
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-white shadow-lg">
            <nav className="px-4 py-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.children ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full py-2 text-sm font-normal text-gray-800 uppercase tracking-wide"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                        </button>
                        {openDropdown === item.name && (
                          <div className="pl-4 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block py-2 text-sm text-gray-600 hover:text-teal"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2 text-sm font-normal text-gray-800 uppercase tracking-wide"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}