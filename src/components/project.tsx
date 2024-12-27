import Link from "next/link";
import { PropsWithChildren } from "react";

interface ProjectProps {
  title: string;
  tags?: string[];
  link?: string;
}

export function Project(props: PropsWithChildren<ProjectProps>) {
  const { children, title, tags, link } = props;
  return (
    <div>
      <div className="flex items-center gap-2">
        <h4>{title}</h4>
        <div className="flex items-center gap-2 text-xs my-1">
          {tags?.map((t) => (
            <span key={t} className="bg-black text-white px-1 rounded-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="text-sm">{children}</div>
      {link && (
        <Link href={link} className="underline decoration-dashed font-mono text-xs">
          view
        </Link>
      )}
    </div>
  );
}
