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


const averageContainer: HTMLElement = document.getElementById("average-seasons")!;
const totalTemporadas = series.reduce((sum, serie) => sum + serie.seasons, 0);
const promedio = totalTemporadas / series.length;
    
averageContainer.innerText = `Seasons average: ${promedio.toFixed(2)}`;

