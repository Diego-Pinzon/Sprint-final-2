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

    add : async (req, res, next) => {
        try {
            const re = await Usuario.create(req.body);
            res.status(200).json(re);
        } catch (error) {
            res.status(500).json({'error' : 'Ocurrio algo'})
            next(error);
        }
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
            const re = await Usuario.update(req.body,{ where: {email: req.body.email}});
            res.status(200).json(re);
        } catch (error) {
            res.status(500).json({'error' : 'Ocurrio algo'})
            next(error);
        }
    },

    activate : async (req, res, next) => {
        try {
            const re = await Usuario.update({ estado: 1 },{ where: {id: req.body.id}});
            res.status(200).json(re);
        } catch (error) {
            res.status(500).json({'error' : 'Ocurrio algo'})
            next(error);
        }
    },
    deactivate : async (req, res, next) => {
        try {
            const re = await Usuario.update({ estado: 0 },{ where: {id: req.body.id}});
            res.status(200).json(re);
        } catch (error) {
            res.status(500).json({'error' : 'Ocurrio algo'})
            next(error);
        }
    },

}

