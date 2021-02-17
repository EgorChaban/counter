import {ChangeEvent} from "react";

export type StateType = {
    value: number | 'enter values and press "set"' | 'incorrect value',
    maxValue: number,
    startValue: number,
    error: boolean
}

export const initialState: StateType = {
    value: 'enter values and press "set"',
    maxValue: localStorage['max'] ? Number(localStorage['max']) : 1,
    startValue: localStorage['start'] ? Number(localStorage['start']) : 0,
    error: false
}


export type ACTypes =
    changeMaxValueACType
    |changeStartValueACType
    |setCounterStartValueACType
    |upValueACType
    |resetValueACType

export const appReducer = (state = initialState, action: ACTypes): StateType => {
    let copyState = {...state}
    switch (action.type) {
        case 'CHANGE-MAX-VALUE': {
            let valueNumber = action.e.currentTarget.valueAsNumber
            copyState.maxValue = valueNumber
            if (valueNumber < 0
                || valueNumber === copyState.startValue
                || valueNumber < copyState.startValue
            ) {
                copyState.error = true
            } else {
                copyState.error = false
            }
            if (valueNumber !== copyState.startValue) {
                copyState.value = 'enter values and press "set"'
            }
            return copyState
        }

        case 'CHANGE-START-VALUE': {
            let valueNumber = action.e.currentTarget.valueAsNumber
            copyState.startValue = valueNumber
            if (valueNumber < 0
                || valueNumber === copyState.maxValue
                || valueNumber > copyState.maxValue
            ) {
                copyState.error = true
            } else {
                copyState.error = false
            }
            if (valueNumber !== copyState.startValue) {
                copyState.value = ('enter values and press "set"')
            }
            return copyState
        }

        case 'SET-START-VALUE': {
             copyState.value = state.startValue
            return copyState
        }

        case 'UP-VALUE':{
            if(typeof state.value === 'number'){
                copyState.value = state.value + 1
            }
            return copyState
        }

        case 'RESET-VALUE':{
            copyState.value = state.startValue
            return copyState
        }

        default:
            return state

    }
}

export type changeMaxValueACType = {
    type: 'CHANGE-MAX-VALUE'
    e: ChangeEvent<HTMLInputElement>
}

export const changeMaxValueAC = (e: ChangeEvent<HTMLInputElement>): changeMaxValueACType => {
    return {
        type: 'CHANGE-MAX-VALUE',
        e
    }
}

export type changeStartValueACType = {
    type: 'CHANGE-START-VALUE',
    e: ChangeEvent<HTMLInputElement>
}
export const changeStartValueAC = (e: ChangeEvent<HTMLInputElement>): changeStartValueACType => {
    return{
        type: "CHANGE-START-VALUE",
        e
    }
}
export type setCounterStartValueACType = {
    type: 'SET-START-VALUE',
}
export const setCounterStartValueAC = ():setCounterStartValueACType =>{
    return {type: 'SET-START-VALUE'}
}

export type upValueACType = {
    type: 'UP-VALUE'
}
export const upValueAC = (): upValueACType => {
    return {type: "UP-VALUE"}
}
export type resetValueACType = {
    type: 'RESET-VALUE'
}
export const resetValueAC = (): resetValueACType=> {
    return {type: "RESET-VALUE"}
}