var minhaPromise = function () {

    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }

    });

}

minhaPromise()
.then(function (response) {
    console.log(response);
}).catch(function (error) {
        console.warn(error);
    });

    /*
// Testes de compreensão
        Promise((resolve, reject)=>{
            resolve(console.log("Deu certo"))
        }).then((response) => {
            console.log(response);
        }).catch((reject)=>{
            console.log(reject)
        })
    
    */ 
