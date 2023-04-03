const React = require('react')



function NewStudent({}) {
    return (
        <div>
            <h1>Add Student</h1>
            <form action='/students' method='POST'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' required/>
                <button type='submit'>Add Stu</button>
            </form>
            <hr/>
            
        </div>
    )
}


module.exports = NewStudent;