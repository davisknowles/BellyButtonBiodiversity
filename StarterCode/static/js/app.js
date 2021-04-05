// BELLY BUTTON BIODIVERSITY using plot.ly
//-------------------------------------------------------------

// Use the D3 library to read in `samples.json`.
var sampleData = "samples.json";

// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }
// Fetch the json data and console log it
d3.json(sampleData).then(function(samples) {
  console.log(samples);
});

