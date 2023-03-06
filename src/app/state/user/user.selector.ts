import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

// it is a whole state , eg. { users:[],loading:false, loaded:false,error:null}

export const selectUserState = createFeatureSelector<UserState>('userState')

// here we are getting the Users[]
export const selectUsers = createSelector(selectUserState,
                               (state)=> state.users
                           );
                           
// lets fetch feth loading here

export const selectLoading = createSelector(selectUserState,
    (state)=> state.loading
);

export const selectLoaded = createSelector(selectUserState,
    (state)=> state.loaded
);

export const selectError = createSelector(selectUserState,
    (state)=> state.error
);