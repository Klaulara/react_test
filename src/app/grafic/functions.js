import { getData } from "@/api/data/db";
import { getDataByDates } from "@/api/data/db";

export const allLabels = async () => {
  const result = await getData();
  const data = result.map((item) => {
    const fechaIndicador = item.fechaindicador;
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const formattedDate = fechaIndicador.toLocaleDateString("es-ES", options);
    return formattedDate;
  });
  return data
};

export const allValues = async () => {
  const result = await getData();
  return result.map((element) => parseInt(element.valorindicador));
};

export const newDataSet = async() => {
    const result = await getData();
    const data = result.map(item => ({
        x: item.fechaindicador.toISOString().split('T')[0],
        y: parseFloat(item.valorindicador)
      }));
    return data;
}