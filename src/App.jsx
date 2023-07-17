import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import Header from "./components/Header";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="bg-zinc-800 p-10 rounded-lg flex">
          <div className="">
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
