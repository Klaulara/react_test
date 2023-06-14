'use server'

import { getLastIndex, addData  } from "@/api/data/db";
import { redirect } from 'next/navigation'

export async function onSubmit(data) {

    const index = await getLastIndex();
    const id = index[0].id + 1;
    const valorIndicador = data.get('valor');
    const fechaIndicador = data.get('date');
    const nombreIndicador = "UNIDAD DE FOMENTO (UF)"
    const codigoIndicador = "UF"
    const unidadMedidaIndicador = "Pesos";
    const origenIndicador = "";
    const tiempoIndicador = null
    const uf = {id, nombreIndicador, codigoIndicador, unidadMedidaIndicador, valorIndicador, fechaIndicador, tiempoIndicador, origenIndicador}

    await addData(uf);
    redirect('/rawdata'); 
}