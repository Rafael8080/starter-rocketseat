import axios from 'axios';
// import * as funcoes from './funcoes';
// // import soma from './soma';

// console.log(funcoes.soma(1, 2));
// console.log(funcoes.sub(4, 2));

// import Usuario, {idade as idadeUsuario} from './functions';

// console.log( Usuario.info() );
// console.log(idadeUsuario)

// ASYNC AWIT

// const minhaPromise = () => new Promise((resolve, reject)=>{
//     setTimeout(() => {resolve('ok')}, 2000);
// });

// async function executaPromise(){
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
// }

// const executaPromise = async () => {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }
// O await precisa está dentro de uma com função que precede "async"

// executaPromise();

// Configurando o axios

// import axios from 'axios';

// class Api {
//     static async getUserInfo(username) {
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`);
//             console.log(response);
//         } catch (err) {
//             console.warn("Erro na API");
//         }
//     }
// }
// Api.getUserInfo('Rafael8080');
// Api.getUserInfo('Rafael80b80');

//Exercicio modulo 3

// const delay = () => new Promise(resolve =>
//      {
//          console.log(resolve);
//          setTimeout(resolve, 1000);

//     });

// async function umPorSegundo() {
//   await delay();
//   console.log("1s");

//   await delay();
//   console.log("2s");

//   await delay();
//   console.log("3s");
// }

// umPorSegundo();


// import axios from 'axios';
// async function getUserFromGithub(user) {

//     try{

//         const response = await axios.get(`https://api.github.com/users/${user}`);
//         console.log(response.data)

//     } catch(err) {

//         console.warn("Usuário não existe");

//     }

// }
// getUserFromGithub('diego3g');
// getUserFromGithub('Rafael8080');

class Github {
    static async getRepositories(repo) {
      try {
        const response = await axios.get(`https://api.github.com/repos/${repo}`);

        console.log(repo);
        console.log(response.data);
      } catch (err) {
        console.log("Repositório não existe");
      }
    }
  }

  Github.getRepositories("Rafael8080/restfull");
  Github.getRepositories("rocketseat/dslkvmskv");

// const buscaUsuario = async (usuario) => {

//     try {

//         const response = await axios.get(`https://api.github.com/users/${usuario}`);
//         console.log(response.data);

//     } catch (err) {

//         console.log("Usuário não existe");

//     }

// };

// buscaUsuario("diego3g");


