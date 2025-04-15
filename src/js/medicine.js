export class Medicine {
    constructor(productName, manufacturer, expirationDate, quantity) {
        this.productId = Date.now();
        console.log("Laget medisin med ID:", this.productId);
        this.productName = productName;
        this.manufacturer = manufacturer;
        this.expirationDate = expirationDate;
        this.quantity = quantity;
        
    }
}

 