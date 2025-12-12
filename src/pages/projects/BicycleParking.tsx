import ProjectHeader from "./ProjectHeader";
import ProjectShowcase from "./ProjectShowcase";

const bicycleParkingHeader = {
  title: "Bicycle Parking at IIT Delhi",
  subtitle: "How can we tackle the issue of growing number of bicycles and limited space for its parking?",
  team: ["Niharika Bhardwaj", "Bhavesh Darpan", "Himanshu Pipal", "Shivangi Anand"],
  tools: ["Figma", "Adobe Illustrator", "Office Suite"],
  faculty: "Prof. Srinivasan Venkataraman",
  role: "User Researcher, Designer",
  duration: "Sept 2023 - Nov 2023 (12 weeks)",
  location: "New Delhi, India",
};

const slides = [
  {
    src: "/work/bicycle-parking/context.svg",
    alt: "Context",
  },
  {
    src: "/work/bicycle-parking/user-research.svg",
    alt: "User Research",
  },
  {
    src: "/work/bicycle-parking/pain-pleasure-summary.svg",
    alt: "Pain Pleasure Summary",
  },
  {
    src: "/work/bicycle-parking/formulating-needs.svg",
    alt: "Formulating Needs",
  },
  {
    src: "/work/bicycle-parking/problem-statement.svg",
    alt: "Problem Statement",
  },
  {
    src: "/work/bicycle-parking/ideation.svg",
    alt: "Ideation",
  },
  {
    src: "/work/bicycle-parking/final-concepts.svg",
    alt: "Final Concepts",
  },
  {
    src: "/work/bicycle-parking/key-takeaways.svg",
    alt: "Key Takeaways",
  },
  // {
  //   src: "/work/bicycle-parking/pain-pleasure-summary.svg",
  //   alt: "Pain Pleasure Summary",
  // caption: "Initial user research and interviews conducted at IIT Delhi campus.",
  // },
];

export default function BicycleParking() {
  return (
    <div>
      <ProjectHeader {...bicycleParkingHeader} />
      <ProjectShowcase slides={slides} />
    </div>
  );
}
