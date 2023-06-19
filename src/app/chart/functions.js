'use server'

import { getData, getDataByDates, getStartDate, getEndDate } from "@/api/data/db";

export const allLabels = async () => {
  const result = await getData();
  const data = result.map((item) => {
    const fechaIndicador = item.fechaindicador;
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const formattedDate = fechaIndicador.toLocaleDateString("es-ES", options);
    return formattedDate;
  });
  return data;
};

export const allValues = async () => {
  const result = await getData();
  return result.map((element) => parseInt(element.valorindicador));
};

export const allLabelsByDate = async (startDate, endDate) => {
  const result = await getDataByDates(startDate, endDate);
  const data = result.map((item) => {
    const fechaIndicador = item.fechaindicador;
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const formattedDate = fechaIndicador.toLocaleDateString("es-ES", options);
    return formattedDate;
  });
  return data;
};

export const allValuesByDates = async (startDate, endDate) => {
  const result = await getDataByDates(startDate, endDate);
  return result.map((element) => parseInt(element.valorindicador));
};

export const startDate = async() => {
  const date = await getStartDate();
  const formattedDate = date[0]?.fechaindicador.toISOString().slice(0, 10);
  return formattedDate
}

export const endDate = async() => {
  const date = await getEndDate();
  const formattedDate = date[0]?.fechaindicador.toISOString().slice(0, 10);
  return formattedDate
}