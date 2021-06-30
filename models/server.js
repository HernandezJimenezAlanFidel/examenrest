const express = require('express');
const cors = require('cors');
const db = require('../db/connection');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';
        this.usuariosPath = '/api/clientes';
        this.authPath = '/api/auth';

        // Middlewares
        this.dbConnection();
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }

    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            throw new Error( error );
        }

    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.authPath, require('../routes/auth'));
        this.app.use( this.usuariosPath, require('../routes/clientes'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
