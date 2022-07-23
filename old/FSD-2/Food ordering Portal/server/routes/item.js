const express=require('express');
const router = require('express').Router();
const category=require('../model/item')
const categoryItem=require('../model/categoryItem')

router.get('/shop',async(req,res)=>{
    const find = await category.find();
    //console.log(find)
    res.send(find);
})

router.get('/info/:id',async(req, res)=>{
    try{  
        const result  = await categoryItem.find({categoryid:req.params.id})
        //console.log(result)
        res.send(result)
    }
    catch(err){
        res.send(err)
    }
})
router.post('/cart/add',async(req,res)=>{
    try{
        console.log("testing data")
        const find = await details.find({name:req.body.name})
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

router.patch('/cart/:id',async(req,res)=>{
    try{  
    const update = await details.findByIdAndUpdate({_id:req.params.id}, 
        {$set:{name:req.body.name}}
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

router.delete('/deleteCart/:id',async(req,res)=>{
    try{
     const deletebyid=await details.findByIdAndDelete(req.params.id);
     res.send(deletebyid);
    }
    catch(err){
       res.send(err)
    }
})

exports.router = router;