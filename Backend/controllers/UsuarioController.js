const { Usuario } = require('../models/');
const bcrypt = require('bcryptjs')
const servtoken = require('../services/token');


module.exports = {

    list : async (req, res, next) => {
        try {
            const re = await Usuario.findAll();
            res.status(200).json({re});
        } catch (error) {
            res.status(500).json({'error' : 'Ocurrio algo'});
            next(error);
        }
    },

    register : async (req, res, next) => {

    },

    login : async (req, res, next) => {

        try {
            const user = await Usuario.findOne( { where :  { email : req.body.email } } );
            if(user){
                // Evaluar contraseña
                const contrasenhaValida = bcrypt.compareSync(req.body.password, user.password);
                if (contrasenhaValida)
                {
                    const token = servtoken.encode(user.id, user.rol);
                    
                    /*jwt.sign( {
                        id: user.id,
                        username: user.username,
                        email: user.username,
                        rol: user.rol,
                    }, 'mipalabrasecreta', {
                        expiresIn : 3600
                    } );*/
    
                    res.status(200).send({
                        auth : true,
                        tokenReturn : token,
                        user : user
                    });
    
                }  else {
                    res.status(401).send({ auth: false, tokenReturn: null, reason: 'Contraseña invalida' });
                }
    
            } else {
                res.status(404).send('Usuario no existe');
            }
    
        } catch (error) {
            res.status(500).json({ 'error' : 'Oops paso algo' });
            next(error);
        }
    
    
    },

    update : async (req, res, next) => {
        try {
            const user = await Usuario.findOne( { where :  { email : req.body.email } } );
            const contrasenhaAnrigua = bcrypt.compareSync(req.body.password, user.password);
            const newcontrasenha = bcrypt.hashSync(req.body.newpassword);
            if (contrasenhaAnrigua) {
                const re = await Usuario.update({nombre: req.body.nombre, password: newcontrasenha, estado: req.body.estado},{ where: {email: req.body.email}});
                res.status(200).json(re);
            } else {
                res.status(401).send({ auth: false, tokenReturn: null, reason: 'Contraseña invalida' });
            }
        } catch (error) {
            res.status(500).json({'error' : 'Ocurrio algo'})
            next(error);
        }
    },

}

