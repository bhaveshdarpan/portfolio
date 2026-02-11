import ProjectHeader from "./ProjectHeader";
import ProjectShowcase from "./ProjectShowcase";

const indradhanuIdentityHeader = {
  title: "Indradhanu & Pride Festival Visual Identity",
  subtitle: "A multi-medium visual campaign designed to build awareness and drive participation for a student-led annual pride festival.",
  team: ["Team of 5 Designers"],
  tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
  // faculty: "Prof. Srinivasan Venkataraman",
  role: "Head of Creative Media and Outreach, Visual Designer",
  duration: "Dec 2023 - Jan 2024 (6 weeks)",
  location: "New Delhi, India",
};

const slides = [
  {
    src: "/work/indradhanu-identity/context.svg",
    alt: "Context",
  },
];

export default function IndradhanuBranding() {
  return (
    <div>
      <ProjectHeader {...indradhanuIdentityHeader} />
      <ProjectShowcase slides={slides} />
    </div>
  );
}
