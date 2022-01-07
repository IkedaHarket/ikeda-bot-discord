const axios = require('axios').default;
const fs = require('fs')

const coinGeckoApi = 'https://api.coingecko.com/api/v3/simple/'

let dataCoins = JSON.parse(fs.readFileSync('./coingecko/dataCoins.json'))
let tokens = {};
let cryptomonedas = {};


const getTokenPrice = async(token)=> await axios.get(`${coinGeckoApi}token_price/${token.platform}?contract_addresses=${token.contract}&vs_currencies=usd`)

const getPrice = async(cripto)=> await axios.get(`${coinGeckoApi}price?ids=${cripto}&vs_currencies=usd`)


for(let key in dataCoins){
    if(typeof dataCoins[key] == 'object'){
        tokens[key] = dataCoins[key]
        continue;
    }
    cryptomonedas[key] = dataCoins[key]
}

const getPriceToken = async(token) =>{

    let resp = {resp: false};

    Object.keys(cryptomonedas).find(coin => {
        if(token === coin) resp = {resp:true, coin: cryptomonedas[coin]}
    })
    if(resp.resp) {
        const {data} = await getPrice(resp.coin)
        return Object.values(data)[0].usd
    }

    Object.keys(tokens).find(coin => {
        if(token === coin) resp = {resp:true, coin: tokens[coin]}
    })
    if(resp.resp) {
        const {data} = await getTokenPrice(resp.coin)
        return Object.values(data)[0].usd
    }


    return "Moneda no agregada"
}


module.exports = {
    getPriceToken
}