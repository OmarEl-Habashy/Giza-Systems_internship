let person = {
  name: "",
  company: "",
  cart: "",
};

// Initialize peopleData with existing table data
let peopleData = [
  {
    name: "Bessie Cooper",
    company: "IBM",
    cart: "453 €",
  },
  {
    name: "Wade Warren",
    company: "L'Oréal",
    cart: "994 €",
  },
];

let editingRowIndex = -1; // Track which row is being edited

let showForm = document.getElementById("add-entry-btn");
showForm.addEventListener("click", function () {
  let form = document.getElementById("form");
  if (form.classList.contains("d-none")) {
    form.classList.remove("d-none");
    showForm.textContent = "Hide Form";
    editingRowIndex = -1;
    document.getElementById("add-btn").textContent = "Add";
    document.querySelector("h1").textContent = "Add Entry";
  } else {
    form.classList.add("d-none");
    showForm.textContent = "Add Entry";
    clearForm();
  }
});

let button = document.getElementById("add-btn");
button.addEventListener("click", addRow);

function addRow() {
  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const cart = document.getElementById("cart").value;

  if (!name || !company || !cart) {
    alert("Please fill in all required fields (Name, Company, Cart Value)");
    return;
  }

  const newPerson = {
    name: name,
    company: company,
    cart: cart + " €",
  };

  if (editingRowIndex >= 0) {
    peopleData[editingRowIndex] = newPerson;
    updateTableRow(editingRowIndex, newPerson);
    editingRowIndex = -1;
    document.getElementById("add-btn").textContent = "Add";
    document.querySelector("h1").textContent = "Add Entry";
  } else {
    peopleData.push(newPerson);
    addTableRow(newPerson);
  }

  clearForm(); // removing the input values after adding or updating
  document.getElementById("form").classList.add("d-none");
  document.getElementById("add-entry-btn").textContent = "Add Entry";
}

function addTableRow(person) {
  const tableBody = document.getElementById("table-body");
  const newRow = document.createElement("div");
  newRow.className = "table-row";

  newRow.innerHTML = `
    <div class="table-cell">
      <input type="checkbox" class="checkbox" />
    </div>
    <div class="table-cell">${person.name}</div>
    <div class="table-cell">${person.company}</div>
    <div class="table-cell">${person.cart}</div>
    <div class="table-cell">
      <button class="edit-btn" onclick="editRow(this)">✏️</button>
    </div>
  `;

  tableBody.appendChild(newRow);
}

function updateTableRow(index, person) {
  const tableBody = document.getElementById("table-body");
  const row = tableBody.children[index];

  row.children[1].textContent = person.name;
  row.children[2].textContent = person.company;
  row.children[3].textContent = person.cart;
}

function editRow(button) {
  const row = button.closest(".table-row");
  const tableBody = document.getElementById("table-body");
  const rowIndex = Array.from(tableBody.children).indexOf(row);

  const person = peopleData[rowIndex];
  document.getElementById("name").value = person.name;
  document.getElementById("company").value = person.company;
  document.getElementById("cart").value = person.cart.replace(" €", "");

  document.getElementById("form").classList.remove("d-none");
  document.getElementById("add-entry-btn").textContent = "Hide Form";
  document.getElementById("add-btn").textContent = "Update";
  document.querySelector("h1").textContent = "Edit Entry";

  editingRowIndex = rowIndex;
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("company").value = "";
  document.getElementById("cart").value = "";
}
