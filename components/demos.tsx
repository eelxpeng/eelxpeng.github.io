"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { demosData } from "@/lib/data";
import Demo from "./demo";
import { useSectionInView } from "@/lib/hooks";

export default function Demos() {
  const { ref } = useSectionInView("Demo", 0.5);

  return (
    <section ref={ref} id="demos" className="scroll-mt-28 mb-28">
      <SectionHeading>Demo</SectionHeading>
      <div className="grid grid-cols-2 gap-4">
        {demosData.map((project, index) => (
          <React.Fragment key={index}>
            <Demo {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
