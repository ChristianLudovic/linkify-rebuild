"use client"

import Announcement from "@/components/basis/annoucement";
import "../../app/globals.css"
import NavBar from "@/components/basis/navBar"
import ContactSection from "@/components/layout/contactSection";
import FooterSection from "@/components/layout/footerSection";
import NbaHeroSection from "./components/layout/nbaHeroSection";
import NbaMainSection from "./components/layout/nabMainSection";



export default function NbaPage() {
  return (
    <>
      <NavBar/>
      <NbaHeroSection/>
      <NbaMainSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  );
}