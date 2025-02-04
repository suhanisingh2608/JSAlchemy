let selena = {
    name: "Selena",
    age: 18,
    isCool: true,
    hobbies: ["singing", "dancing", "acting"],
    greet: function() {
        console.log("Hello, I am Selena");
    }
};

console.log(Object.keys(selena));
console.log(Object.values(selena));
console.log(selena.hasOwnProperty("name"));
console.log(selena.hasOwnProperty("height"));
console.log(typeof(selena.age));
