import { series } from "./Data.js";
let seriesTable = document.getElementById("series-body");
let detailCard = document.getElementById("series-detail");
function showSeries(seriesList) {
    let totalSeasons = 0;
    seriesList.forEach((serie) => {
        var _a;
        let row = document.createElement("tr");
        row.innerHTML = `
      <td>${serie.id}</td>
      <td class="text-primary serie-name" style="cursor: pointer">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        (_a = row.querySelector(".serie-name")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            showDetail(serie);
        });
        seriesTable.appendChild(row);
        totalSeasons += serie.seasons;
    });
    let average = totalSeasons / seriesList.length;
    let averageElm = document.getElementById("average-seasons");
    averageElm.textContent = `Average seasons: ${average.toFixed(2)}`;
}
function showDetail(serie) {
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
