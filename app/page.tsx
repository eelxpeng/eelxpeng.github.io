import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Research from "@/components/research";
import Demos from "@/components/demos";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Research />
      <Demos />
      {/* <Skills /> */}
      {/* <Contact /> */}
    </main>
  );
}
