

/**
 * SECURE : Params and Body
 */
const secure = async (req) => {
    const inputs = {};

    //Blindage des inputs utilisateurs
    if (req.body.nom === undefined || req.body.nom === null) {
        throw new Error('location undefined/null');
    }
    inputs.nom = req.body.nom;
    if (req.body.prenom === undefined || req.body.prenom === null) {
        throw new Error('PersonInHouse undefined/null');
    }
    inputs.prenom = req.body.prenom;
    if (req.body.vehicule === undefined || req.body.vehicule === null) {
        throw new Error('HouseSize undefined/null');
    }
    inputs.vehicule = req.body.vehicule;

    return inputs;
};

/**
 * PROCESS :
 */
const process = async (params) => {
    try {
        const data = await UserModel.create(params);
        return data;
    } catch (error) {
        throw new Error('Impossible de créer le user'.concat(' > ', error.message));
    }
};

/**
 * LOGIC :
 */
const create = async (req, res) => {
    try {
        const inputs = await secure(req);

        const data = await process(inputs);
        console.log("Utilisateur ajouté :  "+ data);
        res.status(200).json(data);
    } catch (error) {
        console.log('ERROR :', error);
        res.status(400).json({ 'message': error.message });
    }
};
module.exports = create;   