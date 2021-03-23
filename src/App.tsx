import s from './App.module.css';
import React, {ChangeEvent, useCallback} from "react";
import {Counter} from "./Counters/Counter";
import {SetCounter} from "./Counters/SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {
    changeMaxValueAC,
    changeStartValueAC,
    resetValueAC,
    setCounterStartValueAC,
    StateType, upValueAC
} from "./redux/App-reducer";

function App() {

//setCounter BLL:

    const mainApp = useSelector <AppRootStateType, StateType>(state => state.mainReducer)
    const dispatch = useDispatch()

    const changeMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(e))
    }, [Event])

    const changeStartValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
       dispatch(changeStartValueAC(e))
    }, [Event])

    const setCounterStartValue = useCallback(() => {
      dispatch(setCounterStartValueAC())
    }, [])

//counter BLL:
    const upValue = useCallback(() => {
       dispatch(upValueAC())
    }, [])

    const resetValue = useCallback(() => {
        dispatch(resetValueAC())
    }, [])

    return (
        <div className={s.App}>
            <div className={s.counterWrap}>
                <SetCounter
                    setCounterStartValue={setCounterStartValue}
                    changeMaxValue={changeMaxValue}
                    changeStartValue={changeStartValue}
                    startValue={mainApp.startValue}
                    maxValue={mainApp.maxValue}
                    error={mainApp.error}

                />
                <Counter
                    value={mainApp.value}
                    upValue={upValue}
                    resetValue={resetValue}
                    maxValue={mainApp.maxValue}
                    error={mainApp.error}
                />
            </div>
        </div>
    );
}

export default App;
