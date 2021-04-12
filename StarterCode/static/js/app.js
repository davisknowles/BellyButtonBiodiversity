// BELLY BUTTON BIODIVERSITY using plot.ly
//-------------------------------------------------------------

// Use the D3 library to read in `samples.json`.
// var sampleData = ;
// helper function
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}
function barChart() {
    // unpack data by id
  d3.json("samples.json").then((importedSamples) => {
    // var data = samples.samples[0];
    // console.log(importedSamples);
    var userInput = 0 // change to user input function 
    var data = importedSamples.samples[userInput].sample_values;
    console.log(data);
    var trace1 = {
    type: "bar",
    x: data.slice(0, 10),
    // y: values,
    // text: labels,
    orientation: 'h'   

    }
    var chartData = [trace1];

    Plotly.newPlot('bar', chartData);
  })
}

barChart()

function bubbleChart() {
  // unpack data by id
d3.json("samples.json").then((importedSamples) => {
  // var data = samples.samples[0];
  // console.log(importedSamples);
  var userInput = 0 // change to user input function 
  var data = importedSamples.samples[userInput].sample_values;
  console.log(data);
  var trace1 = {
  type: "",
  x: data.slice(0, 10),
  y: data.slice(0,10),
  mode: 'markers',
  marker: {
    size: data.slice(0, 10),
    color: data.slice(0, 10),
    // colorscale: ,
  }
  // text: labels,
  // orientation: 'h'   

  }
  var chartData = [trace1];

  Plotly.newPlot('bubble', chartData);
})
}
bubbleChart()

var tableDisplay;
// build function for demographic info at 'sample-metadata'
function buildTable() {
  // unpack data by id
d3.json("samples.json").then((importedSamples) => {
  // var data = samples.samples[0];
  // console.log(importedSamples);
  var userInput = 0 // change to user input function 
  var data = importedSamples.samples[userInput].sample_values;
  console.log(data);

  document.getElementById("sample-metadata").innerHTML = "Paragraph changed!";

  // tableDisplay.text("test")
})
}
buildTable()