export default function ArtistStatement({ lang }: { lang: string }) {
  const content = {
    en: "Just a collection of personal sketches, digital experiments, and late-night concepts. Welcome to my creative sandbox.",
    pt: "Apenas uma coleção de rascunhos pessoais, experimentos digitais e ideias da madrugada. Bem-vindo à minha área de testes criativa."
  };

  return (
    <section className="max-w-2xl mx-auto py-16 px-6 text-center">
      {/* Utilizing base-content for text to seamlessly adapt to light/dark themes */}
      <p className="font-sans text-xl md:text-2xl font-medium text-base-content/80 leading-relaxed">
        {content[lang as keyof typeof content]}
      </p>
      {/* Utilizing base-content for borders */}
      <div className="mt-8 w-16 mx-auto border-t-2 border-dashed border-base-content/20" />
    </section>
  );
}