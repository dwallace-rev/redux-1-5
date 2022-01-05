import { configureStore, createSlice } from "@reduxjs/toolkit";

// create a 'Global' initial state. An object we want to have access to throughout the entire application

export interface Product{
    desc: string
    isBought: boolean
}

export interface GroceryState{
    budget: number
    products: Product[]
}

const initialState:GroceryState = {
    budget: 120,
    products: [{desc:"Milk", isBought:false}, {desc: "Eggs", isBought: true}]
}

const grocerySlice = createSlice({
    name:"Groceries",
    initialState,
    // your state is encapsulated and protected from direct modification
    // you must use a reducer to interact with the state
    reducers:{

        increaseBudget(state){
            state.budget = state.budget + 5;
        },

        decreaseBudget(state){
            if(state.budget - 5 >= 0){
                state.budget = state.budget - 5;
            }            
        }
    }
});


export const groceryStore = configureStore({reducer:grocerySlice.reducer})