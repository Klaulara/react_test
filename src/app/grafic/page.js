import Link from "next/link";
import LineChart from "@/components/lineChart";
import { allLabels, allValues, newDataSet } from "./functions";

const labels = await allLabels();
const values = await allValues();

const dataSet = {
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

const page = async () => {
  return (
    <div className="text-center mt-5">
      <Link className="bg-slate-400 m-2 p-2 rounded" href="/">
        Regresar
      </Link>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl">
          <LineChart chartData={dataSet} />
        </div>
      </div>
    </div>
  );
};

export default page;
