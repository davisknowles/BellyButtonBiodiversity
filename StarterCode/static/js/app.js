// BELLY BUTTON BIODIVERSITY using plot.ly



//------------------------------
// Build dropdown function 
// ------------------------------
d3.json("samples.json").then(data => {    

  var names = data.names;

  var dropDown = d3.select("#selDataset");

  names.forEach(sample => {
    dropDown.append("option")
    .text(sample)
    .attr("id", sample);
  })

  init()
});

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", optionChanged);

// set initial plot
function init() {
  var dropDown = d3.select("#selDataset");
  // assign dropdown option to variable
  var position = dropDown.property("value");

  optionChanged(position)
}

function optionChanged() {
  var dropDown = d3.select("#selDataset");
  var position = dropDown.property("value");
    console.log(position);

  d3.json("samples.json").then(data => {    

    //----------------------------------------------------------------
    // Build Demographic Info table for Metadata
    //----------------------------------------------------------------
    var metaData = data.metadata.filter(data => {return data.id == position})
      // console.log(metaData)
    var table = d3.select("#sample-metadata");
    table.html("");

    Object.entries(metaData[0]).forEach(([key, value]) => {
      table.append("h6").text(`${key}: ${value}`);
    }) 

    // Use d3 to fetch sample data
    var samples = data.samples;
    var result = samples.filter(data => data.id == position)[0];
      console.log(result)

    var ids = result.otu_ids;
    var labels = result.otu_labels;
    var values = result.sample_values;

    //-------------------------------------------------------------
    // Build Bar Chart 
    //-------------------------------------------------------------
    var trace1 = {
    type: "bar",
    x: values.slice(0, 10).reverse(),
    y: ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
    text: labels.slice(0, 10).reverse(),
    orientation: 'h'   
    };
    var chartData1 = [trace1];

    var layout1 = {
      title: "Top 10 OTUs",
    };

    Plotly.newPlot('bar', chartData1, layout1);

    //-------------------------------------------------------
    // Build Bubble Chart 
    //-------------------------------------------------------
    var trace2 = {
      type: "",
      x: ids,
      y: values,
      text: labels,
      mode: 'markers',
      marker: {
        size: values,
        color: ids,
      }
    }
    var chartData2 = [trace2];

    var layout2 = {
      margin: {t: 0},
      xaxis: {title: "OTU ID"},
    }

    Plotly.newPlot('bubble', chartData2, layout2);

  });
}

