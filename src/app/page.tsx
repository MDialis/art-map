import dynamic from "next/dynamic";
import { Bodoni_Moda } from "next/font/google";

// --- Static Components ---
import HeroSection from "@/components/HeroSection";
import DraggableCarousel from "@/components/DraggableCarousel";
import DistanceScaler from "@/components/DistanceScaler";
import ArtistStatement from "@/components/ArtistStatement";
import ArtGalleryCard from "@/components/ArtGalleryCard";
import TextMarquee from "@/components/TextMarquee";

// --- Dynamic Components ---
const Contacts = dynamic(() => import("@/components/Contacts"), {
  loading: () => <div className="min-h-[50vh] bg-neutral-900" />,
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-bodoni",
});

// --- Mocked Art Data (Replacing Contentful) ---
const mockArtworks = [
  {
    id: "art-1",
    title: "Midnight Reaper",
    // Using placeholder colors for testing, but you can swap with real URLs
    color: "from-purple-900 to-black",
    year: "2025",
  },
  {
    id: "art-2",
    title: "Neon Dreams",
    color: "from-cyan-900 to-blue-900",
    year: "2026",
  },
  {
    id: "art-3",
    title: "Ethereal Landscape",
    color: "from-emerald-900 to-teal-900",
    year: "2026",
  },
  {
    id: "art-4",
    title: "Crimson Study",
    color: "from-red-900 to-orange-900",
    year: "2024",
  },
];

const dictionaries = {
  en: {
    galleryTitle: "Selected Works",
    viewGallery: "Enter Full Gallery",
  },
  pt: {
    galleryTitle: "Obras Selecionadas",
    viewGallery: "Entrar na Galeria Completa",
  },
};

export default async function ArtMap({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const currentLang = resolvedSearchParams?.lang === "pt" ? "pt" : "en";
  const dict = dictionaries[currentLang];

  const cardWidths = "w-[70vw] md:w-[50vw] lg:w-[30vw]";
  const spacerWidths = "w-[15vw] md:w-[25vw] lg:w-[35vw]";

  return (
    <div className={`flex-1 bg-base-100 text-base-content ${bodoniModa.variable}`}>
      <main>
        {/* Keep your stylized Hero */}
        <HeroSection bodoniModa={bodoniModa} />

        <div className="relative px-5">
          {/* Replaces the corporate About Me */}
          <ArtistStatement lang={currentLang} />

          {/* Replaces the Tech Stack Icons with an editorial marquee */}
          <div className="py-12 border-y border-base-content/10 my-10 overflow-hidden">
            <TextMarquee
              text="CHARACTER DESIGN • CONCEPT ART • DIGITAL ILLUSTRATION • VISUAL DEVELOPMENT • "
              direction="left"
            />
          </div>

          {/* Main Gallery Carousel */}
          <section id="gallery" className="py-10">
            <div className="mx-auto">
              <h2 className="text-5xl font-serif text-center mb-16 tracking-wide">
                {dict.galleryTitle}
              </h2>

              <DraggableCarousel>
                <div className={`${spacerWidths} shrink-0`} />

                {mockArtworks.map((art) => (
                  <DistanceScaler
                    key={art.id}
                    horizontal
                    deform
                    maxScale={1}
                    minScale={0.75}
                    className={`
                      ${cardWidths}
                      shrink-0 relative
                      cursor-grab active:cursor-grabbing
                      transition-transform duration-500
                    `}
                  >
                    <ArtGalleryCard
                      title={art.title}
                      colorClass={art.color}
                      year={art.year}
                    />
                  </DistanceScaler>
                ))}

                <div className={`${spacerWidths} shrink-0`} />
              </DraggableCarousel>
            </div>
          </section>
        </div>

        <Contacts lang={currentLang} />
      </main>
    </div>
  );
}
