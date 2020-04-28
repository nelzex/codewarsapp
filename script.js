const form = document.getElementById('form')
const name = document.getElementById('username');
const proxy = "https://cors-anywhere.herokuapp.com/";

form.addEventListener('submit',(e)=>{
    
    var username = name.value;
    
    e.preventDefault();
    //console.log(name.value);

    getData(username);

})

//Fetches user data from the codewars API
function getData(user){
    try{
        fetch(`${proxy}https://www.codewars.com/api/v1/users/${user}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            //console.log(data);
            setElements(data);
    
        });
    }
    catch(error){
        console.log(error);
    }
    
}




//sets the DOM Elements
function setElements(data){
    //selecting data
    const{rank,score} = data.ranks.overall;  
    const name = data.name;
    const username = data.username;
    const languages = getLangs(data);

    getKatas(username);

    document.getElementById("fullname").innerHTML = `Username: ${username}`;
    document.getElementById("rank").innerHTML = `Rank: ${rank}`;
    document.getElementById("score").innerHTML = `Score: ${score}`;
    document.getElementById("name").innerHTML = `Name: ${name}`;
    document.getElementById("languages").innerHTML = `Languages: ${languages}`

}

//returns the users programming languages
function getLangs(data){
    //array of users languages
    var langs = [];
    for(let [key,value] of Object.entries(data.ranks.languages)){
        langs.push(key);
    }

    return langs.join();
}

function getKatas(user){
    try{
        fetch(`${proxy}https://www.codewars.com/api/v1/users/${user}/code-challenges/completed?page=0`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            //console.log(data);
            displayKatas(data);
        });
    }
    catch(error){
        console.log(error);
    }

}

