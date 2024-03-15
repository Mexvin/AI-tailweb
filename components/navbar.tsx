import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import dynamic from "next/dynamic";
const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
