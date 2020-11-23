import React from 'react'
import {connect} from 'react-redux'
import List from './List'

function Active({tasks}) {
  return (
      <div className="list">
        <List tasks={tasks} noTasks="No active tasks" />
      </div>
  )
}

const mapState = state => {
  return {
    tasks: state.tasks.filter(task => task.complete === false)
  }
}

export default connect(mapState, null)(Active)
