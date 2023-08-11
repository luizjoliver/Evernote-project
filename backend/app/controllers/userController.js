const User = require("../models/user")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const secret = process.env.JWT_TOKEN;

const userController = {
    register:async(req,res) =>{
            const {name,email,password} = req.body
            const newUser = new User({name,email,password})

            try {
              await newUser.save();
              res.status(200).json(newUser)
            } catch (error) {
              console.log(error);
              res.status(500).json({error:"Error registering new user"})
            }
          

    },
    login: async(req,res) =>{
        const {email, password} = req.body

        try {
            const user = await User.findOne({email})
            if(!user){
                res.status(401).json({error:"Incorrect email or password"})
            } 
            else{
                user.isCorrectPassword(password,function(error,same){
                    if(!same) {
                        res.status(401).json({error:"Incorrect email or password"})
                    }
                    else{
                        const jwtToken = jwt.sign({email},secret,{expiresIn:"1d"})
                        res.json({user:user,token: jwtToken})
                }
                })
                        }

        } catch (error) {
            console.log(error);
            res.status(500).json({error:"Internal error, please try again"})
        }
    },
    updateNameAndEmail:async(req,res) =>{
        const { name, email } = req.body;

         try {
           const user = await User.findOneAndUpdate(
             {_id: req.user._id},
             { $set: { name: name, email: email}},
             { upsert: true, 'new': true }
           )
           res.json(user);
         } catch (error) {
           res.status(401).json({error: error});
         }
    },
    updatePassword:async(req,res) =>{
        const { password } = req.body;

  try {
    const user = await User.findOne({_id: req.user._id})
    user.password = password
    user.save()
    res.json(user);
  } catch (error) {
    res.status(401).json({error: error});
  }
    },
    deleteUser:async(req,res) =>{
         try {
               let user = await User.findOne({_id: req.user._id });
               await user.delete();
               res.json({message: 'Ok Deleted User!'}).status(201);
             } catch (error) {
               res.status(500).json({error: error});
             }
    }
    
}
module.exports = userController