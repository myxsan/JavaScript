/*
let item = [1, 2, 3]

//add -> push
item.push(4)
console.log(item)

//add to first -> unshift
item.unshift(0)
console.log(item)

//remove last
let last = item.pop() // also returns the last elemnt
console.log(item, last)

//removes first
let first = item.shift() // also returns the first element
console.log(item, first)

//changing any value
let index = 0
item[index] = "changed"
console.log(item[0], item)
*/

/*
//arrays in array
let users = [];
let maleUsers = ["Jack", "Jackob", "Matthew"]
let femaleUsers = ["Layla", "Regina", "Annie"]
users.unshift(maleUsers)
users.push(femaleUsers)
console.log(users.length)
*/

/*
let items = [1, 2, 3, 4, 5, 6]
let seperatedItems = items.splice(2,2) // starts from 2 and take 2 elements
console.log(seperatedItems)
console.log(items.indexOf(1)) // gets the index of value -> 0
let slicedItems = seperatedItems.slice(0,2)
console.log(slicedItems)

console.log(items.toString()) // all the elements converted to string
console.log(items.join("")) // added all the gaps between elements given value

let index = 0
items.splice(index, 0, "value") //-> changed the value at the given index
console.log(items[0])
*/