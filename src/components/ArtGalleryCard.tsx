interface ArtGalleryCardProps {
  title: string;
  colorClass: string;
  year: string;
  imageUrl?: string; 
}

export default function ArtGalleryCard({ title, colorClass, year, imageUrl }: ArtGalleryCardProps) {
  return (
    <div className="group relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 shadow-xl border border-white/5">
      {/* Mock Box Container */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Dark gradient at the bottom so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hover Info (Changed to sans-serif and sized down slightly) */}
      <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="font-sans font-bold text-xl md:text-2xl text-white mb-1">
          {title}
        </h3>
        <p className="text-white/70 font-sans text-xs md:text-sm font-semibold tracking-widest">
          {year}
        </p>
      </div>
    </div>
  );
}