const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

function soma(...nums) {

    // return na mesma implicito, tudo na mesma linha
    // return nums.reduce((a, b) => a + b );

    return nums.reduce((a, b) => {
        return a + b;
    });

}

console.log(soma(1, 2, 90, 30, 35));

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};

console.log(usuario2, usuario3);
