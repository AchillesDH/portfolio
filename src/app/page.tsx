import { Keyword } from "@/components/keyword";
import { NotesTable } from "@/components/notes-table/notes-table";
import { Project } from "@/components/project";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div id="about" className="border">
        <div className="p-2 border-b border-dashed">
          <h3 className="text-lg font-mono">about</h3>
        </div>
        <div className="text-sm flex flex-col gap-2 p-2">
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

      <div id="experience" className="border">
        <div className="p-2 border-b border-dashed">
          <h3 className="text-lg font-mono">experience</h3>
        </div>
        <div className="text-sm flex flex-col gap-4 p-2">
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

      <div id="projects" className="border">
        <div className="p-2 border-b border-dashed">
          <h3 className="text-lg font-mono">
            projects /{" "}
            <Link href="/projects" className="text-blue-600 hover:underline underline-offset-2">
              archive
            </Link>
          </h3>
        </div>
        <div className="text-sm grid grid-cols-1 gap-4 p-2">
          <Project title="brighterscores" tags={["personal project", "monetised"]}>
            track character progression in the popular online game{" "}
            <Keyword link="https://store.steampowered.com/app/2791440/Brighter_Shores/">brighter shores</Keyword>.
          </Project>

          <Project title="backstrat" tags={["personal project"]}>
            python library for backtesting trading strategies.
          </Project>
        </div>
      </div>

      <div id="notes" className="border">
        <div className="p-2 border-b border-dashed">
          <h3 className="text-lg font-mono">
            notes /{" "}
            <Link href="/notes" className="text-blue-600 hover:underline underline-offset-2">
              archive
            </Link>
          </h3>
        </div>
        <NotesTable />
      </div>
    </div>
  );
}
