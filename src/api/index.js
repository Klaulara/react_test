import { pool } from "./data/db";
import { getData } from "./service/service";

const data = async () => {
  return await getData();
};

const indicadoresData = await data();

export async function enviarDatos() {
    try {
      indicadoresData.forEach(async(element) => {
        const query = {
          text: `INSERT INTO indicadores (id, nombreindicador, codigoindicador, unidadmedidaindicador, valorindicador, fechaindicador, tiempoindicador, origenindicador) 
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
          values: [element.id, element.nombreIndicador, element.codigoIndicador, element.unidadMedidaIndicador, element.valorIndicador, element.fechaIndicador, element.tiempoIndicador, element.origenIndicador],
        };
        await pool.query(query);
        console.log('Datos enviados correctamente:', element);
      }); 
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    } 
  }


