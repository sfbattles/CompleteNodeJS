//@ts-check
//object property shorthand

const name = 'andrew'

const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'philadelphia'
}

console.log(user)

//object destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrices: undefined,
    rating: 4.2
}
// // const label = product.label
// // const stock = product.stock

// const { label:productLabel, stock:productStock, salePrices, rating=5}  = product
// console.log(productLabel,productStock, salePrices, rating)


const transaction = (type, {label, stock, }) => {
    console.log(type, label, stock)
}

transaction('order',product);
