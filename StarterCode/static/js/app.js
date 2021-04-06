// BELLY BUTTON BIODIVERSITY using plot.ly
//-------------------------------------------------------------

// Use the D3 library to read in `samples.json`.
var sampleData = "samples.json";
// helper function
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

// unpack data by id
d3.json(sampleData).then(function(samples) {
  var parseData = unpack(samples.dataset.id);
  console.log(parseData);
});



// // Fetch the json data and console log it
// function buildPlot() {
//   d3.json(sampleData).then(function(samples) {

//     //Grab values from the data json object to build plot
//     var sample_values = unpack(samples.dataset.sample_values);
//     var otu_ids = unpack(samples.dataset.otu_ids);
//     var otu_labels = unpack(samples.dataset.otu_labels);

//     var trace1 = [{
//       type: "bar",
//       x: otu_ids,
//       y: sample_values,
//       orientation: 'h'   
//      }];

//      var data = [trace1];

//      Plotly.newPlot('bar', data);

//   });

// }

// buildPlot();


