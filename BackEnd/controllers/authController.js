const Users = require ('../models/authModel')

const authController = {
    register : async(req,res) =>{
        try{
             const {name,email,password}= req.body
             console.log({name,email,password})
             if(!name|| !email|| !password)
             return res.status(400).json({ msg:"please fill in all fields"})
             
             
             if(!email)
             return res.status(400).json({msg:"wrong email"})
             

             if(!password<6)
             return res.status(400).json({msg:"wrong password"})
             
             const passwordHash = await bcrypt.hash(password,12)
             console.log({password,passwordHash})

        }
        
        catch (err){
            return res.status(500).json({
                msg:err.message
            })
          }
          login : async( req,res) =>{
               try{
                const {email,password}=req.body
                const user =await Users.findOne ({email})
                if (!user) return res.status(400).json({msg:"Enter correct Email"})
                
                const isMatch = await bcrypt.compare (password,user.password)
                if (!isMatch) return res.status(400).json({msg:"Password is incorrect"})     
            }
            catch(err){
                
               }
             }
            
             res.json({msg:" You have successfully registered"})
        
    }
}

 

module.exports =  authController
