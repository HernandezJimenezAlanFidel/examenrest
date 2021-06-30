const cliente = require('../models/cliente');



const emailExiste = async( correo = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await cliente.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo }, ya está registrado`);
    }
}

const nombreusuarioExiste = async( nombreusuario = '' ) => {

    // Verificar si el correo existe
    const existeNombreUsuario = await cliente.findOne({where: {
        nombre_usuario: nombreusuario
    } });
    if ( existeNombreUsuario ) {
        throw new Error( `El nombre de usuario: ${ nombreusuario }, ya está registrado`);
    }
}

const existeClientePorId = async( id ) => {

    // Verificar si el correo existe
    const existeCliente = await cliente.findByPk(id);
    if ( !existeCliente ) {
        throw new Error( `El id: ${ id } no existe `);
    }
}



module.exports = {
    emailExiste,
    nombreusuarioExiste,
    existeClientePorId
}

