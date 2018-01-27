//LEVEL 0----------------------------------------------------------------------
const express = require("express")
const app = express()

app.get("/", function(req, res) {
  res.send("Hello World!")
})

app.listen(3000, function() {
  console.log("Example app listening on port 3000!")
})

//LEVEL 1----------------------------------------------------------------------

// IMPORT MODULES
const bodyParser = require("body-parser")

// CONFIGURE
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

// DISPLAY PRODUCTS

app.get("/", (req, res) => {
  res.send(products)
})