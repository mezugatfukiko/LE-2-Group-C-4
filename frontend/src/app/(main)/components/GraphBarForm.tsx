import React from 'react';
import './GraphBarForm.css';

const GraphBarForm = () => {
  return (
    <div className="blocks-container">
      <div className="block block-small">
        <h2>Where Your Money Goes</h2>
      </div>

      <div className="block block-small">
        <h2>Income vs Expenses</h2>
      </div>

      <div className="block block-large">
        <h2>Add New Entry</h2>
        <form className="entry-form">
          <input type="text" placeholder="Title" />
          <input type="number" placeholder="Amount" />
          <input type="date" />
          <select>
            <option>Type</option>
            <option>Income</option>
            <option>Expense</option>
          </select>
          <select>
            <option>Category</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Bills</option>
          </select>
          <textarea placeholder="Notes (Optional)" rows={2}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GraphBarForm;
