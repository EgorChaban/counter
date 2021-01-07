import s from './App.module.css';
import React, {ChangeEvent, useState} from "react";

import {Counter} from "./Counters/Counter";
import {SetCounter} from "./Counters/SetCounter";

function App() {
//STATES
    const [value, setValue] = useState<number | 'enter values and press "set"' | 'incorrect value'>('enter values and press "set"')
    const [maxValue, setMaxValue] = useState<number>(localStorage['max'] ? Number(localStorage['max']) : 1)
    const [startValue, setStartValue] = useState<number>(localStorage['start'] ? Number(localStorage['start']) : 0)
    const [error, setError] = useState<boolean>(false)


//setCounter BLL:


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {

        const valueNumber = e.currentTarget.valueAsNumber
        setMaxValue(valueNumber)
        if (valueNumber < 0
            || valueNumber === startValue
            || valueNumber < startValue
        ) {
            setError(true)
        } else {
            setError(false)
        }
        if (valueNumber !== startValue) {
            setValue('enter values and press "set"')
        }
    }
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const valueNumber = e.currentTarget.valueAsNumber
        setStartValue(valueNumber)
        if (valueNumber < 0
            || valueNumber === maxValue
            || valueNumber > maxValue
        ) {
            setError(true)
        } else {
            setError(false)
        }
        if (valueNumber !== startValue) {
            setValue('enter values and press "set"')
        }

    }
    const setCounterStartValue = () => {
        setValue(startValue)
        localStorage['start'] = startValue
        localStorage['max'] = maxValue
    }


//counter BLL:
    const upValue = () => {
        if (typeof value === "number") {
            setValue(value + 1)
        }
    }
    const resetValue = () => {
        setValue(startValue)
    }


    return (
        <div className={s.App}>
            <div className={s.counterWrap}>
                <SetCounter
                    setCounterStartValue={setCounterStartValue}
                    changeMaxValue={changeMaxValue}
                    changeStartValue={changeStartValue}
                    startValue={startValue}
                    maxValue={maxValue}
                    error={error}

                />
                <Counter
                    value={value}
                    upValue={upValue}
                    resetValue={resetValue}
                    maxValue={maxValue}
                    error={error}
                />
            </div>
        </div>
    );
}

export default App;
