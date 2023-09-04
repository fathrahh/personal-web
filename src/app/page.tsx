import Button, { button } from "@/components/Button";
import { Greeting, Quotes } from "./sections/Home/";
import Projects from "./sections/Home/Projects";

export default function Home() {
  return (
    <main>
      <Greeting />
      <div className="max-w-6xl flex flex-col mx-auto">
        <Quotes />
        <Projects />
      </div>
    </main>
  );
}
