import axios from "axios";

const url = "https://postulaciones.solutoria.cl/";
const tokenUrl = "api/acceso";
const dataUrl = "api/indicadores";

export const getData = async() => {
  let data = [];
  const token = await axios
    .post(url + tokenUrl, {
      userName: "claularazamora@gmail.com",
      flagJson: true,
    })
    .then((res) => {
      return res.data.token;
    })
    .catch((error) => console.log(error));
  await axios
    .get(url + dataUrl, {
      headers : {
        Authorization: `Bearer ${token}`,
      }
    })
    .then((res) => data.push(res.data))
    .catch((error) => console.log(error.response));
  let filteredData = data[0].filter(function(item) {
      return item.codigoIndicador === "UF";
  });
  return filteredData;
};

