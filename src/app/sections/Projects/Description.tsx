export interface DescriptionProps {
  description: string;
}

export default function Description({ description }: DescriptionProps) {
  return (
    <section className="mt-12">
      <h3 className="text-4xl lg:text-5xl font-bold text-custom-dark">
        Description
      </h3>
      <div
        className="mt-6 text-lg max-w-3xl"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </section>
  );
}
