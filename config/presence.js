

const presence = (c) =>{
    c.user.setPresence({
        status:"online",
        activity:{
            name:"Viendo IkedaHarket",
            type:"WATCHING"
        },
    })
}

module.exports = {
    presence
}