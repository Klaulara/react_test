import React from "react";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

const TableData = ({ data }) => {

  return (
    <table class="table-fixed text-center">
      <thead className="text-xl">
        <tr>
          <th className="w-60">Fecha</th>
          <th className="w-60">Indicador</th>
          <th className="w-60">Unidad medida</th>
          <th className="w-60">Valor</th>
          <th className="w-50">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          const fechaIndicador = new Date(item.fechaindicador);
          const options = { day: "numeric", month: "numeric", year: "numeric" };
          const formattedDate = fechaIndicador.toLocaleDateString(
            "es-ES",
            options
          );

          return (
            <tr key={item.id}>
              <td>{formattedDate}</td>
              <td>{item.nombreindicador}</td>
              <td>{item.unidadmedidaindicador}</td>
              <td>{item.valorindicador}</td>
              <td><div className="flex flex-row justify-around"><EditButton id={item.id} /><DeleteButton id={item.id} /></div></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableData;
