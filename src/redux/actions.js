import { ADD_TASK, DELETE_TASK, FINISH_TASK, EDIT_TASK, ADD_USER, DELETE_ALL} from './types'

export function addTask(payload){
    return{
        type: ADD_TASK,
        payload
    }
}
export function finishTask(payload){
    return{
        type: FINISH_TASK,
        payload
    }
}
export function deleteTask(payload){
    return{
        type: DELETE_TASK,
        payload
    }
}
export function editTask(payload){
    return{
        type: EDIT_TASK,
        payload
    }
}
export function addUser(payload){
    return{
        type: ADD_USER,
        payload
    }
}
export function deleteEverything(){
    return{
        type: DELETE_ALL
    }
}