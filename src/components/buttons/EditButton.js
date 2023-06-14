"use client";

import React from "react";
import { EditSvg } from "@/components/icons/editSVG";
import { useRouter } from "next/navigation";

const EditButton = ({ id, date, value }) => {

  const router = useRouter();

  const editItem = (id, date, value) => {
    router.push(`/edit?id=${id}&date=${date}&value=${value}`);
  };

  return (
    <button onClick={() => editItem(id, date, value)}>
      <EditSvg />
    </button>
  );
};

export default EditButton;
