import ProjectHeader from "./ProjectHeader";
import ProjectShowcase from "./ProjectShowcase";

const indradhanuWebsiteHeader = {
  title: "Indradhanu Website Modernization",
  subtitle: "How can we improve the usability, visual clarity, and long-term manitainability of Indradhanu's website?",
  team: ["Individual"],
  tools: ["Figma", "React", "Google Workspace Suite", "GitHub"],
  // faculty: "Prof. Srinivasan Venkataraman",
  role: "Interface Designer, Frontend Engineer",
  duration: "Dec 2024 - Jan 2025 (6 weeks)",
  location: "Pune, India",
};

const slides = [
  {
    src: "/work/indradhanu-website/context.svg",
    alt: "Context",
  },
  {
    src: "/work/indradhanu-website/understanding-gaps.svg",
    alt: "Understanding Gaps",
  },
  {
    src: "/work/indradhanu-website/goals-and-roadmap.svg",
    alt: "Goals and Roadmap",
  },
  {
    src: "/work/indradhanu-website/system-strategy-and-design.svg",
    alt: "System Strategy and Design",
  },
  {
    src: "/work/indradhanu-website/outcomes-and-reflection.svg",
    alt: "Outcomes and Reflection",
  },
  // {
  //   src: "/work/bicycle-parking/pain-pleasure-summary.svg",
  //   alt: "Pain Pleasure Summary",
  // caption: "Initial user research and interviews conducted at IIT Delhi campus.",
  // },
];

export default function IndradhanuWebsite() {
  return (
    <div>
      <ProjectHeader {...indradhanuWebsiteHeader} />
      <ProjectShowcase slides={slides} />
    </div>
  );
}
