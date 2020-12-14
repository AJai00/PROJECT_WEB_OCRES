var express = require('express');
var router = express.Router();
const Tab = require ('../models/tab');

var create = require('../controllers/users/create');
var deleteUser = require('../controllers/users/deleteUser');
var updateUser = require("../controllers/users/update");

//routes
router.get('/',(req, res) => {
    

    Tab.find({ })
        .then((data) => {
            console.log ('data:', data);
            res.json(data);
    })
        .catch((error) => {
        console.log ('error:', daeerrorta);
    });

});

router.get('/name',(req, res) =>{
    const data = {
            username: 'cacaca',
            age: 20,
    };
    res.json(data);

    

});

/* GET all users */
//router.get('/', readAll);
/* GET 1 user */
//router.get('/:id', readUser);
/* CREATE 1 user */
router.put('/api', create);
/* DELETE 1 user */
router.delete('/:id', deleteUser);
/* UPDATE 1 user */
router.post('/:id', updateUser)



module.exports = router;