import { Keyword } from "@/components/keyword";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div id="about">
        <h3 className="text-lg mb-1">about</h3>
        <div className="text-sm flex flex-col gap-2">
          <p>hello, i am a cyber security engineer based in england, uk.</p>
          <p>
            specialise in{" "}
            <Keyword link="https://en.wikipedia.org/wiki/Security_information_and_event_management">siem</Keyword> and{" "}
            <Keyword link="https://en.wikipedia.org/wiki/Security_orchestration">soar</Keyword> capabilities, focusing
            on automation and reliability.
          </p>
          <p>
            began my journey as an apprentice doing network security and studying on{" "}
            <Keyword link="https://app.hackthebox.com/profile/20366">hackthebox</Keyword> and{" "}
            <Keyword link="https://tryhackme.com/r/p/Achilles">tryhackme</Keyword>.
          </p>
        </div>
      </div>
      <div id="experience">
        <h3 className="text-lg mb-1">experience</h3>
        <div className="text-sm flex flex-col gap-4">
          <div>
            <p className="text-xs">aug. 2024 - present</p>
            <p>
              <span>cyber security engineer</span> @ <Keyword link="https://www.sep2.co.uk/">SEP2</Keyword>
            </p>
          </div>
          <div>
            <p className="text-xs">sep. 2022 - aug. 2024</p>
            <p>
              <span>cyber security analyst</span> @ <Keyword link="https://www.sep2.co.uk/">SEP2</Keyword>
            </p>
          </div>
          <div>
            <p className="text-xs">sep. 2020 - sep. 2022</p>
            <p>
              <span>cyber security technologist apprentice</span> @{" "}
              <Keyword link="https://www.sep2.co.uk/">SEP2</Keyword>
            </p>
          </div>
        </div>
      </div>
      <div id="projects">
        <h3 className="text-lg mb-1">projects</h3>
        <div className="text-sm grid grid-cols-1 gap-4">
          <div className="p-4 border rounded shadow-sm">
            <p>
              <span className="mr-2 font-mono text-lg">{">"}</span>brighterscores
            </p>
            <div className="flex items-center gap-2 text-xs my-1">
              <span className="bg-black text-white px-1 rounded">personal project</span>
              <span className="bg-black text-white px-1 rounded">monetised</span>
            </div>
            <p className="text-sm py-4">
              track character progression in the popular online game <Keyword link="https://store.steampowered.com/app/2791440/Brighter_Shores/">brighter shores</Keyword>.
            </p>
            <Link href="brighterscores.net" className="underline decoration-dashed font-mono text-xs">
              view
            </Link>
          </div>

          <div className="p-4 border rounded shadow-sm">
            <p>
              <span className="mr-2 font-mono text-lg">{">"}</span>federated customer management
            </p>
            <div className="flex items-center gap-2 text-xs my-1">
              <span className="bg-black text-white px-1 rounded">work project</span>
              <span className="bg-black text-white px-1 rounded">internal tool</span>
            </div>
            <p className="text-sm py-4">
              manage customer deployments, rules, parsers, etc. within a <Keyword link="https://cloud.google.com/security/products/security-operations?hl=en">google secops</Keyword> driven{" "}
              <Keyword link="https://en.wikipedia.org/wiki/Security_operations_center">soc</Keyword> environment.
            </p>
          </div>
        </div>
      </div>
      <div id="contact">
        <h3 className="text-lg mb-1">contact</h3>
        <p className="text-sm">feel free to get in touch</p>
        <div className="flex items-center gap-4 mt-2">
          <Link href="mailto:dyl.hearn@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/dylan-hearn/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
          <Link href="https://github.com/AchillesDH" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
