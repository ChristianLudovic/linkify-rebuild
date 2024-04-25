"use client"

import Announcement from "@/components/basis/annoucement";
import NavBar from "@/components/basis/navBar";
import ContactSection from "@/components/layout/contactSection";
import FooterSection from "@/components/layout/footerSection";
import Hero from "@/components/layout/hero";
import MainSection from "@/components/layout/mainSction";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Announcement />
      <NavBar />
      <Hero />
      <MainSection />
      <ContactSection />
      <FooterSection />
      
    </>
  );
}
