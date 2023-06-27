const arr = [1, 2, 3, 4, 5, 6];

//duplicar
const newArray = arr.map(function(x) {
    console.log(x*2)
})

//filtrar

const arrayFilter = arr.filter(x => x % 2 === 0);
console.log(arrayFilter)

// sumar todos los valores
const sum = 0;
const total = arr.reduce((acc, currentValue) => acc + currentValue, sum)
console.log(total)
