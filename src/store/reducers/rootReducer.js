import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'

const rootreducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootreducer