import { Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemTitle } from "@/components/ui/item";

import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Indradhanu Website Modernization",
    description: "A complete redesign of Indradhanu’s digital identity and user experience.",
    imageSrc: "/indradhanu.png",
    altText: "Indradhanu Project Screenshot",
    tags: ["UI Design", "UX", "Frontend Engineering"],
  },
  {
    title: "Hostel Room Furniture Design",
    description: "Designing ergonomic and modular room furniture based on ethnographic insights.",
    imageSrc: "/IMG-20240313-WA0012.png",
    altText: "Hostel Furniture Project Illustration",
    tags: ["Ethnography", "Ergonomics", "3D Modeling"],
  },
  {
    title: "Harvest 2059: Tabletop Game",
    description: "A systems-heavy tabletop game exploring speculative futures and resource trade-offs.",
    imageSrc: "/IMG-20240313-WA0012.png",
    altText: "Harvest 2059 Game Image",
    tags: ["Game Design", "Prototyping", "Playtesting"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center justify-center p-8">
      <ItemGroup className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(({ title, description, imageSrc, altText, tags }) => (
          <Item key={title} variant="outline" className="hover:scale-[1.03] transition-transform duration-300">
            <ItemHeader className="overflow-hidden rounded-sm">
              <img src={imageSrc} alt={altText} className="aspect-[4/3] w-full object-cover" />
            </ItemHeader>

            <ItemContent className="items-center">
              <ItemTitle className="text-lg md:text-xl font-medium">{title}</ItemTitle>
              <ItemDescription className="text-sm md:text-base">{description}</ItemDescription>

              <div className="flex flex-wrap gap-2 mt-1">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </section>
  );
}
