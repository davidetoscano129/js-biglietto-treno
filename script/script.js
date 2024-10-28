// INPUT

const età = prompt ("Quanti anni hai?");
const km = prompt ("Per quanti km viaggerai?");

console.log(età);
console.log(km);


// IMPOSTAZIONE PROGRAMMA

let p = 0.21 * km

let result;
if (età < 19) {
    result = p - (p * 20 / 100);
    console.log(result)
} else if (età > 64) {
    result = p - (p * 40 / 100);
    console.log(result)
} else {
    result = p
    console.log(result)
}


const finalResult = result.toFixed(2);
console.log(finalResult);


// OUTPUT

console.log(`Il prezzo del tuo biglietto è di €${finalResult} `);
window.alert(`Il prezzo del tuo biglietto è di €${finalResult} `)

