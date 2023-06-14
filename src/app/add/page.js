"use client";

import React from "react";
import Link from "next/link";
import { onSubmit } from "./submit";

const AddUf = () => {

  return (
    <div className="w-60 text-center mt-5">
      <Link className="bg-slate-400 m-2 p-2 rounded" href="/">
        Regresar
      </Link>

      <form className="mt-5" action={onSubmit}>
        <div className="flex flex-col">
          <label>Ingresa la fecha</label>
          <input name="date" type="date"></input>
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
          <input name="valor" type="number"></input>
        </div>
        <input className="bg-slate-400 m-2 p-2 rounded" type="submit"></input>
      </form>
    </div>
  );
};

export default AddUf;
