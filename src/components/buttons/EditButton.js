'use client'

import React from 'react'
import { EditSvg } from "@/components/icons/editSVG";

const editItem = (id) => {
    console.log(id)
}

const EditButton = ({id}) =>(
    <button onClick={()=>editItem(id)}><EditSvg /></button>
  )

export default EditButton