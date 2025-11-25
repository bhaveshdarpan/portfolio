import { AspectRatio } from "@/components/ui/aspect-ratio";

const photos = [
  {
    title: "Scarlet Bloom in the Mist",
    hoverText: "A vivid red flower standing out against the foggy Shillong Peak backdrop",
    src: "/fun/flower-at-shillong-peak.jpeg",
  },
  {
    title: "Riverside Calm at Jibhi",
    hoverText: "A peaceful view of flowing water, forest cabins, and mountain greenery",
    src: "/fun/jibhi.jpeg",
  },
  {
    title: "Nature's Little Wanderer",
    hoverText: "A close-up look at a beautifully patterned snail exploring mossy terrain",
    src: "/fun/nature's-crawler-snail.jpeg",
  },
  {
    title: "Waves at Palolem Beach",
    hoverText: "Gentle waves washing over rocks on the sandy shores of Goa",
    src: "/fun/palolem-beach-goa.jpeg",
  },
  {
    title: "Sunlight Through the Blossoms",
    hoverText: "Sun rays filtering through vibrant flowers against a warm brick backdrop",
    src: "/fun/ray-of-sunshine.jpeg",
  },
  {
    title: "Monsoon Commute",
    hoverText: "Raindrops blurring the evening city lights on a wet drive",
    src: "/fun/rain.jpeg",
  },
  {
    title: "Reflected Hostel",
    hoverText: "The red brick hostel building mirrored perfectly in a puddle",
    src: "/fun/reflection-of-my-hostel.jpeg",
  },
  {
    title: "Symmetrical Gardens",
    hoverText: "A perfectly aligned garden pathway with a central water channel",
    src: "/fun/symmetry-garden.jpeg",
  },
];

export default function Photography() {
  return (
    <section id="photography" className="py-4 sm:py-4 lg:py-8 w-full max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-medium">Photography</h1>
      <p className="text-muted-foreground mt-2 mb-8">A collection of moments captured through my lens.</p>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {photos.map(({ title, hoverText, src }, index) => (
          <div key={index} className="group relative">
            <AspectRatio ratio={4 / 3} className="relative rounded-xl overflow-hidden">
              <img src={src} alt={title} className="object-cover" />

              {/* <PhotoLabel title={title} description={hoverText} /> */}
              {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-white text-center text-sm">
                {hoverText}
              </div> */}
            </AspectRatio>
          </div>
        ))}
      </div>
    </section>
  );
}
