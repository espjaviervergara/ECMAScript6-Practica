// antes de ecmasript 6

function newFunction(name, age, country) {
    var name = name || 'Javier';
    var age = age || 32;
    var country = country || 'Colombia';
    console.log(name, age, country);
}

newFunction();


// con ecmascript 6

function newFunction2(name = 'Javier', age = 32, country = "Colombia") {
    console.log(name, age, country);
}

newFunction2();
newFunction2('yeimis', 36, 'Venezuela');

let hello = "Hello";
let world= "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
let lorem = `Una frase epica
segunda frase epica
tercera frase epica
`;
console.log(lorem);