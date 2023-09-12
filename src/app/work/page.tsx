import { Intro, Game } from "@/app/sections/Projects/tiktok-game/";

export default function Work() {
  return (
    <main className="lg:gap-6 px mx-auto max-w-screen-xl pt-4 md:pt-24">
      <Intro />
      <section className="mt-12">
        <h3 className="text-4xl lg:text-5xl font-bold text-custom-dark">
          Description
        </h3>
        <p className="mt-6 text-lg max-w-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus iure
          dolorem nostrum obcaecati voluptatem repudiandae quod est, maiores
          rerum laborum. Pariatur eos ex corporis fuga? Sapiente, sint eos qui
          eius ad nemo vitae suscipit velit inventore reprehenderit? Officia, ut
          aut!
        </p>
      </section>
      <section id="demo" className="mt-12">
        <h3 className="text-4xl lg:text-5xl font-bold text-custom-dark">
          Demo
        </h3>
        <Game />
      </section>
    </main>
  );
}
