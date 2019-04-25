const adam_table = document.querySelector('#adam-table');
const chris_table = document.querySelector('#chris-table');
const connor_table = document.querySelector('#connor-table');
const jac_table = document.querySelector('#jac-table');
const julia_table = document.querySelector('#julia-table');

function fillTable(table, predictions) {

    for (let i = 0; i < 36; i++) {

        // Container of all information
        let row = document.createElement("TR");

        // First Column
        let col1 = document.createElement("TH");
        let col1_content = document.createTextNode((i + 1).toString());
        col1.appendChild(col1_content);
        row.appendChild(col1);

        // Second Column
        let col2 = document.createElement("TD");
        let col2_content = document.createTextNode(characters[i]);
        col2.appendChild(col2_content);
        row.appendChild(col2);

        // Third Column
        let col3 = document.createElement("TD");
        let state = (predictions[i]) ? "Lives" : "Dies";
        let col3_content = document.createTextNode(state);
        col3.appendChild(col3_content);
        row.appendChild(col3);

        // Add all this content to the table
        table.appendChild(row);
    }
}

// Call fillTable on every set of tables and predictions
fillTable(adam_table, adam_predictions);
fillTable(chris_table, chris_predictions);
fillTable(connor_table, connor_predictions);
fillTable(jac_table, jac_predictions);
fillTable(julia_table, julia_predictions);