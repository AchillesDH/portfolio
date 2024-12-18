import Link from "next/link";
import { PropsWithChildren } from "react";

interface KeywordProps {
  link?: string;
}

export function Keyword(props: PropsWithChildren<KeywordProps>) {
  const { children, link } = props

  return <Link href={link || `#${link}`} target="_blank" rel="noopener noreferrer" className="underline decoration-dashed">{children}</Link>
}