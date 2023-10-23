import React from "react";
import Navbar from "./Navbar";
import { ThemeProvider } from "../theme-provider";
import Footer from "./Footer";

export const metadata = {
  title: "...",
  description: "...",
};

export default function BaseLayoutHome({ children }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}
