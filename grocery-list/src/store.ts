import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        },

        addProductToList(state, action:PayloadAction<Product>){
            // write your logic as if it was mutable
            const product: Product = action.payload;
            state.products.push(product);

        },
        setProductComplete(state, action: PayloadAction<string>){
            const desc: string = action.payload; 
            state.products.find(p => p.desc === desc).isBought = true;
        }
    }
});


export const groceryStore = configureStore({reducer:grocerySlice.reducer})
export const actions = grocerySlice.actions;