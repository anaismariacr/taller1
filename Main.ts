import { series } from "./Data.js";

const tableBody = document.querySelector("tbody")!;

tableBody.innerHTML = ""; 

series.forEach(serie => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <th scope="row">${serie.id}</th>
    <td>${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
  tableBody.appendChild(row);
});
