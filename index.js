 const btnE1=document.getElementById("btn");

 const jokeEl=document.getElementById("joke");
const apiKey="pene5Wc66tfGMeWqGMZdCA==IGVcCB9JvkHUMQ74";

const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){


    try {
        jokeEl.innerText="Updating";
    btnE1.disabled=true;
    btnE1.innerText="Loading....";
    const respons=await fetch(apiURL,options);
    const data=await respons.json();

    jokeEl.innerText=data[0].joke;
    btnE1.disabled=false;
    btnE1.innerText="Tell me a joke";
        
    } catch (error) {
        jokeEl.innerText="something error ,try again later";
        console.log(error);
    }
    
   
}


btnE1.addEventListener("click",getjoke);