import React from "react";
import Nabar from "../ui/home/navbar-link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nabar />
      {children}
    </>
  );
}
