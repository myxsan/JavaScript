let email = "myx@mail.com";
let firstName = "Musa"
let lastName = "Yuksel"
/*
//Character count -> length
console.log(email.length);
*/

/*
//Finding firs character in string
console.log(firstName[0]);
console.log(firstName.charAt(0));
*/

/*
//Uppercase and Lowercase
firstName = firstName.toUpperCase();
console.log(firstName);
firstName = firstName.toLowerCase();
console.log(firstName);
*/
/*
//Finding any info in string -> Search
console.log(email.search("@")); //index of "@" -> 3
console.log(email[3]); //@
console.log(email.search("not-including-this")); //-1
*/

/*
//Slicing strings
let domain = email.slice(email.indexOf("@") + 1);
domain = domain.slice(0, domain.indexOf("."));

console.log(domain);
*/

/*
//Changing character in string -> Replace
let changedEmail = email.replace('mail.com', 'yuksel.com');
console.log(changedEmail);
*/

/*
//Includes
email = email.includes('@');//True -> char exists
email = email.includes('asdasd');//False -> char does not exist
*/

/*
//StartsWith and EndsWith
email.endsWith('.com'); //True
email.startsWith("@"); //False
*/

/*
//Making string start with upper case
firstName = "firstname"
lastName = "lastname"
let fullName = `${firstName[0].toLocaleUpperCase()}${firstName.slice(1)} ${lastName[0].toLocaleUpperCase()}${lastName.slice(1)}`;
console.log(fullName);
*/