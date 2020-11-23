import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addUser} from '../redux/actions'

function Greeting({addUser, user}) {
  const [name,
    setName] = useState('')
  function submitFrom() {
    if (name !== '') {
      addUser(name)
      localStorage.setItem('todoList_User', name)
      setName('')
    } else {
      alert('Please, put down your name!')
    }
  }
  if (!user) {
    return (
      <div id="greeting">
        <form className="animate__animated animate__fadeInUp">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => {
            setName(e.target.value)
          }}/>
          <button onClick={submitFrom}>Submit</button>
        </form>
      </div>
    )
  }else{
      return null
  }
}

const mapState=state=>{
  return {
    user:state.user
  }
}

const mapDispatch = {
  addUser
}

export default connect(mapState, mapDispatch)(Greeting)
