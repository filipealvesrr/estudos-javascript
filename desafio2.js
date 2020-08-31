const nome = 'Alberto';
const sexo = "M";
const idade = 48;
const contribuicao = 30;

var mensage;

if (sexo == 'M') {
    
    if (idade + contribuicao >= 95 && contribuicao >= 35) {
        mensage = `${nome}, você pode se aposentar!`;
    } else {
        mensage = `${nome}, você não pode se aposentar!`;
    }
} else if (sexo == "F"){
    
    if (idade + contribuicao >= 85 && contribuicao >= 30) {
        mensage = `${nome}, você pode se aposentar!`;
    } else {
        mensage = `${nome}, você não pode se aposentar!`;
    }
}

console.log(mensage);