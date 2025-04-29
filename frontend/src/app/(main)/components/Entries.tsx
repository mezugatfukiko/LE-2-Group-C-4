import React from 'react';
import './Entries.css';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

const mockEntries = [
  {
    id: 1,
    title: 'Ribshackalaka',
    amount: 129,
    date: '2025-04-20',
    type: 'Expense',
    category: 'Food',
    notes: 'wow sarap',
  },
  {
    id: 2,
    title: 'Salary',
    amount: 3000,
    date: '2025-04-01',
    type: 'Income',
    category: 'Bills',
    notes: 'Monthly salary',
  },
  {
    id: 3,
    title: 'Marbeach',
    amount: 180,
    date: '2025-04-15',
    type: 'Expense',
    category: 'Travel',
    notes: 'Business trip',
  },
];

const Entries = () => {
  return (
    <div className="entries-container">
        <div className="block block-wide">
            <h2>Entries List</h2>
            <div className="entries-table">
            <div className="entries-header">
                <span>Title</span>
                <span>Amount</span>
                <span>Date</span>
                <span>Type</span>
                <span>Category</span>
                <span>Notes</span>
                <span>Actions</span>
            </div>
            {mockEntries.map((entry) => (
                <div className="entry-row" key={entry.id}>
                <span>{entry.title}</span>
                <span>₱{entry.amount}</span>
                <span>{entry.date}</span>
                <span>{entry.type}</span>
                <span>{entry.category}</span>
                <span>{entry.notes}</span>
                <span className="actions">
                    <button className="edit-btn"><MdEdit /></button>
                    <button className="delete-btn"><MdDeleteForever /></button>
                </span>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default Entries;
