import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import Header from "./components/Header";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <IncomeExpenses />
      <Balance />
      <TransactionForm />
      <TransactionList />
    </GlobalProvider>
  );
}

export default App;
