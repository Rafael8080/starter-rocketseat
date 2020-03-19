
function checarIdade(idade) {
    return new Promise((resolve, reject) => {

        setTimeout(function(){
            if(idade >= 18){
                resolve('Maior que 18');
            } else{
                reject('Menor que 18');
            }

        }, 2000);

    });

}

checarIdade(17)
    .then(function(res){
        console.log(res)
    })
    .catch(function(res){
        console.log(res)
    })