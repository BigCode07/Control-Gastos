import { useReducer, createContext } from "react";
import {
  BudgetActions,
  budgetReducer,
  BudgetState,
  initialState,
} from "../reducers/budget-reducer";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetActions>;
};
export const BudgetContext = createContext<BudgetContextProps>(null!);
export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  return;
  <BudgetContext.Provider value={{}}>{children}</BudgetContext.Provider>;
};
