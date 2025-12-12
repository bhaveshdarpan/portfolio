import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Indradhanu Website Modernization",
    description: "A complete redesign of Indradhanu's digital identity and user experience.",
    imageSrc: "/indradhanu.png",
    altText: "Indradhanu Project Screenshot",
    tags: ["UI Design", "UX", "Frontend Engineering"],
    // link: "https://indradhanu-project.com",
  },
  {
    title: "Bicycle Parking at IIT Delhi",
    description: "Solving bicycle parking challenges through user-centered design",
    imageSrc: "/work/bicycle-parking.svg",
    altText: "Bicycle Parking at IIT Delhi",
    tags: ["User Research", "Design Thinking"],
    link: "/bicycleparking",
  },
  {
    title: "Harvest 2059: An Educational Tabletop Game",
    description: "A systems-heavy tabletop game exploring speculative futures and resource trade-offs.",
    imageSrc: "/IMG-20240313-WA0012.png",
    altText: "Harvest 2059 Game Image",
    tags: ["Game Design", "Prototyping", "Playtesting"],
    // link: "/harvest2059",
  },
  {
    title: "Hostel Room Furniture Design",
    description: "Designing ergonomic and modular room furniture based on ethnographic insights.",
    imageSrc: "/IMG-20240313-WA0012.png",
    altText: "Hostel Furniture Project Illustration",
    tags: ["Ethnography", "Ergonomics", "3D Modeling"],
    // no link → upcoming
  },
  {
    title: "Anthill: Tabletop Game",
    description: "A systems-heavy tabletop game exploring speculative futures and resource trade-offs.",
    imageSrc: "/IMG-20240313-WA0012.png",
    altText: "Anthill Game Image",
    tags: ["Game Design", "Prototyping", "Playtesting"],
    // link: "/anthill",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center justify-center p-8">
      <div className="grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
