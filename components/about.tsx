"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a Senior Applied Scientist in Amazon AWS. I completed my Ph.D. at the Hong Kong University of Science and Technology in 2019.
        I have worked primarily on large language models and generative AI.
        As a science lead, I have initiated and successfully launched two products: <span className="font-medium">Amazon CodeWhisperer</span>  and <span className="font-medium">Amazon Q in IDE</span>.
        I am passionate about doing original and impactful research in AI and ML, and enjoy working with smart people on exciting projects.
        I like to create proof-of-concepts and new products with the latest technologies.
      </p>

      <p>
        I think learning, exploration and creation are life-time endeavours.
      </p>
    </motion.section>
  );
}
