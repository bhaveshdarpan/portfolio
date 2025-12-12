import React from "react";
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@/components/ui/item";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({ title, description, imageSrc, altText, tags, link }: ProjectCardProps) {
  const isDisabled = !link;

  const content = (
    <Item
      variant="outline"
      className={cn("hover:scale-[1.02] transition-transform duration-300 relative cursor-pointer", isDisabled && "cursor-not-allowed hover:scale-100")}>
      <ItemHeader className="overflow-hidden rounded-sm relative">
        <img src={imageSrc} alt={altText} className={cn("aspect-[4/3] w-full object-cover transition-all duration-300", isDisabled && "brightness-50")} />

        {isDisabled && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <span className="text-foreground text-xl md:text-2xl font-semibold tracking-wide">UPCOMING</span>
              <div className="mt-2 h-1 w-16 mx-auto bg-foreground/60 rounded-full" />
            </div>
          </div>
        )}
      </ItemHeader>

      <ItemContent className="items-center">
        <ItemTitle className={cn("text-lg md:text-xl font-medium", isDisabled && "text-muted-foreground")}>{title}</ItemTitle>
        <ItemDescription className={cn("text-sm md:text-base", isDisabled && "text-muted-foreground")}>{description}</ItemDescription>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className={cn(isDisabled && "opacity-60")}>
              {tag}
            </Badge>
          ))}
        </div>
      </ItemContent>
    </Item>
  );

  return link ? <a href={link}>{content}</a> : content;
}
