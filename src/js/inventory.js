
import { Medicine } from './Medicine.js';

export class Inventory {
    constructor() {
        
        this.medicines = localStorage.getItem('medicines') ? JSON.parse(localStorage.medicines) : [];
    }

    addMedicine(productName, manufacturer, expirationDate, quantity) {
       
        const newMedicine = new Medicine(productName, manufacturer, expirationDate, quantity);
        this.medicines.push(newMedicine);
        this.updateLocalStorage();
    }

    deleteMedicine(productId) {
      
        this.medicines = this.medicines.filter(medicine => medicine.productId == productId);
        this.updateLocalStorage();
    }

    updateMedicine(productId, updatedData) {
        
        const medicine = this.medicines.find(medicine => medicine.productId === productId);
        Object.assign(medicine, updatedData);
        this.updateLocalStorage();
    }

    updateLocalStorage() {
       
        localStorage.setItem('medicins', JSON.stringify(this.medicines));
    }

    getMedicines() {
       
        return this.medicines;
    }
}

