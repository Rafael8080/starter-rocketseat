//Ajax é uma req1uisição assicrona que a gente realiza a algum backend
//Pra ter acesso a esses recursos a gente instancia a classe XMLHttpRequest()

var xhr = new XMLHttpRequest();

// Pra pegar uma informação, se eu quero pegar alguma informção, a gente ultiliza o metdo GET
xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}


