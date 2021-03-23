import {combineReducers, createStore} from "redux";
import {appReducer} from "./App-reducer";



const rootReducer = combineReducers({
    mainReducer: appReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

store.subscribe( () => {
    localStorage.setItem('start', JSON.stringify(store.getState().mainReducer.startValue))
    localStorage.setItem('max', JSON.stringify(store.getState().mainReducer.maxValue))
})


// @ts-ignore
window.store = store;