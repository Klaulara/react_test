import TableData from "@/components/table";
import { getData } from "@/api/data/db";
import Link from "next/link";

export default async function RawData() {
  const data = await getData();

  return (
    <div className="text-center mt-5">
        <Link className="bg-slate-400 m-2 p-2 rounded" href="/">Regresar</Link>

      <div className="mt-10">
        <TableData data={data} />
      </div>
      
    </div>
  );
}