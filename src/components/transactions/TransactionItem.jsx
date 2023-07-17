import React from "react";
import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();
  return (
    <li className="bg-zinc-600 text-white px-3 py-2 rounded-lg">
      <p>{transaction.description}</p>
      <span>{transaction.amount}</span>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
