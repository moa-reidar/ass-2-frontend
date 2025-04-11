import { Inventory } from './inventory.js';

const inventory = new Inventory();

// Lager én tabellrad
function createTableRow(medicine) {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = medicine.productName;
  nameCell.setAttribute('data-label', 'Product Name');

  const manufacturerCell = document.createElement('td');
  manufacturerCell.textContent = medicine.manufacturer;
  manufacturerCell.setAttribute('data-label', 'Manufacturer');

  const expirationCell = document.createElement('td');
  expirationCell.textContent = medicine.expirationDate;
  expirationCell.setAttribute('data-label', 'Expiration Date');

  const quantityCell = document.createElement('td');
  quantityCell.textContent = medicine.quantity;
  quantityCell.setAttribute('data-label', 'Quantity');

  const actionCell = document.createElement('td');
  actionCell.setAttribute('data-label', 'Actions');

  // Rediger-knapp
  const editButton = document.createElement('button');
  editButton.textContent = 'Rediger';
  editButton.classList.add('medicine__edit');
  editButton.setAttribute('data-id', medicine.productId);

  editButton.addEventListener('click', () => {
    alert("Du er nå i redigeringsmodus for denne medisinen.");
    document.getElementById('productName').value = medicine.productName;
    document.getElementById('manufacturer').value = medicine.manufacturer;
    document.getElementById('expirationDate').value = medicine.expirationDate;
    document.getElementById('quantity').value = medicine.quantity;
    document.getElementById('medicine-form').setAttribute('data-edit-id', medicine.productId);
  });

  // Slett-knapp
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Slett';
  deleteButton.classList.add('medicine__delete');
  deleteButton.setAttribute('data-id', medicine.productId);

  deleteButton.addEventListener('click', () => {
    const bekreft = confirm("Er du sikker på at du vil slette denne medisinen?");
    if (bekreft) {
      inventory.deleteMedicine(medicine.productId);
      renderTable();
    }
  });

  actionCell.appendChild(editButton);
  actionCell.appendChild(deleteButton);

  row.appendChild(nameCell);
  row.appendChild(manufacturerCell);
  row.appendChild(expirationCell);
  row.appendChild(quantityCell);
  row.appendChild(actionCell);

  return row;
}

// Tegn alle rader i tabellen
function renderTable() {
  const tbody = document.querySelector('#medicine-table tbody');
  tbody.innerHTML = '';
  inventory.getMedicines().forEach(medicine => {
    const row = createTableRow(medicine);
    tbody.appendChild(row);
  });
}

// Håndter innsendelse av skjemaet
document.getElementById('medicine-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('productName').value;
  const manufacturer = document.getElementById('manufacturer').value;
  const expiration = document.getElementById('expirationDate').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  const form = document.getElementById('medicine-form');
  const editId = form.getAttribute('data-edit-id');

  if (editId) {
    inventory.updateMedicine(Number(editId), {
      productName: name,
      manufacturer: manufacturer,
      expirationDate: expiration,
      quantity: quantity
    });
    form.removeAttribute('data-edit-id');
  } else {
    inventory.addMedicine(name, manufacturer, expiration, quantity);
  }

  renderTable();
  event.target.reset();
});

renderTable();
