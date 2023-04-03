const React = require('react')
const students = require('../models/Students')


function Index({student}) {
    return (
        <div>
            <h1>Student Grades</h1>
            <h2>Students</h2>
            <ul>
                {students.map((stu)=> (
                    <li key= {stu.id}>
                        <p>{stu.name}</p>
                        <ul>
                           {stu.grades.map((grade,i)=>(
                            <li key={i}>Grade {i+1}: {grade}</li>
                           ))}
                                <li><a href={`/students/${stu.id}/grades`}>Add Grade</a></li>
                        </ul>
                        
                        
                        </li>
                
                ))}
            </ul>
            <p><a href='/students/newstudent'>Add a New Student</a></p>
        </div>
    )
} 

module.exports = Index;