import dataEmoji from "../service/dataEmoji"
import { Actions, AppState, Observer } from "../types/store";
import { dashboardActions } from "../types/store";

export const changeCabeza=(payload: any) => {

    return{
        action: dashboardActions.CHANGEBACKGROUNDCABEZA,
        payload
    }
} 

export const changeManos=(payload: any) => {

    return{
        action: dashboardActions.CHANGEBACKGROUNDMANOS,
        payload
    }
}