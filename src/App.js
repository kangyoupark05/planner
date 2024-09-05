import React, { useState, useEffect } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import Calendar from 'react-calendar'; // Import the calendar component
import 'react-calendar/dist/Calendar.css'; // Import default styling

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [categoryFilter, setCategoryFilter] = useState('All');
  const [view, setView] = useState('list'); // View state: list or calendar
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredTasks = categoryFilter === 'All'
    ? tasks
    : tasks.filter((task) => task.category === categoryFilter);

  const addTask = (taskName, category, dueDate) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      category: category,
      dueDate: dueDate,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Get tasks due on a specific day
  const tasksDueOnDate = tasks.filter((task) => {
    if (!task.dueDate) return false;
    return new Date(task.dueDate).toDateString() === selectedDate.toDateString();
  });

  return (
    <div>
      <h1>Task Manager</h1>

      {/* Switch between List and Calendar views */}
      <button onClick={() => setView(view === 'list' ? 'calendar' : 'list')}>
        {view === 'list' ? 'Switch to Calendar View' : 'Switch to List View'}
      </button>

      {/* Render the task input */}
      <TaskInput addTask={addTask} />

      {/* Render List or Calendar based on view state */}
      {view === 'list' ? (
        <>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
          </select>

          <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} removeTask={removeTask} />
        </>
      ) : (
        <>
          {/* Render Calendar */}
          <Calendar onChange={setSelectedDate} value={selectedDate} />

          {/* Show tasks due on the selected date */}
          <h2>Tasks due on {selectedDate.toDateString()}:</h2>
          <TaskList tasks={tasksDueOnDate} toggleComplete={toggleComplete} removeTask={removeTask} />
        </>
      )}
    </div>
  );
}

export default App;
