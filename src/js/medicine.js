export class Medicine {
    constructor(productName, manufacturer, expirationDate, quantity) {
        this.productId = Date.now();
        this.productName = productName;
        this.manufacturer = manufacturer;
        this.expirationDate = expirationDate;
        this.quantity = quantity;
    }
}
