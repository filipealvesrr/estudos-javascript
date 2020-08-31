const nome = 'Carlos';
const peso = 84;
const altura = 1.88;

const imc = peso / (altura**2);

let mensage;

if (imc >= 30) {
    mensage = `${nome}, você está acima do peso`;
} else {
    mensage = `${nome}, você não está acima do peso`;
}

console.log(mensage);