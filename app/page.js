"use client"

import Button from "@/components/basis/button";
import Card from "@/components/basis/card";
import NavBar from "@/components/basis/navBar";
import Swipper from "@/components/basis/swipper";
import Tabs from "@/components/basis/tabs";
import ContactSection from "@/components/layout/contactSection";
import FooterSection from "@/components/layout/footerSection";
import Hero from "@/components/layout/hero";
import MainSection from "@/components/layout/mainSction";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <MainSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
