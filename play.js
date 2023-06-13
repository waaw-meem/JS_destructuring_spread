// Async and Promise Code

const fetchData = () =>{
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World! Welcome to the Node.js")
    }, 4000)
    });
    return promise
}

setTimeout(() => {
    console.log("Timer is Done!!")
    fetchData()
    .then(text => {
        console.log(text)
        return fetchData();
    })
    .then(text2 => {
        console.log(text2)
    });
}, 2000)

// Spread Operator with Destructuring

const hobbies = ["Playing","Reading"]
// Copying Array in new variable
const copiedArray = [...hobbies]
console.log(copiedArray) 

// Same for Object

const myObject = {
    name: "Wali Muhammad",
    age: 23
}

// Copying Object 
const copiedObject = {...myObject}
console.log(myObject)

// Destructuring 
const myFunction = ({name,age}) => {
    return name + age
}

console.log(myFunction(myObject))

// Other ways for destructuring Array and Object

// Array

const [hobbyOne, hobbyTwo] = hobbies;
console.log(hobbyOne)
console.log(hobbyTwo)

// Object

const {name, age} = myObject;
console.log(name)
console.log(age)