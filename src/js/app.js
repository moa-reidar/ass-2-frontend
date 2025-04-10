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

// Tegner alle rader i tabellen
function renderTable() {
  const tbody = document.querySelector('#medicine-table tbody');
  inventory.getMedicines().forEach(medicine => {
    const row = createTableRow(Medicine);
    tbody.appendChild(row);
  });
}

// Håndter innsendelse av skjemaet
document.getElementById('medicine-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const Name = dockument.getElementById('ProductName').value;
  const Manufacturer = dockument.getElementById('Manufacturer').value;
  const Expiration = dockument.getElementById('ExpirationDate').value;
  const Quantity = parseInt(dockument.getElementById('Quantity').value);

  inventory.addMedicine(name, manufacturer, expiration, quantity);
  renderTable();
});


renderTable()
