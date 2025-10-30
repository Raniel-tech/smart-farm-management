import React, { useState } from "react";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ item: "", category: "", amount: "", date: "" });

  useEffect(() => {
    const fetchExpenses = async () => {
      const querySnapshot = await getDocs(collection(db, "expenses"));
      const loadedExpenses = [];
      querySnapshot.forEach(doc => loadedExpenses.push(doc.data()));
      setExpenses(loadedExpenses);
    };
    fetchExpenses();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.item || !form.amount || !form.date || !form.category) return;
    
    await addDoc(collection(db, "expenses"), form);

    setExpenses([...expenses, form]);
    setForm({ item: "", category: "", amount: "", date: "" });
  };


  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Expense Tracker</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md mb-6 border-t-4 border-green-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            name="item"
            placeholder="Expense Item"
            value={form.item}
            onChange={handleChange}
            className="border rounded-md p-2"
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border rounded-md p-2"
          >
            <option value="">Select Category</option>
            <option value="Seeds">Seeds</option>
            <option value="Fertilizer">Fertilizer</option>
            <option value="Equipment">Equipment</option>
            <option value="Labor">Labor</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="number"
            name="amount"
            placeholder="Amount (KES)"
            value={form.amount}
            onChange={handleChange}
            className="border rounded-md p-2"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Add Expense
        </button>
      </form>

      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Expenses</h2>
        {expenses.length === 0 ? (
          <p className="text-gray-600">No expenses added yet.</p>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-100 text-left">
                <th className="p-2 border">Item</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Amount (KES)</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index} className="hover:bg-green-50">
                  <td className="p-2 border">{expense.item}</td>
                  <td className="p-2 border">{expense.category}</td>
                  <td className="p-2 border">{expense.amount}</td>
                  <td className="p-2 border">{expense.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Expenses;
