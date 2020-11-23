import React from 'react'
import {connect} from 'react-redux'
import List from './List'

function Today({tasks}) {
  return (
    <div className="list">
      <List tasks={tasks} noTasks="No tasks for today"/>
    </div>
  )
}

const today = [
  new Date().getDate(),
  new Date().getMonth() + 1,
  new Date().getFullYear()
]

const mapState = state => {
  return {
    tasks: state
      .tasks
      .filter(task => task.date === today.join('.'))
  }
}

export default connect(mapState, null)(Today)
