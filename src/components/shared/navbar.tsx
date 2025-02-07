// components/Navbar.tsx
"use client";

import Link from "next/link";
import {  signOut } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback} from "@/components/ui/avatar";

const Navbar = () => {
//   const { data: session } = useSession();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-orange-400 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-white hover:text-gray-400">
          MyWebsite
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/contactUs" className="hover:text-gray-400">
            Contact Us
          </Link>
        </div>

        {/* Right Side: Authentication */}
        <div className="flex items-center space-x-4">
          {/* {session ? ( */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer">
                  {/* <AvatarImage src={session.user?.image || "/default-avatar.png"} alt="User Avatar" /> */}
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 text-white p-2">
                <DropdownMenuItem>
                  <Link href="/dashboard" className="block w-full">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          {/* ) : ( */}
            <Link href="/login"  className="border-white text-white">
              Login
            </Link>
          {/* )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
