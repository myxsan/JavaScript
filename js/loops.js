/*
//filter
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCKTS = PRODUCTS.filter(x => x.length >= 5)
console.log(NEW_PRODUCKTS)

const USERS = [
    {name: "cart", isActive: false},
    {name: "curt", isActive: false},
    {name: "selo", isActive: true},
    {name: "fuko", isActive: true}
]

const ACTİVE_USERS = USERS.filter( x => x.isActive )
console.log(ACTİVE_USERS)
*/


//map
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]
let newProducts = PRODUCTS.map( product => product.toLowerCase() )
console.log(newProducts)
