import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "prueba",
  password: "Daemonicus1",
  port: 5432,
});

export const addData = async ({id, nombreIndicador, codigoIndicador, unidadMedidaIndicador, valorIndicador, fechaIndicador, tiempoIndicador, origenIndicador}) => {
  const SQLQuery = {
    text: "INSERT INTO indicadores (id, nombreindicador, codigoindicador, unidadmedidaindicador, valorindicador, fechaindicador, tiempoindicador, origenindicador) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;",
    values: [id, nombreIndicador, codigoIndicador, unidadMedidaIndicador, valorIndicador, fechaIndicador, tiempoIndicador, origenIndicador],
  };
  try {
    const result = await pool.query(SQLQuery);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getData = async () => {
  const SQLQuery = {
    text: "SELECT * FROM indicadores ORDER BY fechaindicador;",
  };
  try {
    const result = await pool.query(SQLQuery);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

export const getLastIndex = async() => {
  const SQLQuery = {
    text: "SELECT id FROM indicadores ORDER BY id DESC LIMIT 1;",
  };
    const result = await pool.query(SQLQuery);
    return result.rows;
}

export const getDataById = async(id) => {
  const SQLQuery = {
    text: "SELECT * FROM indicadores WHERE id=$1 ;",
    values: id
  };
  try {
    const result = await pool.query(SQLQuery);
    return result.rows;
  } catch (error) {
    console.log(error)
  }
    
}

export const getDataByDates = async(startDate, endDate) => {
  const SQLQuery = {
    text: "SELECT * FROM indicadores WHERE fechaIndicador >= $1 AND fechaIndicador <= $2;",
    values: [startDate, endDate]
  }
  try {
    const result = await pool.query(SQLQuery);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
}

export const editData = async({valorIndicador, id})=>{
  const SQLQuery = {
      text: "UPDATE indicadores SET valorindicador=$1 WHERE id=$2 RETURNING *;",
      values: [valorIndicador, id]
  }
  try {
      const result = await pool.query(SQLQuery);
      return result;
  } catch (error) {
      console.log(error);
  }
};

export const deleteData = async(id) => {
  const SQLQuery = {
      text: "DELETE FROM indicadores WHERE id=$1 RETURNING *;",
      values: [id]
  }
  try {
      const result = await pool.query(SQLQuery);
      return result;
  } catch (error) {
      console.log(error);
  }
};