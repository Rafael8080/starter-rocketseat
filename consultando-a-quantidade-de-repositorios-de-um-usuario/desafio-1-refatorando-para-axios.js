var inputUser = document.querySelector('#inputUser');
var btn = document.querySelector('#btn');
var listElement = document.querySelector('#list-element');

btn.onclick = () => {

    var valueUser = inputUser.value;

    axios.get('https://api.github.com/users/'+valueUser+' ')
    .then((response)=>{
        var dataRepos = response.data.repos_url;
        countRepos(dataRepos);
    })
    .catch((error)=>{
        console.warn(error);
    })
}

function countRepos(data){

    axios.get(data)
    .then((res)=>{
        var data = res.data;
        console.log(res.data);
        renderListRepos(data);
        
    })
    .catch((err)=>{
        console.warn(err);
    })

}

function renderListRepos(datas){

    for(data of datas){
        var li = document.createElement('li');
        var liText = document.createTextNode('Repos'+((datas.indexOf(data)) + 1 )+'');
        li.appendChild(liText);
        listElement.appendChild(li);
    }

}
