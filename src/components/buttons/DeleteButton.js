"use client";

import React from "react";
import { DeleteSvg } from "@/components/icons/deleteSVG";
import { handleDelete } from "@/app/rawdata/delete";

const DeleteButton = ({ id }) => {

  return (
    <button onClick={()=>handleDelete(id)}>
      <DeleteSvg />
    </button>
  );
};

export default DeleteButton;