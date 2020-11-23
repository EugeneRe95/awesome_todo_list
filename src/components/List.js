import React, { Component } from 'react'
import FlipMove from 'react-flip-move'
import {connect} from 'react-redux'
import {deleteTask, finishTask} from '../redux/actions'

const today = [
  new Date().getDate(),
  new Date().getMonth() + 1,
  new Date().getFullYear()
]



export class List extends Component {
    constructor(props){
        super()
        this.dateCheck=this.dateCheck.bind(this)
    }
    dateCheck(item) {
        const t = today;
        const d = item
          .date
          .split('.');
        if (d.join('.') === t.join('.')) {
          return <span className="today">Today</span>
        } else if (item.date !== 'no deadline') {
          if (t[2] > d[2]) {
            return <span className="expired" title="expired">{item.date}</span>
          } else if (t[1] > d[1]) {
            console.log(t + '/' + d)
            return <span className="expired" title="expired">{item.date}</span>
          } else if (t[0] > d[0]) {
            return <span className="expired" title="expired">{item.date}</span>
          } else {
            return <span>{item.date}</span>
          }
        } else {
          return <span>{item.date}</span>
        }
      }
    render() {
        return (
            <FlipMove
      enterAnimation="elevator"
      appearAnimation="elevator"
      leaveAnimation="elevator"
      duration={700}
      staggerDelayBy={100}
      className="container">

      {this.props.tasks.length !== 0
        ? (this.props.tasks.map(item => (
          <div
            key={item.title + '/' + item.date}
            id={item.title + item.date}
            className={"item" + ((item.complete)
            ? ' complete'
            : '')}>
            <h3>{item.title} {this.dateCheck(item)}
            </h3>
            <div className="item-tools">
              <button onClick={() => {
                this.props.finishTask(item)
              }}>
                <i className="fas fa-check-circle"></i>
              </button>
              <button onClick={() => {
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
  