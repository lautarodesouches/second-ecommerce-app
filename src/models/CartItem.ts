export class CartItem {

    id: number
    name: string
    color: string
    quantity: number
    price: number
    shipping: number
    subtotal: number

    constructor(id: number, name: string, color: string, quantity: number, price: number, shipping: number) {
        this.id = id
        this.name = name
        this.color = color
        this.quantity = quantity
        this.price = price
        this.shipping = shipping
        this.subtotal = quantity * price + quantity * shipping
    }

    public addMore(quantity: number, shipping: number): void {
        this.quantity += quantity
        this.shipping += shipping
    }

}