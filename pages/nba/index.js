"use client"

import "../../app/globals.css"
import NavBar from "@/components/basis/navBar"
import ContactSection from "@/components/layout/contactSection";
import FooterSection from "@/components/layout/footerSection";
import Hero from "@/components/layout/hero";
import MainSection from "@/components/layout/mainSction";



export default function NbaPage() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <MainSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  );
}