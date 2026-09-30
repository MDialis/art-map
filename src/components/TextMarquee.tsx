export default function TextMarquee({ text, direction = "left" }: { text: string, direction?: "left" | "right" }) {
  // Repeat the text a few times to ensure it covers the screen width for the infinite loop
  const repeatedText = `${text} ${text} ${text} ${text}`;
  
  return (
    <div className="relative flex overflow-x-hidden whitespace-nowrap group">
      <div 
        className={`animate-marquee flex items-center ${direction === 'right' ? 'reverse' : ''}`}
        style={{ animation: `marquee 25s linear infinite ${direction === 'right' ? 'reverse' : 'normal'}` }}
      >
        <span className="font-sans text-sm md:text-lg tracking-[0.3em] text-base-content/40 uppercase mx-4">
          {repeatedText}
        </span>
      </div>
      
      {/* Tailwind config requires adding this keyframe in globals.css or tailwind.config:
          @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
      */}
    </div>
  );
}