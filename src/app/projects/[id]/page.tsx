import ProjectLayouts from "@/app/sections/Projects/ProjectLayout";
import { Game } from "@/app/sections/Projects/tiktok-game";
import projects from "@/data/projects.json";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const projectsId = projects.map((project) => ({
    id: project.id,
  }));

  return projectsId;
}

function getProject(id: string) {
  const project = projects.find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  return project;
}

export default function ProjectsDetail({ params }: Props) {
  const project = getProject(params.id);

  const children = (() => {
    switch (project.id) {
      case "tiktok-game":
        return {
          introChildren: (
            <Link className="mt-4 inline-flex" href="#demo">
              <button className="bg-slate-900 text-white font-semibold px-8 shadow-md py-2 rounded-md">
                Demo
              </button>
            </Link>
          ),
          children: (
            <section id="demo" className="mt-12">
              <h3 className="text-4xl lg:text-5xl font-bold text-custom-dark">
                Demo
              </h3>
              <Game />
            </section>
          ),
        };
      default:
        return {
          introChildren: undefined,
          children: undefined,
        };
    }
  })();

  return (
    <ProjectLayouts
      title={project.name}
      imgSrc={project.image}
      introChildren={children?.introChildren}
      subtitle={project.description.subtitle}
      description={project.description.full}
      technologhy={project.technology}
    >
      {children.children}
    </ProjectLayouts>
  );
}
