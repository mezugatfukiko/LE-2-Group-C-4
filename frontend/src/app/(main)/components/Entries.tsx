import React, { useState } from 'react';
import './Entries.css';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import Modal from './Modal';

type Entry = {
    id: number;
    title: string;
    amount: number;
    date: string;
    type: string;
    category: string;
    notes: string;
  };  

const mockEntries = [
  { id: 1, title: 'Ribshackalaka', amount: 129, date: '2025-04-20', type: 'Expense', category: 'Food', notes: 'wow sarap' },
  { id: 2, title: 'Salary', amount: 3000, date: '2025-04-01', type: 'Income', category: 'Bills', notes: 'Monthly salary' },
  { id: 3, title: 'Marbeach', amount: 180, date: '2025-04-15', type: 'Expense', category: 'Travel', notes: 'Business trip' },
];

const Entries = () => {
  const [editEntry, setEditEntry] = useState<Entry | null>(null);
  const [deleteEntry, setDeleteEntry] = useState<Entry | null>(null);
    
  const handleEditClick = (entry: any) => setEditEntry(entry);
  const handleDeleteClick = (entry: any) => setDeleteEntry(entry);
  const closeModal = () => { setEditEntry(null); setDeleteEntry(null); };

  return (
    <div className="entries-container">
      <div className="block block-wide">
        <h2>Entries List</h2>
        <div className="entries-table">
          <div className="entries-header">
            <span>Title</span><span>Amount</span><span>Date</span>
            <span>Type</span><span>Category</span><span>Notes</span><span>Actions</span>
          </div>

          {mockEntries.map(entry => (
            <div className="entry-row" key={entry.id}>
              <span>{entry.title}</span>
              <span>₱{entry.amount}</span>
              <span>{entry.date}</span>
              <span>{entry.type}</span>
              <span>{entry.category}</span>
              <span>{entry.notes}</span>
              <span className="actions">
                <button className="edit-btn" onClick={() => handleEditClick(entry)}><MdEdit /></button>
                <button className="delete-btn" onClick={() => handleDeleteClick(entry)}><MdDeleteForever /></button>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {editEntry && (
        <Modal title="Edit Entry" onClose={closeModal}>
          <form className="entry-form">
            <input type="text" defaultValue={editEntry.title} placeholder="Title" />
            <input type="number" defaultValue={editEntry.amount} placeholder="Amount" />
            <input type="date" defaultValue={editEntry.date} />
            <select defaultValue={editEntry.type}>
              <option>Income</option>
              <option>Expense</option>
            </select>
            <select defaultValue={editEntry.category}>
              <option>Food</option>
              <option>Travel</option>
              <option>Bills</option>
            </select>
            <textarea defaultValue={editEntry.notes} rows={2} placeholder="Notes (Optional)"></textarea>
            <div className="modal-buttons">
                <button type="button" className="modal-button cancel" onClick={closeModal}>Cancel</button>
                <button type="submit" className="modal-button save">Save Changes</button>
            </div>
          </form>
        </Modal>
      )}

      {/* Delete Modal */}
      {deleteEntry && (
        <Modal title="Delete Entry?" onClose={closeModal}>
          <p>This will permanently remove the entry.</p>
          <div className="modal-buttons">
            <button className="modal-button cancel" onClick={closeModal}>Cancel</button>
            <button className="modal-button delete">Delete</button>
         </div>
        </Modal>
      )}
    </div>
  );
};

export default Entries;
