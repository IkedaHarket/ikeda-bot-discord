const axios = require('axios').default;

const coinGeckoApi = 'https://api.coingecko.com/api/v3/simple/'

const {SLP,MASTER,BTC, SOL, LUNA} = require('./dataCoins')


const getTokenPrice = async(token)=> await axios.get(`${coinGeckoApi}token_price/${token.platform}?contract_addresses=${token.contract}&vs_currencies=usd`)

const getPrice = async(cripto)=> await axios.get(`${coinGeckoApi}price?ids=${cripto}&vs_currencies=usd`)

const getPriceToken = async(token) =>{
    let data = {};
    
    switch (token) {

        case 'SLP':
            data = await getTokenPrice(SLP)
            break;
            
        case 'MASTER':
            data = await getTokenPrice(MASTER)
        break;
                
        case 'BTC':
        case 'BITCOIN':
            data = await getPrice(BTC)
        break;

        case 'SOL':
        case 'SOLANA':
            data = await getPrice(SOL)
        break;

        case 'TERRA':
        case 'LUNA':
            data = await getPrice(LUNA)
        break;
        
        default:
            return 'Moneda no agregada';
    }
    return Object.values(data.data)[0].usd
}


module.exports = {
    getPriceToken
}