// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

// Function to build table 
function buildTable(data){
    // Clear out existing data
    tbody.html("");

    data.forEach((dataRow) => {
    
        let row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });
    })

}

// Function handleClick prevent the form from refreshing the page
function handleClick(){ 
    d3.event.preventDefault();
    let date = d3.select('#datetime').property('value');
    let filterData = tableData;

    // Check for a date from user input and filter the data using that date;
    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }

    buildTable(filterData);



}


d3.selectAll('#filter-btn').on('click', handleClick);

buildTable(tableData);