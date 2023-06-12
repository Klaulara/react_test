"use client"

import React from 'react'
import { DeleteSvg } from "@/components/icons/deleteSVG";

const deleteItem = (id) => {
    console.log(id)
}

const DeleteButton = ({id}) => (

    <button onClick={()=>deleteItem(id)}><DeleteSvg /></button>
)
  

export default DeleteButton