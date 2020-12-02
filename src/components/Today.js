import React from 'react'
import {connect} from 'react-redux'
import List from './List'

import today from './TodayDate'

function Today({tasks}) {
  return (
    <div className="list">
      <List tasks={tasks} noTasks="No tasks for today"/>
    </div>
  )
}

const mapState = state => {
  
  return {
    tasks: state.tasks.filter(task =>task.date === today().join('-') && task.complete===false)
  }
}

export default connect(mapState, null)(Today)
