module.exports = (app) => {
    const findAll = (req, res) => {
        app.db('users').select()
            .then(rsult => res.status(200).json(rsult))
       
    };
    
    const create = (req, res)=> {
        res.status(201).json(req.body);
    };

    return { findAll, create };
    
}