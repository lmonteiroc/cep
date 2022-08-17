const cep = document.querySelector("#cep");
const showData = (result)=>{
for(const campo in result)
if(document.querySelector('#'+campo)){
    document.querySelector('#'+campo).value = result[campo]
}
}

cep.addEventListener("blur",(e)=>{
let search = cep.value.replace("-", "")




    fetch(`https://viacep.com.br/ws/${search}/json/`)
    .then((response)=>{response.json()
    .then(data => showData(data))
})


  
})

showData()