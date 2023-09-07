import { Boring, Projects, Greeting, Quotes, Work } from "./sections/Home/";

export default function Home() {
  return (
    <main>
      <Greeting />
      <div className="max-w-6xl flex flex-col mx-auto">
        <Quotes />
        <Work />
        <Boring />
        {/* <Projects /> */}
      </div>
    </main>
  );
}
