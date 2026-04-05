import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Projects />
      <Contact />
    </main>
  );
}
