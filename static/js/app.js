// from data.js
var tableData = data;

let searchData = (dateSelected) => {
    tableDateResult = [];
    tableData.map((item) => {
        if (dateSelected === "" || (item.datetime === dateSelected)) {
            // if (shapeSelected === "" || (item.shape === shapeSelected)) {
                tableDateResult.push(item);
            // }
            
        }
    })
    let tbody = d3.select("#ufo-table > tbody");
    tbody.html("");
    tableDateResult.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.entries(dataRow).forEach(([key, value]) => {
            if (key !== "durationMinutes") {                
                var cell = row.append("td");
                cell.text(value);
            }
        });
    });
}

let searchButton = d3.select("#filter-btn");
searchButton.on("click", () => {
    d3.event.preventDefault();
    let searchBox = d3.select("#datetime");
    searchData(searchBox.property("value"));
})

searchData(""); 