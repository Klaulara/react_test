import React from "react";

const TableData = ({ data }) => {
  return (
    <table class="table-fixed text-center">
      <thead className="text-xl">
        <tr>
          <th className="w-72">Fecha</th>
          <th className="w-72">Indicador</th>
          <th className="w-72">Unidad medida</th>
          <th className="w-72">Valor</th>
          <th className="w-72">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          const fechaIndicador = new Date(item.fechaindicador);
          const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
          const formattedDate = fechaIndicador.toLocaleDateString('es-ES', options);

          return (
            <tr key={item.id}>
              <td>{formattedDate}</td>
              <td>{item.nombreindicador}</td>
              <td>{item.unidadmedidaindicador}</td>
              <td>{item.valorindicador}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableData;
