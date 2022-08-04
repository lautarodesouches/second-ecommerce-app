export class CartItem {

    id: number
    name: string
    color: string
    quantity: number
    price: number
    subtotal: number

    constructor(id: number, name: string, color: string, quantity: number, price: number) {
        this.id = id
        this.name = name
        this.color = color
        this.quantity = quantity
        this.price = price
        this.subtotal = quantity * price
    }

}