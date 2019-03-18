// implement your API here
const express = require('express');
const cors = require('cors');
const db = require('./data/db.js');

const server = express();
const port = 4000;

server.use(express.json());
server.use(cors());



server.get('/', (req, res) => {
    res.send('Welcome to Web API');
})


// Get all Users
server.get('/api/users', (req, res) => {
    db
        .find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({message:'The users information could not be retrieved.'})
        })
})


// Get User by ID
server.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    db
        .findById(id)
        .then(user => {
            if(!user) {
                res.status(404).json({message:'The user with the specified ID does not exist'});
                return;
            }
            res.status(200).json(user)
        })
        .catch(error => {
            res.status(500).json({message:'The user information could not be retrieved.'})
        })
})


// Add User
server.post('/api/users', (req, res) => {
    if (!req.body.name || !req.body.bio) {
        res.status(400).json({message:'Please provide name and bio for the user.'});
        return;
    }
    db
        .insert(req.body)
        .then(userAddResponse => {
            res.status(201).json(userAddResponse);
        })
        .catch(error => {
            res.status(500).json({message:'There was an error while saving the user to the database'});
        })
})


// Delete User
server.delete('/api/users/:id', (req, res) => {
    db
        .remove(req.params.id)
        .then(deleteUser => {
            if(!deleteUser) {
                res.status(404).json({message:'The user with the specified ID does not exist.'})
            }
            res.status(204).end()
        })
        .catch(error => {
            res.status(500).json({message:'error deleting user'})
        })
})


// Update User
server.put('/api/users/:id', (req, res) => {
    db
        .update(req.params.id, req.body)
        .then(updated => {
            if(!updated) {
                res.status(404).json({message:'The user with the specified ID does not exist'})
            }
            if(!req.body.name || !req.body.bio) {
                res.status(400).json({message:"Please provide name and bio for the user."})
            }
            if(updated) {
                res.status(200).json(`${updated} user updated`)
            }
        })
        .catch(error => {
            res.status(500).json({message:'The user information could not be modified.'})
        })
})


server.listen(port, () => {
    console.log('\n** API up and running port 4k**');
});
