import { useSelector } from "react-redux";
import { GroceryState, Product } from "../store";
import ProductListItem from "./product-listitem";


export default function ProductList(){

    const products: Product[] = useSelector((state:GroceryState) => state.products);
    const productItems = products.map(p => <ProductListItem key={p.desc} {...p}/>)


    return(<>
        <ul>
            {productItems}
        </ul>
    </>)
}