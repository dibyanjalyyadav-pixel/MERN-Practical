function generateBill(name, quantity, price)
{
let total_price = price * quantity;
console.log("Product Name: ", name);
console.log("Product price", price);
console.log("Product quantity:", quantity);
console.log("Total price", total_price);
let gst = total_price *0.18;
console.log("Total amount including 18% GST:",(total_price + gst));
}
generateBill("Mobile", 17000,2)
console.log("Divyanjali T052");