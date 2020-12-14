var express = require('express');
var router = express.Router();
const Tab = require ('../models/tab');

var create = require('../controllers/users/create');



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


//tests
router.get('/name',(req, res) =>{
    const data = {
            username: 'test',
            age: 20,
    };
    res.json(data);

    

});

router.delete('/delete/:id',(req, res) => {
    

    Tab.findOneAndRemove({ })
        .then((data) => {
            console.log ('data:', data);
            res.json(data);
    })
        .catch((error) => {
        console.log ('error:', daeerrorta);
    });

});

/*router.delete('/delete/:id', function (req, res) {
    
    var id = req.params.id;
    ChoiceModel.findOneAndRemove({_id: id}, function(err){
    if(err) {
        console.log(err);
        return res.status(500).send();

    }
    return res.status(200).send()
    
   } );
    
   

});*/



    /*try{

            const result = await product.findByIdAndDelete(id)
            res.send(result)
    }catch(error){
        console.log(error.message);
    }*/



/*router.delete('/delete/:id',(req, res) => {
    

    Tab.findOneAndRemove({ _id: id})
        .then((data) => {
            console.log ('data:', data);
            res.json(data);
    })
        .catch((error) => {
        console.log ('error:', daeerrorta);
    });*/



/* CREATE 1 user */
router.put('/api', create);
/* DELETE 1 user */
//router.delete('/:id', deleteUser);
/* UPDATE 1 user */
//router.post('/:id', updateUser)



module.exports = router;