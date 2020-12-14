const UserModel = require('../../models/users.models');


/**
 * SECURE : Params and Body
 */
const secure = async (req) => {
    const inputs = {};
    if (req.params.id === undefined || req.params.id === null) {
        throw new Error('Id undefined/null');
    }
    inputs.id = req.params.id;

    return inputs;
};

/**
 * PROCESS :
 */
const process = async (inputs) => {
    try {
        
        const data = await UserModel.findByIdAndRemove(inputs.id);
        

        return data;
    } catch (error) {
        throw new Error('Impossible de supprimer le user'.concat(' > ', error.message));
    }
};

/**
 * LOGIC :
 */
const deleteUser = async (req, res) => {
    try {
        const inputs = await secure(req);

        const data = await process(inputs);
        console.log("Utilisateur supprimé :  "+ data);
        res.status(200).json(data);
    } catch (error) {
        console.log('ERROR :', error);
        res.status(400).json({ 'message': error.message });
    }
};
module.exports = deleteUser;