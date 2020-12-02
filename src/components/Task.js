import React, { useState } from 'react'
import { connect } from 'react-redux'
import { finishTask, editTask } from '../redux/actions'
import {Link} from 'react-router-dom'

import today from './TodayDate'

function Task({tasks, globalProps, finishTask, editTask}) {
    const task = tasks.find(item=>item.title.replace(" ","-")+'-'+item.date===globalProps.match.params.id)

    const [priority, setPrior] = useState(task.priority)
    const [description, setDescrip] = useState(task.description)
    const [disabledBtn, setDisabled] = useState(true)
    const [changed, setChange] = useState(false)
    
    function handleChange(e){
        setDisabled(false)
        if(e.target.name==="priority"){
            setPrior(e.target.value)
        }else if(e.target.name==="description"){
            setDescrip(e.target.value)
        }
    }

    function saveChanges(){
        editTask({
            title: task.title,
            complete: task.complete,
            date: task.date,
            description: description,
            priority: priority
        })
        setChange(true)
        setDisabled(true)
    }
    function completeTask(task){
      finishTask({
        title: task.title,
        complete: true,
        date: task.date,
        description: task.description,
        priority: task.priority
    })
    }

    function dateCheck(item) {
        const aimDate = new Date(item.date.split('-').reverse().join("-"))
        const todayDate = new Date(today().reverse().join("-"))
        
        if (+ aimDate === + todayDate) {
          return <span className="today">Today</span>
        } else if (item.date !== 'no deadline') {
          if (todayDate > aimDate) {
            return <span className="expired" title="expired">{item.date}</span>
          } else {
            return <span>{item.date}</span>
          }
        } else {
          return <span>no deadline</span>
        }
      }
    return (
        <div className={"task-page"+((task.complete) ? ' complete' : '')}>
            <div className="tools">
                 <button className="complete" onClick={() => {
                  completeTask(task)
                }}>
                  <i className="fas fa-check-circle"></i>
                </button>
                <Link to="/" className="close"><i className="fas fa-arrow-circle-right"></i></Link>
            </div>
            <h3 className="title">{task.title} {dateCheck(task)}</h3>
            <div className="priority">
                <label>Priority: 
                    <select name="priority" value={priority} onChange={handleChange} >
                        <option value=""></option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </label>
            </div>
            <div className="description">
                <label>
                   <span>Description:</span> 
                    <textarea name="description" value={description} onChange={handleChange}>
                    </textarea>
                </label>
            </div>
            <button disabled={disabledBtn} className="save-changes" onClick={saveChanges}>Save</button>
            {changed ? <h4 className="animate__animated animate__fadeInUp">All changes are saved</h4> : null }
        </div>
    )
}

const mapState = state =>{
    return {
        tasks: state.tasks
    }
}
const mapDispatch = {
    finishTask,
    editTask
  }
  
export default connect(mapState, mapDispatch)(Task)
