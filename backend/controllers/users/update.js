const UserModel = require('../../models/users.models');


/**
 * SECURE : Params and Body
 */
const secure = async (req) => {
    const inputs = {};

    if (req.params.id === undefined || req.params.id === null) {
        throw new Error('ID undefined/null');
    }
    inputs.id = req.params.id;


    return inputs;
};

/**
 * PROCESS :
 */
const process = async (params) => {
    const inputs = params;
    
    try {
        const data = await UserModel.findByIdAndUpdate(inputs.id).exec();


        return data;
    } catch (error) {
        throw new Error('User can\'t be Update'.concat(' > ', error.message));
    }
};

/**
 * LOGIC :
 */
const updateUser = async (req, res) => {
    try {
        const inputs = await secure(req);

        const data = await process(inputs);
        res.status(200).json(data);
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(400).json({ 'message': error.message });
    }
};
module.exports = updateUser;