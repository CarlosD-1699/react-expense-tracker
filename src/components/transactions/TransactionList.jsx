import { useGlobalState } from "../../context/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();
  return (
    <div>
      {transactions.map((transaction, id) => (
        <div key={id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
