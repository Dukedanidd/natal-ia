import Hero from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Pricing />
    </main>
  );
}
