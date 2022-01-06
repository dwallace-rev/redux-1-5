import { Provider } from "react-redux";
import ToBuyPage from "./components/to-buy-page";
import { groceryStore } from "./store";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import BudgetPage from "./components/budget-page";
import NavBar from "./components/nav-bar";

export default function App() {
  return (<>
    
      <BrowserRouter><Provider store={groceryStore}>
        <h1>GroceryMate</h1>
        <NavBar/>
        <Routes>
          <Route path="budget" element={<BudgetPage/>}/>          
          <Route path="tobuy" element={<ToBuyPage/>}/>
          <Route path="" element={<h1>Currently on the default page.</h1>}/>
          
        </Routes>
      </Provider></BrowserRouter>
    
  </>);
}

