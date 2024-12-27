import Link from "next/link";

interface ButtonLinkProps {
  label: string
  link: string
}

export function ButtonLink(props: ButtonLinkProps) {
  const { label, link } = props
  return (
    <Link
      href={link}
      className="bg-emerald-800 text-white border border-black text-xs flex items-center justify-center mb-1"
    >
      {label}
    </Link>
  );
}
