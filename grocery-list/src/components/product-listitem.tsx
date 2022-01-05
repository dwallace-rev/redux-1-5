import { useDispatch } from "react-redux";
import { Product } from "../store";


export default function ProductListItem(props:Product){

    const {desc, isBought} = props;
    const dispatch = useDispatch();

    function markComplete(){
        const action = {type:"Groceries/setProductComplete", payload:desc}
        dispatch(action);
    }

    return(<>
        <li key={desc}>{desc} {isBought? " **PURCHASED**": <button onClick={markComplete}>Mark as Purchased</button>}</li>
    </>)
}