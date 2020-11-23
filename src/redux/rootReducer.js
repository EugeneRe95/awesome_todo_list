import { ADD_TASK, DELETE_TASK, FINISH_TASK, ADD_USER, DELETE_ALL} from './types'

const storeTasks=JSON.parse(localStorage.getItem('todoList_Tasks'))
const storeUser=localStorage.getItem('todoList_User')

const initialState = {
    tasks: storeTasks ? storeTasks : [],
    user: storeUser
}

export function rootReducer(state = initialState, action) {
  const store = JSON.parse(localStorage.getItem('todoList_Tasks'))
  switch (action.type) {
    case DELETE_ALL:
      localStorage.removeItem('todoList_Tasks')
      localStorage.removeItem('todoList_User')
      return {
        ...state,
        user: null,
        tasks: []
      }

    case ADD_TASK:
      if(store){
        localStorage.setItem('todoList_Tasks', JSON.stringify([action.payload].concat(store))) 
      }else{
        localStorage.setItem('todoList_Tasks', JSON.stringify([action.payload]))
      }
      return {...state, tasks: [action.payload].concat(state.tasks)}

    case DELETE_TASK:
      localStorage.setItem('todoList_Tasks', JSON.stringify(store.filter(task=>task.title!==action.payload.title || task.date!==action.payload.date)))
      return {...state, tasks: state.tasks.filter(task=>task.title!==action.payload.title || task.date!==action.payload.date)}

    case FINISH_TASK:
      localStorage.setItem('todoList_Tasks', JSON.stringify(store.map(task=>{
        if(task.title===action.payload.title && task.date===action.payload.date){
          return {title: task.title, complete: true, date:task.date}
        }else{
          return {title: task.title, complete: task.complete, date:task.date}}
      })))
      return {...state, tasks: state.tasks.map(task=>{
        if(task.title===action.payload.title && task.date===action.payload.date){
          return {title: task.title, complete: true, date:task.date}
        }else{
          return {title: task.title, complete: task.complete, date:task.date}}
      })}  

      case ADD_USER:
      return {
        ...state,
        user: action.payload
      }

    default:
      return state;
  }
}