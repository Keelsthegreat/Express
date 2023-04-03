// Load Express -Require statement 
const express = require('express')
const students = require('./models/Students')
const bodyParser = require('body-parser')

// Init Express 
const app = express()
const PORT = 3001
//Middleware
app.use(express.json())
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());
app.use(bodyParser.urlencoded({extended:true}))
// Routing
app.get('/',(req,res)=>{
    //rendering (all students) Index view, passing student data
   return res.render('Index',{students})
})

app.get('/Students/NewStudent',(req,res)=>{
    //to add a new student 
    return res.render('NewStudent')
 }) 



 app.post('/Students',(req,res)=>{
     const {name} = req.body
    //  console.log(req)
     const id = students.length +1
     const newStu = {id,name,grades:[]}
     students.push(newStu)
    return res.redirect('/') 
    // this post allows you to add new students, redirects you to index once submitted 
 })

 app.post('/Students/:id/grades',(req,res)=>{
    const id = req.params.id
    const {grade} = req.body
    // const index = parseInt(id) - 1
    const index = id - 1
    //  console.log(students)
    // console.log(id)
    students[index].grades.push(parseInt(grade))   
    return res.redirect('/')
    // this post allows you to add new grades to individual student, redirects you to index once submitted 
 }) 

 app.get('/Students/:id/grades',(req,res)=>{
    const {id} = req.params 
    // const {grade} = req.body
    // console.log(req)
    const index = parseInt(id) - 1
    // students[index].grades.push(parseInt(grade))   
    return res.render('student',{student:students[index]})
    // shows data for a single student and displays the form
 }) 


// Tell app to listen 
app.listen(PORT,()=>{
    console.log(`Currently listening on Port ${PORT}`)
})
//Listening for specific PORT number