const axios = require("axios")
require("dotenv").config()
const {
APPID,
Q,
LIMIT,
URLBASE,
}=process.env // puxa as informações do .env

const temp=()=>{
    const nome = process.env.Q
    const url = `${URLBASE}?q=${Q}&limit=${LIMIT}&appid=${APPID}`//escrevendo a url parametros q desejo
    axios.get(url)
    .then(res=>{
        const latitude = res.data[0].lat//passa o caminho da resposta que quero buscar 
        const longitude = res.data[0].lon
        console.log(`${nome}:latitude:${latitude},longitude:${longitude}`) 
    })
}
temp()