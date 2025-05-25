// using JSON object to string (Strigify)

const student = {
    Class: '10',
    age: '22',
    
}

const doStringify = JSON.stringify(student); //stringify it to string
const doParse = JSON.parse(doStringify); // parse it string to normal 
console.log(student);
console.log(doStringify);
console.log(doParse);





// *********************Fetch**************************
fetch('url')

.then(response => response.json())
.then(data => console.log(data));