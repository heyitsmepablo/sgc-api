"use client"
import {ThemeToggle} from "../components/theme-toggle"

export default function Header({props}) {
  return (
    <header className="flex flex-grow items-center w-full p-8 bg-primary-foreground border-b">
      <h1 className=" w-full text-start">{props}</h1>
      <ThemeToggle></ThemeToggle>
    </header>
  );
}
