import React, {Component} from 'react'
import FlipMove from 'react-flip-move'
import {connect} from 'react-redux'
import {deleteTask, finishTask} from '../redux/actions'
import {Link} from 'react-router-dom'

import today from './TodayDate'

export class List extends Component {
  constructor() {
    super()
    this.dateCheck = this.dateCheck.bind(this)
    this.completeTask=this.completeTask.bind(this)
  }
  dateCheck(item) {
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
  completeTask(item){
    this.props.finishTask({
      title: item.title,
      complete: true,
      date: item.date,
      description: item.description,
      priority: item.priority
  })
  }
  
  render() {
    return (
      <FlipMove
        enterAnimation="elevator"
        appearAnimation="elevator"
        leaveAnimation="elevator"
        duration={800}
        staggerDelayBy={100}
        className="container">

        {this.props.tasks.length !== 0
          ? (this.props.tasks.map(item => (
            <div
              key={item.title + '/' + item.date}
              className={"item" + ((item.complete)
              ? ' complete'
              : '')}>
              <div className="task-heading">
                <h3>{item.title}</h3>
                <div className="deadline">
                  {this.dateCheck(item)}
                  {item.priority!=='' ? <span className={item.priority}>{item.priority}</span> : null}
                </div>
              </div>
              <div className="item-tools">
                <button className="edit">
                  <Link title="task details" to={"/tasks/"+item.title.replace(" ","-")+'-'+item.date}><i className="fas fa-info-circle"></i></Link>
                </button>
                <button className="complete"
                  onClick={()=>this.completeTask(item)}>
                  <i className="fas fa-check-circle"></i>
                </button>
                <button className="delete"
                  onClick={() => {
                    this.props.deleteTask(item)
                }}>
                  <i className="fas fa-minus-circle"></i>
                </button>
              </div>
            </div>
          )))
          : <h3>{this.props.noTasks}</h3>}
      </FlipMove>
    )
  }
}

const mapDispatch = {
  deleteTask,
  finishTask
}

export default connect(null, mapDispatch)(List)
