// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");

button.on("click", function(){
  d3.event.preventDefault();
  var query = d3.select("#datetime").property("value");
  console.log(query);
  var filtered_results = tableData.filter(d => d.datetime === query)
  console.log(filtered_results);

  var tbody = d3.select("tbody");

  filtered_results.forEach(function(entry) {
    var row = tbody.append("tr")
    Object.entries(entry).forEach(function([key,value]) {
      row.append("td").text(value);

    });

  });


});

function loadData(data) {
  var tbody = d3.select('tbody')
  tbody.text('');
  // console.log(tbody)
  data.forEach(element => {
      row = tbody.append('tr')
      Object.entries(element).forEach(([key, value]) => {
          var cell = row.append('td')
          cell.text(value)
      });
  });
};
loadData(tableData)