import { Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"


export default function BudgetEditor(){

    const dispatch = useDispatch();

    function increase(){
        const action: Action = {type:'Groceries/increaseBudget'};
        dispatch(action)
    }

    function decrease(){
        const action: Action = {type:'Groceries/decreaseBudget'};
        dispatch(action)
    
    }


    return(<>
        <h3>Edit your budget</h3>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
    </>)
}