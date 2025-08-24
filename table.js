// Student Project JavaScript File
// Adds interactivity to the Grocery Price Tracker table

// Function: Sort table rows by "Best Price" column
function sortTable() {
  let table = document.getElementById("priceTable");
  let rows = Array.from(table.rows).slice(1, -1); // skip header & footer
  let sorted = rows.sort((a, b) => {
    let priceA = parseFloat(a.cells[2].innerText.replace("$", ""));
    let priceB = parseFloat(b.cells[2].innerText.replace("$", ""));
    return priceA - priceB;
  });
  let tbody = table.tBodies[0];
  sorted.forEach(row => tbody.appendChild(row));
}

// Function: Highlight the cheapest "Best Price" in green
function highlightCheapest() {
  let table = document.getElementById("priceTable");
  let rows = Array.from(table.rows).slice(1, -1); // skip header & footer
  let cheapest = Math.min(...rows.map(r => parseFloat(r.cells[2].innerText.replace("$", ""))));
  rows.forEach(row => {
    let price = parseFloat(row.cells[2].innerText.replace("$", ""));
    if (price === cheapest) {
      row.style.backgroundColor = "#d4edda"; // light green
    } else {
      row.style.backgroundColor = "";
    }
  });
}
