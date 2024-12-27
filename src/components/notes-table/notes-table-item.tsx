import Link from "next/link";
import { ButtonLink } from "../button-link";

export function NotesTableItem() {
  return (
    <tr>
      <td className="pt-[0.3rem] px-[0.6rem] border-b">
        <time dateTime="2024-12-26">2024-12-26</time>
      </td>
      <td className="pt-[0.3rem] px-[0.6rem] border-b">
        <Link href="/notes/how-to-build-trading-backtest-system-in-python">Backtest Trading Strategies in Python</Link>
      </td>
      <td className="pt-[0.3rem] px-[0.6rem] border-b">
        <ButtonLink label="read" link="/notes/backtest-trading-strategies-in-python" />
      </td>
    </tr>
  );
}
