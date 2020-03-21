const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

const idadeUsers = usuarios.map((item, index)=>{

    return item.idade;

});

console.log(idadeUsers);

const maiorDeIdade = usuarios.filter((item)=>{

    return item.idade > 18 && item.empresa === 'Rocketseat';

});

console.log(maiorDeIdade);

const trabalhaNoGogle = usuarios.find((item)=>{

    return item.empresa === 'Google';

});

console.log(trabalhaNoGogle);

/*
    Filtrando uilizando map e REST/ para sobrescrever a propriedade de um
    objeto multiplcando por 2.
    ultilizando o filter para filtrar os usuarios com idade menor que 50 
*/
const calculo = usuarios
.map(usuario => ({...usuario, idade: usuario.idade * 2}))
.filter(usuario => usuario.idade <= 50);

console.log(calculo);




