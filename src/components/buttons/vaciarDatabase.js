'use client'

import { enviarDatos } from "@/api";
import { useRouter } from "next/navigation";

const DatabaseButton = () => {

  const router = useRouter();


    const handleDatabase = async() => {
        try {
            await enviarDatos();
            router.push('/chart')
          } catch (error) {
            console.log('Error al traer los registros', error);
          }
    }

    return (
      <button className="bg-slate-400 m-2 p-2 rounded" onClick={handleDatabase}>
        Poblar Base de datos
      </button>
    );
  };
  
  export default DatabaseButton;