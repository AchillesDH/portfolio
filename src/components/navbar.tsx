import Link from "next/link";
import { Clock } from "./clock";

export function Navbar() {
  return (
    <div className="border-b border-dashed py-4">
      <Clock />
      <div className="flex w-full mb-2">
        <p className="text-lg mr-4 font-semibold bg-black text-white px-2">dylan hearn</p>
        <div className="flex items-center gap-4 text-sm">
          <Link href="#about" className="hover:underline">
            about
          </Link>
          <Link href="#experience" className="hover:underline">
            experience
          </Link>
          <Link href="#projects" className="hover:underline">
            projects
          </Link>
          <Link href="#contact" className="hover:underline">
            contact
          </Link>
        </div>
      </div>

      <div>
        <Link href="/assets/cv/dylan-hearn-cv.pdf" target="_blank" rel="noopener noreferrer" className="underline decoration-dashed font-mono text-xs flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-paperclip"
          >
            <path d="M13.234 20.252 21 12.3" />
            <path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" />
          </svg>
          <span>download cv</span>
        </Link>
      </div>
    </div>
  );
}
