import { ArticleCard } from "./ArticleCard";

export default function Articles() {
  const articles = [
    {
      img: "/indian-heritage.webp",
      alt: "Indian Heritage",
      title: "Indian Heritage: Diversity in Design, Culture and Stories",
      description:
        "A reflective account of my visit to the National Crafts Museum, exploring India’s rich tribal art, textiles, architecture, and cultural heritage through an immersive design lens",
      blogLink: "https://medium.com/@bhaveshdarpan/indian-heritage-diversity-in-design-culture-and-stories-427f87884fed",
    },
    {
      img: "/iaad-biennale.webp",
      alt: "IAAD Biennale",
      title: "IAAD Biennale: Indianness in India's Art, Design and Culture",
      description:
        "A personal narrative of experiencing the IAADB Biennale, uncovering India’s diverse design traditions—from ancient architecture to community-built baolis.",
      blogLink: "https://medium.com/@bhaveshdarpan/iaad-biennale-indianness-in-indias-art-design-and-culture-6b9898d45376",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 w-full max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-semibold">Articles</h2>
      <p className="text-muted-foreground mt-2 mb-8 text-base">Stories and reflections from my experiences and observations.</p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
