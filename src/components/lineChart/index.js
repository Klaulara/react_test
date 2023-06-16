'use client'

import React, { useState , useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useSearchParams } from "next/navigation";
import { allLabelsByDate, allValuesByDates } from "@/app/grafic/functions";

Chart.register(CategoryScale);

function LineChart({ chartData, initialDate, endingDate, labels, values }) {

  const [chosenInitialDate, setChosenInitialDate] = useState(initialDate);
  const [chosenEndDate, setChosenEndDate] = useState(endingDate);
  const [newLabels, setNewLabels] = useState(labels);
  const [newValues, setNewValues] = useState(values);
  const [data, setData] = useState(chartData)
  const searchParams = useSearchParams();
  const [refresh, setRefresh] =useState(false);

  useEffect(()=>{
    if(searchParams.get("initialdate")!==null){
      setChosenInitialDate(searchParams.get("initialdate"));
      setChosenEndDate(searchParams.get("enddate"));
    }
  },[setChosenInitialDate, refresh]);

  useEffect(()=>{
    const getNewLabels = async() => {
      const labels = await allLabelsByDate(chosenInitialDate, chosenEndDate);
      setNewLabels(labels)
    }
    const getNewValues = async() => {
      const values = await allValuesByDates(chosenInitialDate, chosenEndDate);
      setNewValues(values)
    }
    getNewLabels();
    getNewValues();
  },[chosenInitialDate])

  const onSubmit = (e) => {
    setRefresh(true)
  }

  useEffect(()=>{
    setData({
      labels: newLabels,
      datasets: [
        {
          label: "UF",
          data: newValues,
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    })
  },[newLabels, newValues])

  return (
    <div>
      <form className="mt-5 flex flex-row justify-center" onSubmit={onSubmit}>
        <div className="flex flex-col m-2">
          <label>Fecha inicio</label>
          <input
            name="initialdate"
            defaultValue={chosenInitialDate}
            type="date"
          ></input>
        </div>
        <div className="flex flex-col m-2">
          <label>Fecha termino</label>
          <input name="enddate" defaultValue={chosenEndDate} type="date"></input>
        </div>
        <input className="bg-slate-400 m-2 p-2 rounded" type="submit"></input>
      </form>

      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl">
          <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Grafico UF</h2>
            <Line
              data={data}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "La variación de la uf en el rango de fechas",
                  },
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LineChart;
