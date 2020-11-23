import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {deleteEverything} from '../redux/actions'

function Header({user, deleteEverything}) {
  function trash() {
    const isBoss = window.confirm("You are going to clear user name and all tasks, aren't you?")
    if (isBoss) {
      deleteEverything()
    }
  }
  return (
    <header>
      <div className="container">
        <div className="user-name">
          {(user)
            ?
            <>
            <i className="fas fa-trash-alt" title="Delete User" onClick={trash}></i> 
            <span className="animate__animated animate__zoomIn">Hello<br/> {user}</span>
            </>
            : null}
        </div>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">All tasks</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/active-tasks">Active</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/today-tasks">Today's</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/done-tasks">Done</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const mapState = state => {
  return {user: state.user}
}
const mapDispatch = {
  deleteEverything
}

export default connect(mapState, mapDispatch)(Header)
