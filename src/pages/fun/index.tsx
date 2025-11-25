import Articles from "./Articles";
import Photography from "./Photography";

export default function Fun() {
  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto w-full">
      <Articles />
      <Photography />
    </div>
  );
}
