'use server'

import React from "react";
import DeleteButton from "@/components/buttons/DeleteButton";
import { deleteData } from "@/api/data/db";

export const handleDelete = async (id) => {
  try {
    await deleteData(id);
  } catch (error) {
    console.log('Error al eliminar el registro', error);
  }
};

// const DeleteRecord = ({ id }) => {

//   const handleDelete = async () => {
//     'use server'
//     try {
//       await deleteData(id);
//     } catch (error) {
//       console.log('Error al eliminar el registro', error);
//     }
//   };

//   return (
//     <DeleteButton id={id} onClick={handleDelete} />
//   );
// };

// export default DeleteRecord;