const {Employment} = require('../models/employment')

exports.getUsers = async (req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 14;

    try{
        return await Employment
            .find()
            .limit(limit)
            .exec((err,employment)=>{
                if(err){
                    return res.status(400).send({
                        error : "No employments found"
                    })
                }
                res.json({
                    message: 'Fetched User Employments successfully.',
                    totalItems:employment.length,
                    Employments: employment
                })
            })
    }catch (e) {
        res.error(e)
    }


};

exports.createEmp = async (req,res)=>{

    let employment;

    const{company,description,location,period,country,through,is_currently,title} = req.body;
    if(!is_currently && !through){
        return res.status(400).json({
            error:"through should not empty"
        })
    }
    employment = new Employment({
        company,
        country,
        title,
        description,
        location,
        period,
        through,
        is_currently
    });

    //todo: Ref course not found validation
    try{
        await employment.save();
        res.send({
            message: 'Employment created successfully',
            Employment: employment,
        })
    }catch (e) {
        res.status(400).send(e.message)
    }

}

exports.deleteEmp = async (req,res)=>{

    const {id} = req.params;

    try{
        await Employment.findOneAndDelete({_id:id})
            .then(result=>{
                res.status(200).json({
                    message:"Successfully deleted"
                })
            })
            .catch(e=>{
                return new Error(e.message)
            })
    }catch (e){
        console.log(e.message)
    }

}