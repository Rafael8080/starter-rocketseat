var inputUser = document.querySelector('#inputUser');
var btn = document.querySelector('#btn');
var listElement = document.querySelector('#list-element');

btn.onclick = () => {

    var valueUser = inputUser.value;
    axios.get('https://api.github.com/users/' + valueUser + ' ')
        .then((response) => {
            var dataRepos = response.data.repos_url;
            renderLoading();
            countRepos(dataRepos);
            console.log(response.status);
        })
        .catch((error) => {
            renderError();
            // console.warn(error);
        })
}

function countRepos(data) {

    axios.get(data)
        .then((res) => {
            var datas = res.data;
            renderListRepos(datas);
        })
        .catch((err) => {
            console.warn(error);
        })

}

function renderError(){

    listElement.innerHTML = "";
    var liError = document.createElement('li');
    var liErrorText = document.createTextNode('Usuario não encontrado');

    liError.appendChild(liErrorText);
    listElement.appendChild(liError);

}

function renderLoading() {
    listElement.innerHTML = "";
    var liLoading = document.createElement('li');
    var liLoadingText = document.createTextNode('Carregando...');

    liLoading.appendChild(liLoadingText);
    listElement.appendChild(liLoading);
}

function renderListRepos(datas) {

    listElement.innerHTML = "";

    for (data of datas) {
        var li = document.createElement('li');
        var liText = document.createTextNode('Repos' + ((datas.indexOf(data)) + 1) + '');
        li.appendChild(liText);
        listElement.appendChild(li);
    }

}
