import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import * as UserActions from '../user/user.actions'

export interface UserState {
    users:ReadonlyArray<User>,
    loading:boolean,
    loaded:boolean,
    error:any
}

export const initialState:UserState= {
    users:[],
    loading:false,
    loaded:false,
    error:null
};

export const userReducer= createReducer(
   initialState,
   on(UserActions.loadUsers,(state)=>(
    {...state,loading:true}
   )),
   on(UserActions.loadUsersSucess,(state,{users})=>(
    {...state,loading:false,loaded:true,users}
   )),
   on(UserActions.loadUsersFailure,(state,{error})=>(
    {...state,loading:false,error}
   )),
   on(UserActions.addUser,(state,{user})=>(
      {...state,loading:true,loaded:false} ////users[] will not modify here
    )),
    on(UserActions.addUserSuccess,(state,{user})=>(
        {...state,loading:false,loaded:true,users:[...state.users,user]} 
      )),
    on(UserActions.addUserFailure,(state,{error})=>(
        {...state,loading:false,loaded:false,error}
      )),
    on(UserActions.RemoveUser,(state,{id})=>(
        {...state,loading:true,loaded:false}
    )),
    on(UserActions.RemoveUserSuccess,(state,{id})=>(
        {
            ...state,
            loading:false,
            loaded:true,
            users:state.users.filter(a=>a.id!==id)
        }
    )),
    on(UserActions.RemoveUserFailure,(state,error)=>(
        {
            ...state,
            loaded:false,
            loading:false,
            error
        }
    ))
);