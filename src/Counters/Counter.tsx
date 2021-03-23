import React from "react";
import {Screen} from "../screen/Screen";
import {Button} from "../button/Button";
import s from './counter.module.css'


type CounterType = {
    value: number | 'enter values and press "set"' | 'incorrect value'
    upValue:()=>void
    resetValue:()=>void
    maxValue:number
    error: boolean
}

export const Counter = React.memo((props: CounterType) => {
    console.log('counter')
    return(
        <div className={s.counter} >
            <Screen value = {props.value}
                    maxValue={props.maxValue}
                    error = {props.error}
            />
            <div className={s.btnWrap}>
                <Button title='inc' changeValue={props.upValue} isDisabled={props.value === props.maxValue || props.error === true}
                />
                <Button title='reset' changeValue={props.resetValue} isDisabled={props.value === 0 || props.error === true}
                />
            </div>
        </div>

    )
})

