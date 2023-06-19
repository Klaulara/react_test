import Link from "next/link";
import DatabaseButton from "@/components/buttons/vaciarDatabase";
import { enviarDatos } from "@/api";
import { getData } from "@/api/data/db";

export default async function Home() {

  const datos = await getData();


  return (
    <div className="text-center">
      {datos?.length > 0 ? null : <DatabaseButton event={enviarDatos} />}
      <div className="text-center mt-5">
        <Link className="bg-slate-400 m-2 p-2 rounded" href="/chart">
          Graficos
        </Link>
        <Link className="bg-slate-400 m-2 p-2 rounded" href="/rawdata">
          Raw Data
        </Link>
        <Link className="bg-slate-400 m-2 p-2 rounded" href="/add">
          Agregar Dato
        </Link>
      </div>
    </div>
  );
}
