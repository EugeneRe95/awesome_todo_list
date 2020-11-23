import React, { useState } from 'react'
import {connect} from 'react-redux'
import {addTask} from '../redux/actions'

function Toolbar({addTask, tasks}) {
    const [task, setTask] = useState('')
    const [taskDate, setTaskDate] = useState('')
    function addNewTask(){
        const exists = tasks.filter(item=>item.title===task && ((taskDate!=='') ? item.date===taskDate.split('-').reverse().join('.') : item.date==='no deadline'))
        if(exists.length>0){
            alert('Already exists')
        }else if(task!==''){
        addTask({title: task, complete: false, date: (taskDate!=='') ? taskDate.split('-').reverse().join('.') : ['no deadline'].join()})
        setTask('')
        }else{
            alert('Put down the task name')
        }
    }
    function handleChange(e){
        setTask(e.target.value)
    }
    function setDate(e){
        setTaskDate(e.target.value)
    }
    const today = [new Date().getDate(), new Date().getMonth()+1, new Date().getFullYear()]
    return (
        <section id="toolbar">
            <div className="container">
                <div id="numbers">
                    <p>All: <span>{tasks.length}</span></p>
                    <p>Active: <span>{tasks.filter(task=>task.complete===false).length}</span></p>
                    <p>Today's: <span>{tasks.filter(task=>task.date===today.join('.')).length}</span></p>
                    <p>Done: <span>{tasks.filter(task=>task.complete===true).length}</span></p>
                </div>
                <div className="add-task-tool">
                    <input type="text" placeholder="Task name" value={task} onChange={handleChange} />
                    <input type="date" value={taskDate} onChange={setDate} />
                    <button onClick={addNewTask}>
                    Add Task
                    </button>
                </div> 
            </div>
        </section>
    )
}

const mapState = state =>{
    return{
        tasks: state.tasks
    }
}

const mapDispatch={
    addTask
}

export default connect(mapState, mapDispatch)(Toolbar)
