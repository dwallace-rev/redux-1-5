import { Action, PayloadAction } from "@reduxjs/toolkit";
import { useRef } from "react"
import { useDispatch } from "react-redux";
import { actions, Product } from "../store";


export default function ProductForm(){

    const descInput = useRef(null);
    const dispatch = useDispatch();

    function addProduct(){
        const description: string = descInput.current.value ?? "nothing";
        const product: Product = {desc:description, isBought:false};
        // const action = {type: "Groceries/addProductToList", payload:product}

        const action = actions.setProductComplete(product.desc);
        dispatch(action);
    }
    

    return(<>
        <h3>Add a product</h3>
        <label htmlFor="descInput">Product Description</label><br/>
        <input ref={descInput} id="descInput" placeholder="Paper Towels"></input>
        <button onClick={addProduct}>Add Product</button>
    </>)
}