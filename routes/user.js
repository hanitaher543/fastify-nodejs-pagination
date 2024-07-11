const User   = require ('../models/user');
const bcrypt = require ('bcrypt');



const Router = (fastify, options, done) =>{


    // API POST : Add new user 

    fastify.post('/addUser', async (req, res) => {

        // Read data from request body
        const { fullname, email, password, telephone, address} = req.body;
        console.log({fullname, email, password, telephone, address});

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

            //res.status(500).send({error: 'User registration failed', details: error});

            console.error('Error creating user:', error);
            res.status(500).send({ error: 'Failed to create user' });
        }
    });


    //API GET : Get all users registered from database

    fastify.get('/getUsers', async (req, res) => {

        try{
            const users = await User.findAll({
                attributes: ["fullname", "email", "password", "telephone", "address"],
            });
            console.log(users)
            res.status(200).send({message: 'User already exists in this database.', users});

        } catch(error)
        {
             res.status(500).send({ message: error.message });

        }
    });


    //Running Router
    done();

};

module.exports = Router;