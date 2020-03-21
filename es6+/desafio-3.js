const arr = [1, 2, 3, 4, 5];

arr.map((item) => {

    return item + 10;

});

const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario) => {

    return usuario.idade;

}

mostraIdade(usuario);

const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => {

    return { nome, idade };

}

mostraUsuario(nome, idade);
mostraUsuario(nome);

const promise = () => {

    return new Promise((resolve, reject) => {

        return resolve();

    });

}



