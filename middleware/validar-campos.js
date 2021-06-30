const { validationResult } = require('express-validator');


const validarCampos = ( req, res, next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json({Cve_error:-1 ,Cve_mensaje:errors});
    }

    next();
}



module.exports = {
    validarCampos
}
