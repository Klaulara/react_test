"use client";

import React from "react";
import Link from "next/link";
import { onEdit } from "./edit";
import { useSearchParams } from "next/navigation";

const EditUf = async () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const date = new Date(searchParams.get("date"));
  const value = searchParams.get("value");
  const formattedDate = date.toISOString().slice(0, 10);

  return (
    <div className="w-60 text-center mt-5">
      <Link className="bg-slate-400 m-2 p-2 rounded" href="/">
        Regresar
      </Link>

      <form className="mt-5" action={onEdit}>
        <input name="id" defaultValue={id} hidden></input>
        <div className="flex flex-col">
          <label>Ingresa la fecha</label>
          <input name="date" value={formattedDate} type="date" readOnly></input>
        </div>
        <div className="flex flex-col">
          <label>Ingresa el indicador</label>
          <select htmlFor="indicador">
            <option
              name="UNIDAD DE FOMENTO (UF)"
              value="UNIDAD DE FOMENTO (UF)"
            >
              UNIDAD DE FOMENTO (UF)
            </option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Unidad de medida</label>
          <select htmlFor="medida">
            <option name="PESOS">PESOS</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Ingresa el valor</label>
          <input name="valor" type="number" defaultValue={value}></input>
        </div>
        <input className="bg-slate-400 m-2 p-2 rounded" type="submit"></input>
      </form>
    </div>
  );
};

export default EditUf;
