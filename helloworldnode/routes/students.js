var express=require("express");
var router=express.Router();

var students=[
    {
        id:1,
        name:"Varma"
    },
    {
        id:2,
        name:"Suma"
    },
    {
        id:3,
        name:"Neelima"
    }
]

//Get all students
router.route("/")
    .get(function(req,res){
        res.send(students)
    })
    .post(function(req,res){
        students.push(req.body)
        res.send(students)
    })

//Get single student
router.route("/:id")
    .get(function(req,res,next){

        var id=req.params.id;

        var newStudent=students.filter((student)=>{
            return student.id==id;
        })

        res.send(newStudent[0])
    })
    .delete(function(req,res){
        var id=req.params.id;
        var newStudents=students.filter((student)=>{
            return student.id != id
        })
        res.send(newStudents)
    })
    .put(function(req,res){
        var id=req.params.id;
        var newStudent=students.filter((student)=>{
            return student.id == id
        })
        newStudent[0].name="Something else"
        res.send(newStudent[0])
    })

module.exports=router