import React from 'react'
import {connect} from 'react-redux'
import List from './List'

function Done({tasks}) {
  return (
      <div className="list">
        <List tasks={tasks} noTasks="No tasks completed" />
      </div>
  )
}

const mapState = state => {
  return {
    tasks: state.tasks.filter(task => task.complete === true)
  }
}


export default connect(mapState, null)(Done)
