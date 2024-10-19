import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gasschutzkorps.ch | Home",
  description: "Gasschutzkorps der Freiwilligen Feuerwehr der Stadt Zug.",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
