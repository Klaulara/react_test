"use client";

import React from "react";
import { DeleteSvg } from "@/components/icons/deleteSVG";

const DeleteButton = ({ id, onClick }) => {

  return (
    <button onClick={() => onClick(id)}>
      <DeleteSvg />
    </button>
  );
};

export default DeleteButton;