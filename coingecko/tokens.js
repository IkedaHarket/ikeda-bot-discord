const axios = require('axios').default;

const coinGeckoApi = 'https://api.coingecko.com/api/v3/simple/'

const {SLP,MASTER,BTC, SOL, LUNA} = require('./dataCoins')



const getPriceToken = async(token) =>{
    let data = {};
    switch (token) {

        case 'SLP':
            data = await axios.get(`${coinGeckoApi}token_price/${SLP.platform}?contract_addresses=${SLP.contract}&vs_currencies=usd`)
            break;

        case 'MASTER':
            data = await axios.get(`${coinGeckoApi}token_price/${MASTER.platform}?contract_addresses=${MASTER.contract}&vs_currencies=usd`)
            break;

        case 'BTC':
        case 'BITCOIN':
            data = await axios.get(`${coinGeckoApi}price?ids=${BTC}&vs_currencies=usd`)
        break;

        case 'SOL':
        case 'SOLANA':
            data = await axios.get(`${coinGeckoApi}price?ids=${SOL}&vs_currencies=usd`)
        break;

        case 'TERRA':
        case 'LUNA':
            data = await axios.get(`${coinGeckoApi}price?ids=${LUNA}&vs_currencies=usd`)
        break;

        default:
            return 'Moneda no agregada';
    }
    return Object.values(data.data)[0].usd
}

module.exports = {
    getPriceToken
}