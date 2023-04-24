const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// para percorrer o array inteiro do começo ao fim 
for (let nota of notas) { 
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}.`);