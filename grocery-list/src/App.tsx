import { Provider } from "react-redux";
import BudgetPage from "./components/budget-page";
import ToBuyPage from "./components/to-buy-page";
import { groceryStore } from "./store";

export default function App() {
  return (<>
    <Provider store={groceryStore}>
      <h1>GroceryMate</h1>
      {/* <BudgetPage/> */}
      <ToBuyPage/>
    </Provider>
  </>);
}

