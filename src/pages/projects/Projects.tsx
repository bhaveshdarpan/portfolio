import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Indradhanu Website Modernization",
    description: "User-centered Design, UI Design,Frontend Engineering",
    imageSrc: "/indradhanu.png",
    altText: "Indradhanu Project Screenshot",
  },
  {
    title: "Hostel Room Furniture Design",
    description: "Ethnographic Research, Ergonomic Design, 3D Modeling",
    imageSrc: "/IMG-20240313-WA0012.png",
    altText: "Hostel Furniture Project Illustration",
  },
  {
    title: "Harvest 2059: Tabletop Game",
    description: "Experiential Game Design, Prototyping, Playtesting",
    imageSrc: "/IMG-20240313-WA0012.png",
    altText: "Harvest 2059 Game Image",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center justify-center p-8">
      {/* <h1 className="text-3xl font-medium mb-8">Projects</h1> */}
      <ul role="list" className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2">
        {projects.map(({ title, description, imageSrc, altText }) => (
          <li key={title} className="col-span-1">
            <Card className="flex flex-col rounded-lg shadow-sm overflow-hidden py-0 transition-transform duration-400 ease-in-out hover:scale-104">
              {/* Image container with overflow-hidden to clip the scale effect */}
              <div className="overflow-hidden h-lg relative">
                <img
                  src={imageSrc}
                  alt={altText}
                  loading="lazy"
                  className="object-cover transition-transform duration-400 ease-in-out hover:scale-104"
                />
              </div>
              <CardContent className="flex flex-col flex-1 justify-center pb-4">
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
