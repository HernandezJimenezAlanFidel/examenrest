const { response } = require("express")


const login =(req,res = response)=>{


    res.json({
        msg:'Login listo'
    })
}


module.exports={
    login
};