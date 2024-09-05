import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('Work');
  const [dueDate, setDueDate] = useState(''); // New state for due date

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTask(task, category, dueDate);
      setTask('');
      setDueDate(''); // Clear inputs after adding
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)} // Date picker for due date
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
