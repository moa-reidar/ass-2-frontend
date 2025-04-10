import { Inventory } from './inventory.js';

const inventory = new Inventory();

// Lager én tabellrad
function createTableRow(medicine) {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = medicine.productName;

  const manufacturerCell = document.createElement('td');
  manufacturerCell.textContent = medicine.manufacturer;

  const expirationCell = document.createElement('td');
  expirationCell.textContent = medicine.expirationDate;

  const quantityCell = document.createElement('td');
  quantityCell.textContent = medicine.quantity;

  const actionCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Slett';
  deleteButton.classList.add('medicine__delete');
  deleteButton.setAttribute('data-id', medicine.productId);

  deleteButton.addEventListener('click', () => {
    inventory.deleteMedicine(medicine.productId);
    renderTable();
  });

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
  tbody.innerHTML = ''; // tommer ut først

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

  inventory.addMedicine(name, manufacturer, expiration, quantity);
  renderTable();
  event.target.reset(); // tømmer skjemaet
});

// Kjør ved oppstart
renderTable();
