import express from 'express'

import cors from 'cors'

import {rutasPersonalizadas} from '../Routes/rutas.js'

import { conectarConMongo } from '../Database/conexion.js'

export class ServidorAPI{


    constructor(){
        this.app = express()
        this.conectarConBD()
        this.activarBody()
        this.atenderPeticiones()
    }

    //Metodos de la clase ServidorAPI
    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("exito encendiendo el servidor: "+process.env.PORT)
        })
    }

    atenderPeticiones(){
        this.app.use('/',rutasPersonalizadas)
    }

    conectarConBD(){
        conectarConMongo() 
    }

    activarBody(){
        this.app.use(cors())
        this.app.use(express.json())//Esto es un midleuesles de express que sirve para activar la lectura de datos en diferentes formatos
    }


}