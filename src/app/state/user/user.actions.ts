import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const loadUsers=createAction('[User Component] Load Users');
export const loadUsersSucess=createAction('[User Component] Load Users Success',props<{users:readonly User[]}>());
export const loadUsersFailure=createAction('[User Component] Load Users Failure',props<{error:any}>());

export const addUser=createAction('[User Component] Add User',props<{user:User}>());
export const addUserSuccess=createAction('[User Component] Add User Success',props<{user:User}>());
export const addUserFailure=createAction('[User Component] Add User Failure',props<{error:any}>());

export const RemoveUser=createAction('[User Component] Remove User',props<{id:number}>());
export const RemoveUserSuccess=createAction('[User Component] Remove User Success',props<{id:number}>());
export const RemoveUserFailure=createAction('[User Component] Remove User Failure',props<{error:any}>());