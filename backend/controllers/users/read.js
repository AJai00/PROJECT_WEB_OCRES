const UserModel = require('../../models/users.models');


/**
 * SECURE : Params and Body
 */
const secure = async (req) => {
    const inputs = {};
    inputs.id = req.params.id;
    return inputs;
};

/**
 * PROCESS :
 */
const process = async (params) => {
    try {
        const data = await UserModel.findById(params.id);
        return data;
    } catch (error) {
        throw new Error('User can\'t be Read'.concat(' > ', error.message));
    }
};

/**
 * LOGIC :
 */
const readUser = async (req, res) => {
    try {
        const inputs = await secure(req);

        const data = await process(inputs);
        console.log("ohoho ?");
        res.status(200).json(data);
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(400).json({ 'message': error.message });
    }
};
module.exports = readUser;