import { NotesTableItem } from "./notes-table-item";

export function NotesTable() {
  return (
    <table className="w-full text-left text-sm">
      <thead className="border-b border-black">
        <tr>
          <th className="w-32 max-w-48 pt-[0.3rem] px-[0.6rem] font-semibold">date</th>
          <th className="font-semibold pt-[0.3rem] px-[0.6rem]">title</th>
          <th className="w-24 max-w-24 pt-[0.3rem] px-[0.6rem] font-semibold">link</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(1)].map((x) => (
          <NotesTableItem key={x} />
        ))}
      </tbody>
    </table>
  );
}
