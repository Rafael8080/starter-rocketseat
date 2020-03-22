// class List {

//     constructor() {

//         this.data = [];

//     }

//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }

// }

// class TodoList extends List{

//     constructor(){
//         // construtor da classe pai
//         super();

//         this.usuario = 'Diego';
//     }

//     mostraUsuario(){
//         console.log(this.usuario)
//     }

// }

// class Matematica {

//     // O metodo estático não enxerga o restante da classe, metodo estatico é simplesmente pra auxiliar a gente a fazer alguma coisa
//     static soma (a, b) {
//         return a + b;
//     }

// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     console.log(Matematica.soma(1, 2));
//     MinhaLista.mostraUsuario();
// }

// LET E CONST
// const não pode atribuir uma variavavel !(const a = 1;a = 3) 

// // Mutação
// const usuario = { nome: 'Diego' };
// usuario.nome = 'Cleiton';

// console.log(usuario);

// function teste(x){
//     // O let funciona por escopo ou seja por delimitador de chaves
//     let y = 2;
//     console.log(y);
//     if(x > 5) {
//         let y = 4;
//         console.log(x, y);
//     }

// }

// teste(10);
//const arr = [1,2, 3, 4, 5, 6, 7, 8, 9];

// Faz uma operação pra cada item do array
        // const newArr = arr.map(function(item, index){

        //     return item + index;

        // });

// console.log(newArr);

//Soma os itens de um array
        // const sum = arr.reduce(function(total, next){

        //     return total + next;

        // });

// console.log(sum)

// Filtrando o array com base em condição
        // const filter = arr.filter(function(item){

        //     return item % 2 === 0;

        // });

// console.log(filter);

        // Encontrando um item em um array
        // const find = arr.find(function(item){

        //     return item === 0;

        // });

        // console.log(find);

// const arr = [1, 2, 3, 4, 5, 6];

// // Retorno implicito
        // const newArr = arr.map( item => item * 2);

        // console.log(newArr);

        // const teste = () => {
        //     return 'Teste';
        // }

        // const testando = () => ({nome: 'Diego'})

        // console.log(teste(), testando());

// Parametros padrão
        // function soma (a = 3, b = 6) {

        //     return a + b;

        // }

        // console.log(soma(1));
        // console.log(soma());


// Desestruturação
        // const usuario = {
        //     nome: 'Diego',
        //     idade: '23',
        //     endereco: {
        //         cidade: 'Rio Sul',
        //         estado: 'SC'
        //     }
        // };

        // console.log(usuario);

        // const { nome, idade, endereco: { cidade } } = usuario;
        // console.log(nome);
        // console.log(idade);
        // console.log(cidade)

        // function mostraUsuario( { nome, idade, endereco:{cidade} }){
        //     console.log(nome, idade, cidade);
        // }

        // mostraUsuario(usuario);

    //REST
    // const usuario = {
    //     nome: 'Diego',
    //     idade: 23,
    //     empresa: 'Rocketseat'
    // };

    // const { nome, ...resto } = usuario;
    // console.log(nome);
    // console.log(resto);

    // const arr = [1, 2 ,3 ,4];
    // const [a, b, ...c] = arr;

    // console.log(a);
    // console.log(b);
    // console.log(c);

    // function soma(a, b,...params){
    //     return params;
    // }

    // console.log(soma(1, 3, 4, 4,4 ,4 ,4 , 2));

    // // SPRED
    // const arr1 = [1, 2, 3];
    // const arr2 = [4, 5, 6];

    // const arr3 = [...arr1, ...arr2];
    // console.log(arr3)

    // const usuario1 = {
    //     nome: 'Diego',
    //     idade: 23,
    //     empresa: 'Rocketseat'
    // }

    // const usuario2 = { ...usuario1};
    // console.log(usuario2);

    const nome = "Diego";
    const idade = 23;

    //Que horrror
   // console.log('Meu nome é + '+nome+' e tenho '+idade+' anos ');
  // Que maravilha    
    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// Se o nome da variavel for igual ao nome da propriedade, deixa apenas um nome sem precisa repetir
// Sintaxe curta de objeto
const usuario = {
    nome,
    idade,
    empresa: 'Rocketseat'
};

console.log(usuario);

