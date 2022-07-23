const { request } = require('express');
const express=require('express');
const router=express.Router()
const details=require('../DB/dbSchema')

const arr=[]

router.get('/grocery/getall',async(req,res)=>{
    const find = await details.find();
    res.send(find);
})

router.post('/grocery/add',async(req,res)=>{
    try{
        console.log("testing data")
        const find = await details.find({GroceryItem:req.body.GroceryItem})
        if(find && (find.length>0)){
            throw 'duplicate element'
            
        }
    const result = await details.create(req.body)
    res.send({message:"added data successfully",result:result})
    }
    catch(err){
        res.send(err)
    }
})

router.patch('/grocery/updatePurchaseStatus/:id',async(req,res)=>{
    try{
        
    const update = await details.findByIdAndUpdate({_id:req.params.id}, 
        {$set:{isPurchased:req.body.isPurchased}}
        )
    
    res.send(update);

    }
    catch(err){
        res.send(err)
    }
    // try{
    //     const data = await Post.updateOne(
    //        { _id: req.params.Id},
    //        {$set : {name:req.body.name,
    //     phone:req.body.phone}}
    //     );
    
    //     res.json(data)
    // }catch(err){message:err}
    
})

router.delete('/grocery/deletegroceryitem/:id',async(req,res)=>{
    try{
     const deletebyid=await details.findByIdAndDelete(req.params.id);
     res.send(deletebyid);
    }
    catch(err){
       res.send(err)
    } 
   
})

module.exports=router;

