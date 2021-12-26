const { getPriceToken } = require("../coingecko/tokens");


const messageCreate = async(msg) =>{
    if(msg.content.toUpperCase().includes(process.env.PREFIX + ' COIN')){

        const token = msg.content.substring(msg.content.lastIndexOf(" ") + 1).toUpperCase();
        const price = await getPriceToken(token)
        
        msg.channel.send(`${token}: $${price}`)
        
        return true;
    }
    return false;
}

module.exports = {
    messageCreate
}