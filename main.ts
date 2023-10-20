import {Serie} from './Serie.js';
import {series} from './data.js';

let serieTable : HTMLElement = document.getElementById('series')!;
// let componentAverage: HTMLElement = document.getElementById('average')!;

// componentAverage.innerHTML = `Seasons average: ${averageSeasons()}`;

function uploadRows(): void{
    series.forEach((serie) => (createRow(serie)));
}
function createRow(serie:Serie):void{
    let row = document.createElement('tr');
    row.innerHTML = `<td>${serie.id}</td>
    <td>${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
    <td>${serie.description}</td>
    <td><a href="${serie.url}">Link</a></td>
    <td><img src="${serie.img}" width="100px"></td>`;
    serieTable.appendChild(row);
}




// function averageSeasons():string{
//     let sum = 0;
//     series.forEach((serie)=> sum += serie.seasons);
//     sum/= series.length;
//     let average = Math.round(sum);
//     return average.toString();
// }