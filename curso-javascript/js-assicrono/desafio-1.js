var promessa = () => {

    var inputUser = document.querySelector('#inputUser');
    var btn = document.querySelector('#btn');

    return new Promise((resolve, reject) => {

        btn.onclick = () => {

            var valueUser = inputUser.value;

            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.github.com/users/'+valueUser+' ');
            xhr.send(null);

            xhr.onreadystatechange = () => {

                if(xhr.readyState === 4) {
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                       reject('Erro, repositorio não encontrado');
                    }
                }

            }

        }

    });

}

promessa()
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.warn(error);
})