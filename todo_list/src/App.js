
import React, { useState } from 'react';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  
  const [taskList, setTaskList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const addTaskToList = (task) =>{
    setTaskList([...taskList,task])
  }

  const setComplete = (index) => {
    let newTaskList = taskList
    let changedTask = newTaskList[index];
    changedTask.completed = true;
    newTaskList.splice(index,1);
    setTaskList([...newTaskList])
    setCompletedList([...completedList,changedTask ])
    
  }

  const setUncomplete = (index) => {
    let newTaskList = completedList
    let changedTask = newTaskList[index];
    changedTask.completed = false;
    newTaskList.splice(index,1);
    setCompletedList([...newTaskList])
    setTaskList([...taskList,changedTask ])

  }

  const deleteTask = (index, completed) => {

    if (completed){
      let newTaskList = completedList
      newTaskList.splice(index)
      setCompletedList([...newTaskList])
    } else{
      let newTaskList = taskList
      newTaskList.splice(index)
      setTaskList([...newTaskList])
    }
  }


  return (
    <div className="App">
      <AddTask onNewTask={ addTaskToList }/>
      <TaskList taskList={taskList} completedList={completedList} setComplete={setComplete} setUncomplete={setUncomplete} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
