import React, { useState } from 'react';

const AddTask = (props) => {
    const taskTemplate = {
        name : "",
        description : "test",
        completed : false
    }
    const [task, setTask] = useState("")
    const [desc, setDesc] = useState("")

    const createTask = (e) => {
        e.preventDefault();
        if (task){
            let newTask = taskTemplate
            newTask.name = task
            newTask.description = desc
            setTask("")
            setDesc("")
            props.onNewTask(newTask)
            
        }
    }

    return ( 
        <div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <form onSubmit={ createTask }>
                    <h1>Create a Task!</h1>
                    <label>Task</label>
                    <br />
                    <input type="text"
                        placeholder=" "
                        onChange={ (e) => setTask(e.target.value) }
                        value={ task }
                    ></input>
                    <br />
                    <label>Description</label>
                    <br />
                    <textarea type="text"
                        placeholder=" "
                        onChange={ (e) => setDesc(e.target.value) }
                        value={ desc }
                    ></textarea>
                    <br />
                    <input className='mt-3' type="submit" value="Submit Task" />
                </form>
            </div>
            <hr />
        </div>
    );
}
 

export default AddTask