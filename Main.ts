import { Serie } from "./Serie.js";
import { series } from "./Data.js";

let seriesTable: HTMLElement = document.getElementById("series-body")!;
let detailCard: HTMLElement = document.getElementById("series-detail")!;

function showSeries(seriesList: Serie[]): void {
  let totalSeasons: number = 0;
  seriesList.forEach((serie) => {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${serie.id}</td>
      <td class="text-primary serie-name" style="cursor: pointer">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;

    row.querySelector(".serie-name")?.addEventListener("click", () => {
      showDetail(serie);
    });

    seriesTable.appendChild(row);
    totalSeasons += serie.seasons;
  });

  let average = totalSeasons / seriesList.length;
  let averageElm = document.getElementById("average-seasons")!;
  averageElm.textContent = `Average seasons: ${average.toFixed(2)}`;
}

function showDetail(serie: Serie): void {
  detailCard.innerHTML = `
    <div class="card">
      <img src="${serie.foto}" class="card-img-top" alt="${serie.name}" style="max-width: 100%; height: auto;">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.descripcion}</p>
        <a href="${serie.link}" class="btn btn-primary" target="_blank">Conoce mas!</a>
      </div>
    </div>
  `;
}

showSeries(series);

