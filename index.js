// IMPORT MODULES
const express = require("express")
const bodyParser = require("body-parser")

// CONFIGURE
const app = express()
const HOST = "localhost"
const PORT = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

// DATA PRODUCTS

let products = [{
  id: 0,
  name: "SU:M37 Miracle Rose Cleansing Stick",
  category: "cleanser",
  price: 340000
}, {
  id: 1,
  name: "BLITHE Vital Treatment 9 Essential Seeds",
  category: "toner",
  price: 610000
}, {
  id: 2,
  name: "ATOPALM real barrier extreme cream",
  category: "moisturizer",
  price: 475000
}]

// GET ITEM BY ID
const getItemById = (items, id) => {
  const item = items.filter(item => {
    return item.id === Number(id)
  })
  return item
}

// SAVE NEW ITEM
const saveNewItems = (items, data) => {
  items.push(data)
}

// DISPLAY ROOT
app.get("/", function(req, res) {
  res.send("Hello World!")
})

// DISPLAY PRODUCTS
app.get("/products", (req, res) => {
  res.send(products)
})

// DISPLAY SINGLE PRODUCT
app.get("/products/:id", (req, res) => {
  const items = products
  const itemId = Number(req.params.id)
  const item = items.filter(item => {
    return item.id === itemId
  })
  res.send({
    message: `get single item`,
    item: item
  })
})

// SAVE NEW PRODUCT
app.post("/products", (req, res) => {
  const data = {
    id: products.length,
    name: req.body.name,
    category: req.body.category,
    price: Number(req.body.price)
  }
  saveNewItems(products, data)
  res.send(products)
})

// DELETE ALL
app.delete("/products", (req, res) => {
  products.splice(0, products.length)
  res.send(products)
})

// DELETE ONE
app.delete("/products/:id", (req, res) => {
  const currentProducts = products.filter(product => {
    return product.id !== Number(req.params.id)
  })
  products = currentProducts
  res.send({
    message: `product deleted`,
    currentProducts: products
  })
})

// UPDATE ONE
app.put(`/products/:id`, (req, res) => {
  const itemId = Number(req.params.id)
  const name = Number(req.body.name)
  const category = Number(req.body.category)
  const price = Number(req.body.price)

  // Find data index
  const itemIndex = products.findIndex((item, index) => {
    return item.id === itemId
  })

  // Modify matched data
  products[itemIndex]["name"] = name
  products[itemIndex]["category"] = category
  products[itemIndex]["price"] = price

  // Prepare response
  const response = {
    message: `updated a product through id`,
    itemId: itemId,
    itemBody: itemBody,
    itemIndex: itemIndex,
    products: products
  }

  // Send response
  res.send(response)
})

app.listen(PORT, HOST, () => {
  console.log("Server is listening on localhost:3000")
})