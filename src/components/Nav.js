"use client"
import Link from "next/link";
import { Button } from "../@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "../@/components/ui/navigation-menu"
import { ThemeToggle } from "./theme-toggle";
import { FaRegUser } from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";

export default function Nav() {
  return (
    <nav className="h-full w-44 flex flex-col bg-primary-foreground p-4 gap-5 items-center border">
        <Link href={'/'}><SiHomebridge fontSize={'5rem'} /></Link>
        <Button className="gap-2 py-8"> <FaRegUser /> Meus Clientes</Button>
    </nav>
  );
}
