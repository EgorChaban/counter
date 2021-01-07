import React, {ChangeEvent, useState} from "react";

import {Button} from "../button/Button";
import s from './counter.module.css'

export type SetCounterPropsType={
    changeMaxValue:(e:ChangeEvent<HTMLInputElement>)=>void
    changeStartValue:(e:ChangeEvent<HTMLInputElement>)=>void
    setCounterStartValue:()=>void
    startValue:number
    maxValue:number
    error: boolean
}


export function SetCounter(props: SetCounterPropsType){
    const inputClassName = props.error === true ? s.errorInput : s.input

    return(
        <div className={s.counter} >
            <input type="number" onChange={props.changeMaxValue} value={props.maxValue} className={inputClassName}/>
            <input type="number" onChange={props.changeStartValue} value={props.startValue} className={inputClassName}/>
            <div className={s.btnWrap}>
                <Button title='set' isDisabled={ props.error === true} changeValue={props.setCounterStartValue}/>
            </div>
        </div>
    )
}