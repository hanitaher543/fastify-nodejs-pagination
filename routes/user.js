const User = require ('../models/user');
const bcrypt = require ('bcrypt');



const Router = (fastify, options, done) =>{


    // API POST : Add new user 

    fastify.post('/add', async (req, res) => {

        // Read data from request body
        const { fullname, email, password, telephone, address} = req.body;

        //Using Try & Catch
        try{

            //  crypt password
            const hashedPassword = await  bcrypt.hash(password, 10);

            //  Create instance from my model
            const newUser = await User.create ({
                fullname,
                email,
                password : hashedPassword,
                telephone,
                address,
            });

            res.status(200).send({message: 'User registered successfully', user: newUser});

        } catch(error) {

            res.status(500).send({error: 'User registration failed', details: error});
        }
    });


    //Running Router
    done();

};

module.exports = Router;