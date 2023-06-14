import Link from "next/link";

export default async function Home() {

  return (
    <div className="text-center mt-5">
      <Link className="bg-slate-400 m-2 p-2 rounded" href="/grafic">Graficos</Link>
      <Link className="bg-slate-400 m-2 p-2 rounded" href="/rawdata">Raw Data</Link>
      <Link className="bg-slate-400 m-2 p-2 rounded" href="/add">Agregar Dato</Link>
    </div>
  );
}
