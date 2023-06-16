import Link from "next/link";
import LineChart from "@/components/lineChart";
import { allLabels, allValues, startDate, endDate, allLabelsByDate, allValuesByDates } from "./functions";

const labels = await allLabels();
const values = await allValues();
const initialDate = await startDate();
const endingDate = await endDate();


const page = async () => {

    let dataSet = {
        labels: labels,
        datasets: [
          {
            label: "UF",
            data: values,
            backgroundColor: ["rgba(75,192,192,1)"],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      };


  return (
    <div className="text-center mt-5">
      <Link className="bg-slate-400 m-2 p-2 rounded" href="/">
        Regresar
      </Link>
    
      <LineChart chartData={dataSet} initialDate={initialDate} endingDate={endingDate} labels={labels} values={values} />
    </div>
  );
};

export default page;
