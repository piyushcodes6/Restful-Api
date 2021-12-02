const express=require("express");
const router=express.Router();
const userSchema=require("../model/userModel");

router.post("/register" , (req,res)=>{
    const user=new userSchema(req.body);

    user.save((err,user)=>{
        if(err){
            res.json(err)
        }else{
              res.json({success:"user registered", user})
        }
        })
})

router.get("/getUsers",(req,res)=>{
    userSchema.find({},(err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})

router.get( "/getAUser/:id" , (req,res)=>{
    console.log(req.params.id);
userSchema.findOne({},(err,users)=>{
    if(err){
        res.json(err)
    }else{
        res.json(users)
    }
})

})


router.put("/updateUser/:id", (req,res)=>{
    const id=req.params.id;
    userSchema.findOneAndUpdate({_id:id}, req.body, (err)=>{
        if(err){
            res.json(err)
        }else{
            res.json("user Updated")
        }
    })
})


router.delete("/deleteUser/:id", (req,res,next)=>{
const id=req.params.id;
userSchema.findOne({_id:id}, (err,users)=>{

    if(err){
        console.log(err)
    }else{
        if(user!==null){
            next();
        }else{
            res.json("user not found")
        }
    }
    
})


},(req,res)=>{
    const id=req.params.id;
    userSchema.findOneAndDelete({_id:id},(err)=>{
        if(err){
            res.json(err)
        }else{
            res.json("user Deleted")
        } 
    })
})

module.exports=router;