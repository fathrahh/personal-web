import React from "react";
import Description, {
  DescriptionProps,
} from "@/app/sections/Projects/Description";

import Intro, { IntroProps } from "@/app/sections/Projects/Intro";
import Chip from "@/components/Chip";

interface ProjectLayouts
  extends Omit<IntroProps, "children">,
    DescriptionProps {
  introChildren?: React.ReactNode;
  children?: React.ReactNode;
  technologhy: string[];
}

export default function ProjectLayouts({
  introChildren,
  description,
  imgSrc,
  subtitle,
  title,
  children,
  technologhy,
}: ProjectLayouts) {
  return (
    <main className="lg:gap-6 px mx-auto max-w-screen-xl pt-4 md:pt-24">
      <Intro title={title} imgSrc={imgSrc} subtitle={subtitle}>
        {introChildren}
      </Intro>
      <Description description={description} />
      <section className="mt-12">
        <h3 className="text-4xl lg:text-5xl font-bold text-custom-dark">
          Technology
        </h3>
        <div className="mt-6 flex gap-3">
          {technologhy.map((tech, idx) => (
            <Chip size={"md"} key={idx}>
              {tech}
            </Chip>
          ))}
        </div>
      </section>
      {children}
    </main>
  );
}
