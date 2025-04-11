import { Medicine } from './Medicine.js';

export class PrescriptionMedicine extends Medicine {
  constructor(productName, manufacturer, expirationDate, quantity, requiresPrescription = true) {
    super(productName, manufacturer, expirationDate, quantity);
    this.requiresPrescription = requiresPrescription;
  }
}
