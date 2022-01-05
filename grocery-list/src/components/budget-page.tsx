import BudgetEditor from "./budget-editor";
import BudgetViewer from "./budget-viewer";

export default function BudgetPage(){

    return(<>
        <h2>Budget Page</h2>
        <p>Use this page to view and edit your budget.</p>
        <BudgetViewer/>
        <BudgetEditor/>
    </>)
}