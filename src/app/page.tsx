import { Greeting, Quotes, Work } from "./sections/Home/";
import Projects from "./sections/Home/Projects";

export default function Home() {
  return (
    <main>
      <Greeting />
      <div className="max-w-6xl flex flex-col mx-auto">
        <Quotes />
        <Work />
        <Projects />
      </div>
    </main>
  );
}
