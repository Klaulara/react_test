'use server'

import { editData } from '@/api/data/db';
import { redirect } from 'next/navigation'

export const onEdit = async(data) => {

    const id = data.get('id');
    const valorIndicador = data.get('valor');

    const value = {valorIndicador, id}

    await editData(value)
    redirect('/rawdata'); 
}

