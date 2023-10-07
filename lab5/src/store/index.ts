import { Actions, AppState, Observer } from "../types/store";
import { reducers } from "./reducers";

export let appState: AppState = {
    cabeza: ``,
    manos: ``
}

let observers: Observer[] = []

export const dispatch = (actions: Actions) => {
    const clone = JSON.parse(JSON.stringify(appState))
    appState = reducers(actions, clone);
    observers.forEach(o => o.render());
}

export const addObserver = (ref: Observer) => { observers = [...observers, ref]};