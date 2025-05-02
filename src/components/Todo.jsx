import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaCheck } from 'react-icons/fa'; // Import icons

const Todo = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (value.trim() === '') return;

    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = { text: value, completed: false };
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, { text: value, completed: false }]);
    }
    setValue('');
  };

  const handleDelete = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const handleEdit = (index) => {
    setValue(items[index].text);
    setEditIndex(index);
  };

  const handleToggleCompletion = (index) => {
    const updated = [...items];
    updated[index].completed = !updated[index].completed;
    setItems(updated);
  };

  return (
    <div className="bg-gray-800 min-h-screen flex justify-center items-start pt-12">
      <div className="bg-white max-w-xl w-full p-6 rounded-lg shadow-lg space-y-6">
        <h2 className="text-center text-2xl font-semibold text-gray-800">To-Do</h2>

        <div className="flex mb-4 space-x-3">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          >
            {editIndex !== null ? 'Update' : 'Add'}
          </button>
        </div>

        <ul className="list-none p-0">
          {items.map((item, index) => (
            <li
              key={index}
              className="bg-gray-100 p-3 mb-2 flex justify-between items-center rounded-lg shadow-sm hover:bg-gray-200"
            >
              <span
                className={`${
                  item.completed ? 'line-through text-gray-500' : ''
                } flex-1 cursor-pointer`}
                onClick={() => handleToggleCompletion(index)} 
              >
                {item.text}
              </span>
              <div className="space-x-3 flex items-center">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-500 hover:text-blue-700"
                  title="Edit"
                >
                  <FaEdit size={20} />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700"
                  title="Delete"
                >
                  <FaTrashAlt size={20} />
                </button>
                <button
                  onClick={() => handleToggleCompletion(index)}
                  className="text-green-500 hover:text-green-700"
                  title="Done"
                >
                  <FaCheck size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
