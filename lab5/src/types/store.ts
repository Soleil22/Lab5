import dataEmoji from "../service/dataEmoji"

export type Observer = ({render:()=> void} & HTMLElement)

export type AppState = {
    cabeza: string 
    manos: string
}

export enum dashboardActions {
    "CHANGEBACKGROUNDCABEZA" = "CHANGEBACKGROUNDCABEZA",
    "CHANGEBACKGROUNDMANOS" = "CHANGEBACKGROUNDMANOS"
}


export interface ChangeCabezaActions {
    action: dashboardActions.CHANGEBACKGROUNDCABEZA
    payload: ``
}

export interface ChangeManosActions {
    action: dashboardActions.CHANGEBACKGROUNDMANOS
    payload: ``
}

export type Actions = ChangeCabezaActions | ChangeManosActions