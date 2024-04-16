const axios = require("axios")
require("dotenv").config()
const {
APPID,
Q,
LIMIT,
URLBASE,
URLBASE2,
UNIT,
}=process.env // puxa as informações do .env

const temp=()=>{
    const nome = process.env.Q
    const url = `${URLBASE}?q=${Q}&limit=${LIMIT}&appid=${APPID}`//escrevendo a url parametros q desejo
    axios.get(url)
    .then(res=>{
        const latitude = res.data[0].lat//passa o caminho da resposta que quero buscar 
        const longitude = res.data[0].lon
        console.log(`${nome}:latitude:${latitude},longitude:${longitude}`) 
    const url2 = `${URLBASE2}?lat=${latitude}&lon=${longitude}&unit=${UNIT}&appid=${APPID}`
    axios.get(url2)
    .then(res=>{
        const feels_like = res.data.main.feels_like//passa o caminho da resposta que quero buscar 
        const description = res.data.weather[0].description
        console.log(`sensação termica:${feels_like},\ndescription:${description}`) 
    })
    })
}
temp()