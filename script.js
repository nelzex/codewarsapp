const form = document.getElementById('form')
const name = document.getElementById('username');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //console.log(name.value);

    getData(name.value);
})


function getData(user){
    const proxy = "https://cors-anywhere.herokuapp.com/";
    try{
        fetch(`${proxy}https://www.codewars.com/api/v1/users/${user}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            console.log(data);
            setElements(data);
    
        });
    }
    catch(error){
        console.log(error);
    }
    
}

function setElements(data){
    //selecting data
    const{rank,score} = data.ranks.overall;  
    const name = data.name;
    const username = data.username;

    console.log(username);
    console.log(name);
    console.log(rank);
    console.log(score);
    document.getElementById("fullname").innerHTML = `Username: ${username}`;
    document.getElementById("rank").innerHTML = `Rank: ${rank}`;
    document.getElementById("score").innerHTML = `Score: ${score}`;
    document.getElementById("name").innerHTML = `Name: ${name}`;






}


    