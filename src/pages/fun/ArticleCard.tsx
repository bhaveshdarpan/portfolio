import { Card, CardContent, CardTitle, CardDescription, CardHeader } from "@/components/ui/card";

export function ArticleCard({ img, alt, title, description, blogLink }: { img: string; alt: string; title: string; description: string; blogLink: string }) {
  return (
    <Card
      role="link"
      tabIndex={0}
      className="cursor-pointer hover:shadow-md transition-all duration-300 pt-0"
      onClick={() => window.open(blogLink, "_blank", "noopener,noreferrer")}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.open(blogLink, "_blank", "noopener,noreferrer");
        }
      }}>
      <CardContent className="px-0">
        <img src={img} alt={alt} className="aspect-video h-64 w-full rounded-t-xl object-cover" />
      </CardContent>

      <CardHeader>
        <CardTitle className="text-xl text-primary font-semibold leading-snug text-left">{title}</CardTitle>
        <CardDescription className="text-base mt-2 leading-relaxed text-left">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
