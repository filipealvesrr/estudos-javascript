const usuarios = [
    {nome : 'Carlos', tecnologias : ['HTML', 'CSS']},
    {nome : 'Jarmine', tecnologias : ['JavaScript', 'CSS']},
    {nome : 'Tuane', tecnologias : ['HTML', 'Node.js']},
];

function checaSeUsuarioUsaCSS(usuario){
    for(let i = 0; i < usuario.tecnologias.length; i++) {
        if(usuario.tecnologias[i] == 'CSS'){
            return true;
        }
    }
}

for(let i = 0; i < usuarios.length; i++){
    const TrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
    if(TrabalhaComCSS){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS.`);
    }
}