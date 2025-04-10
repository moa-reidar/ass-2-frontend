import { Inventory } from './inventory.j';

const inventory = new Inventory();

// tabellrad 
function createTableRow(medicine) {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = medicine.productName;

  const manufacturerCell = document.createElement('td');
  manufacturerCell.textContent = medicine.manufacturer;

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

}