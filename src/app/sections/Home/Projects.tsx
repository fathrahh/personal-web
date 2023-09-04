import Button from "@/components/Button";

export default function Projects() {
  return (
    <section className="min-h-screen">
      <div className="w-full flex items-center">
        <hr className="flex-1" />
        <h3 className="px-7 border-x-[1px] border-custom-outline">
          🚀 MY CRAFT
        </h3>
        <hr className="flex-1" />
      </div>

      {/* Project section */}
      <div className="grid grid-cols-12 gap-10 mt-16">
        {new Array(4).fill(null).map((_, idx) => (
          <div
            key={idx}
            className="col-span-6 p-14 rounded-[30px] bg-[#F5F3FF] flex flex-col gap-8"
          >
            <div className="w-full aspect-square bg-[#E0DBFF] rounded-xl"></div>
            <p>Saas website for unique start-up brands</p>
            <Button>Read Case Study</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
