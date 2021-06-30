const { response, request } = require('express');
const cliente = require('../models/cliente');


const clientesGet = async (req = request, res = response) => {

    const clientes = await cliente.findAll();

    res.json(clientes);
}
const clienteGet = async (req = request, res = response) => {

    const {id} = req.params;
    const clientes = await cliente.findByPk(id);
    res.json(clientes);
    
}

const clientePost = async (req =request, res = response) => {

    const { body } = req;
    console.log(req);
    try {
        
            const clientes = new cliente(body);
        await clientes.save();

        res.json( clientes );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }



}

const clientePut = async (req, res = response) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const clientes = await cliente.findByPk( id );
        await clientes.update( body );

        res.json( clientes );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}

const clientePatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const clienteDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}




module.exports = {
    clienteGet,
    clientesGet,
    clientePost,
    clientePut,
    clientePatch,
    clienteDelete,
}