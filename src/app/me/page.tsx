import ExperienceList from "@/components/ExperienceList";
import experiences from "@/data/experience.json";
import projects from "@/data/projects.json";
import studyCase from "@/data/study-cases.json";
import { cn } from "@/utils/helper";

export default function Page() {
  const hasWork = experiences.some((experience) => !experience.status);

  return (
    <main className="w-full px-6 mt-6 lg:mt-0 lg:px-0  lg:overflow-y-hidden">
      <div className="max-w-screen-xl mx-auto lg:flex lg:gap-6">
        <div className="flex-1">
          <h2 className="text-3xl sm:5xl font-bold leading-tight">
            Muhammad Fathurrahman
          </h2>
          <h3 className="font-semibold text-sm lg:text-base">
            Ex Developer Intern at{" "}
            <span className="hover:before:w-full relative before:absolute before:w-0 before:bottom-0 before:h-[1.2px] before:bg-red-500 before:rounded-full before:transition-all">
              Telkom Indonesia
            </span>
          </h3>
          <p className="mt-6 max-w-md text-slate-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quis
            architecto aperiam?
          </p>
          <p className="mt-6 max-w-md text-slate-500 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            voluptates perspiciatis, nulla recusandae facilis repellendus
            dolores omnis corrupti laudantium debitis deserunt id asperiores
            quas adipisci dignissimos hic aperiam. Architecto odio maxime
            obcaecati laborum voluptatibus quia rerum eaque perspiciatis tenetur
            harum?
          </p>
        </div>
        <div className="flex-1 mt-6 lg:mt-0">
          <div className="transition-all hover:bg-slate-50 hover:outline-[2px] hover:outline-slate-100 px-6 py-4 rounded-lg">
            <h3 className="text-xl font-bold">Experience</h3>
            <ul className="mt-6">
              {hasWork && <ExperienceList isActive>What Next?</ExperienceList>}
              {experiences.map((experience, idx) => (
                <ExperienceList
                  key={idx}
                  isFirst={idx === 0}
                  isActive={experience.status}
                >
                  <h4 className="text-lg font-semibold">
                    {experience.company}
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-gray-400 text-sm">
                      <span>{experience.from}</span>-
                      <span>{experience.to}</span>
                    </div>
                    <span className="font-bold">~</span>
                    <span>{experience.position}</span>
                  </div>
                  <p>{experience.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technology.map((tech) => (
                      <span
                        className="px-4 bg-rose-50 text-rose-400 border-[1px] border-rose-100 font-semibold rounded-full text-sm"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </ExperienceList>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
