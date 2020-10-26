const {User,validate} = require('../models/employment')

exports.getUsers = async (req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 2;

    try{
        return await User
            .find()
            .limit(limit)
            .exec((err,users)=>{
                if(err){
                    return res.status(400).send({
                        error : "No user found"
                    })
                }
                res.json({
                    message: 'Fetched User Employments successfully.',
                    totalItems:users.length,
                    Employments: users
                })
            })
    }catch (e) {
        res.error(e)
    }


};

exports.createEmp = async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user;
    user = new User(req.body);

    //todo: Ref course not found validation
    try{
        await user.save();
        res.send({
            message: 'Employment created successfully',
            Employment: user,
        })
    }catch (e) {
        res.status(400).send("Something went wrong")
    }

}