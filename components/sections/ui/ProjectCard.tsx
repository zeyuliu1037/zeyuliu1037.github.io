import Image from "next/image";

type ProjectCardProps = {
  title: string;
  image: string;
  duration: string;
  href?: string;
};

export function ProjectCard({
  title,
  image,
  duration,
  href,
}: ProjectCardProps) {
  const CardWrapper = href ? "a" : "div";
  const cardProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      className="relative group block overflow-hidden rounded-2xl bg-[#fdfdfd] transition-shadow hover:shadow-lg border border-gray-100"
    >
      {/* Image Area */}
      <div className="relative aspect-2/1 w-full bg-white p-4 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full flex items-center justify-between px-4 py-1 bg-white/90 backdrop-blur-sm border-t border-gray-100">
        {/* Title */}
        <h4 className="heading-card text-black font-semibold truncate mr-2">{title}</h4>

        {/* Duration */}
        <div className="flex items-center shrink-0">
          <span className="text-meta font-medium">
            {duration}
          </span>
        </div>
      </div>
    </CardWrapper>
  );
}
