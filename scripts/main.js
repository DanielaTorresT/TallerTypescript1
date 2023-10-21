import { series } from './data.js';
var serieTable = document.getElementById('series');
console.log(series);
uploadRows();
var componentAverage = document.getElementById('average');
componentAverage.innerHTML = "Seasons average: ".concat(averageSeasons());
function uploadRows() {
    series.forEach(function (serie) { return (createRow(serie)); });
}
function createRow(serie) {
    var row = document.createElement('tr');
    row.innerHTML = "<td>".concat(serie.id, "</td>\n    <td><a href=\"").concat(serie.url, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n    <td>").concat(serie.channel, "</td>\n    <td>").concat(serie.seasons, "</td>");
    serieTable.appendChild(row);
}
function averageSeasons() {
    var sum = 0;
    series.forEach(function (serie) { return sum += serie.seasons; });
    sum /= series.length;
    var average = Math.round(sum);
    return average.toString();
}
