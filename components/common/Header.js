"use client";
import config from "@/config";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const navItems = [
  { label: "Faqs", href: "/faqs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" href="/">
          {config.appName}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {session ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="User avatar"
                  src={session.user?.image || "/default-avatar.png"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="menu-title px-4 py-2">
                <span className="font-semibold">
                  Welcome, {session.user?.name}
                </span>
              </li>

              {session.user?.role === "admin" && (
                <li>
                  <Link href="/admin/dashboard">Admin Dashboard</Link>
                </li>
              )}

              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>

              <li>
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link className="btn btn-primary" href={config.auth.loginUrl}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
