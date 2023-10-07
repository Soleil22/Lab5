import { Actions, dashboardActions, AppState } from "../types/store";

export const reducers = (currentAction: Actions, currentState:AppState): AppState => {
    const {action, payload} = currentAction

    switch (action){
        case dashboardActions.CHANGEBACKGROUNDCABEZA:
            return{
                ...currentState,
                cabeza: payload
            };
        case dashboardActions.CHANGEBACKGROUNDMANOS:
            return{
                ...currentState,
                manos: payload
            };
        default: 
        return currentState
    }
}