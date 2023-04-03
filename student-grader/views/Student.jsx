const React = require('react')



function Inx({student}) {
    const formUrl = `/students/${student.id}/grades`
    
    return (
        <div>
            <h2>Student</h2>
            <ul>
                <p>{student.name}</p>
                <ul>
                    {student.grades.map((grade,i)=>(
                    <li key={i}>Grade {i+1}: {grade}</li>
                    ))}
                               
                </ul>
              
               
            </ul>
            <form action= {formUrl} method='POST'>
                <label htmlFor='grade'> Grade:</label>
                <input type='number' id='grade' name='grade' min='0' max='100' required/>
                <button type='submit'>Add Grade</button>
            </form> 
            
        </div>
    )
} 

module.exports = Inx;