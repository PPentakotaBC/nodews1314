var express=require("express");
var router=express.Router();
var db=require("../db")


//Get all students
router.route("/")
    .get(function(req,res){
        db.Student.find({},function(err,students){
            if(err) res.status(500).send(err);
            res.status(200).send(students);
        })
    })
    .post((req,res)=>{
        var newStudent=new db.Student(req.body)
        newStudent.save((err,student)=>{
            if(err) res.status(500).send(err);
            res.send(student)
        })
    })

//Get single student
router.route("/:id")
    .get(function(req,res,next){
        var id=req.params.id;
        db.Student.findById(id,(err,student)=>{
            if(err) res.status(500).send(err);
            res.send(student);
        })
    })
    .delete(function(req,res){
        var id=req.params.id;
        db.Student.findByIdAndRemove(id,(err,student)=>{
            if(err) res.status(500).send(err);
            res.send(student);
        })
    })
    .put(function(req,res){
        var id=req.params.id;
        db.Student.findByIdAndUpdate(id,req.body,(err,student)=>{
            if(err) res.status(500).send(err);
            res.send(student);
        })
    })

module.exports=router