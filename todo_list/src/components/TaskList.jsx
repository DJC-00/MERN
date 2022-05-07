import React, { useState } from 'react';

const TaskList = (props) => {

    const [allToDo, setAllToDo] = useState([]);

    const setToDo = (e) => {
        setAllToDo = ([...allToDo,...props.taskList])
    };

    const deleteTask = (index, completed) => {
        
        props.deleteTask(index, completed)
    }

    const completeTask = (e) => {
        
        e.preventDefault();
        props.setComplete(e.target.value)
    }

    const uncompleteTask = (e) => {
        
        e.preventDefault();
        props.setUncomplete(e.target.value)
    }

    return (
        <div className='text-center'>
            <h2>To Do List</h2>
            <div className='row justify-content-center'>
                
                {props.taskList.map((filteredTask, index, array) =>
                <div className='col-3'>
                    <div className='text-break border border-1 m-3 shadow shadow-1'>
                        <h3 className=' pt-2 text-center'><u>{filteredTask.name}</u></h3>
                        <p className='pt-2 text-center' >{filteredTask.description}</p>
                        <div className='pt-2 d-flex justify-content-around mb-3'>
                            <form action="completeTask">
                                <label className='px-1' htmlFor="">Complete</label>
                                <input type="checkbox" value={index} checked={false} onChange={completeTask}/>
                            </form>
                            <button onClick={ (e) => {deleteTask(index, filteredTask.completed)}}>Delete</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
                <hr />
                <h2>Completed Tasks:</h2>
            <div className='row justify-content-center'>
            
                {props.completedList.map((filteredTask, index) =>
                <div className='col-3'>
                    <div className='text-break border border-1 m-3 shadow shadow-1'>
                        <h3 className=' pt-2 text-center'><u>{filteredTask.name}</u></h3>
                        <p className='pt-2 text-center' >{filteredTask.description}</p>
                        <div className='pt-2 d-flex justify-content-around mb-3'>
                            <form action="completeTask">
                                <label className='px-1' htmlFor="">Complete</label>
                                <input type="checkbox" value={index} checked={true} onChange={uncompleteTask}/>
                            </form>
                            <button onClick={ (e) => {deleteTask(index, filteredTask.completed)}}>Delete</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}
 
export default TaskList;
