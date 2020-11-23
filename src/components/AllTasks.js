import React from 'react'
import {connect} from 'react-redux'
import List from './List'

function AllTasks({tasks}) {
  return (
    <div className="list">
      <List tasks={tasks} noTasks="No tasks yet" />
    </div>
  )
}

const mapState = state => {
  return {tasks: state.tasks}
}


export default connect(mapState, null)(AllTasks)
